import React, { useState, useRef, useContext } from "react";
import { FaNairaSign, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { AuthContext } from "../onboarding/authContext";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { toast } from "react-toastify";
import axios from "axios";

const DetailPage = ({ items }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state; 
    const { id } = useParams();
    if (!product) {
        return <p className="text-center text-red-500 text-2xl mt-10">Product not found</p>;
    }

    const [fullImg, setFullImg] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState("small");
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const thumbnailContainerRef = useRef(null);
    const variationContainerRef = useRef(null);
    const { logout, user } = useContext(AuthContext);

    const handleAddToCart = async (e) => {
        e.preventDefault();
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!user) {
            setLoading(false);
            toast.error("You have to login to add products to your cart");
            navigate("/onboarding/login");
            return;
        }

        if (quantity < 1 || isNaN(quantity)) {
            setLoading(false);
            toast.error("Quantity must be at least 1");
            return;
        }

        const data = {
            userId: user?._id,
            productId: product._id,
            quantity: parseInt(quantity),
            size: selectedSize,
            selectedImage: fullImg
        };

        try {
            const response = await axios.post("http://localhost:5000/cart/addToCart", data, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Product added to cart successfully");
            console.log(response);
        } catch (error) {
            console.error("Error adding to cart:", error);
            if (error.response && error.response.status === 401) {
                toast.error("Session expired. Please log in again.");
                logout();
            }
        } finally {
            setLoading(false);
        }
    };

    const scrollThumbnails = (direction) => {
        const container = thumbnailContainerRef.current;
        if (container) {
            const scrollAmount = direction === "left" ? -200 : 200;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const scrollVariations = (direction) => {
        const container = variationContainerRef.current;
        if (container) {
            const scrollAmount = direction === "left" ? -200 : 200;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 flex dark:bg-[#111828] dark:text-gray-500 justify-center items-center py-5">
            <div className="w-[95%] lg:w-[80%] dark:bg-[#111828] rounded-lg shadow-lg lg:p-6">
                {/* Product Details Header */}
                <h1 className="text-3xl font-bold text-gray-500 mb-6">Product Details</h1>

                {/* Image Gallery and Details */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Image Carousel */}
                    <div className="w-full lg:w-[60%]">
                        <div className="w-full h-[400px] bg-gray-100 dark:bg-[#111828] rounded-lg overflow-hidden">
                            <img
                                className="w-full h-full object-contain"
                                src={fullImg}
                                alt={product.name}
                            />
                        </div>
                        {/* Scrollable Thumbnails Container */}
                        <div className="mt-4 relative">
                            <div
                                ref={thumbnailContainerRef}
                                className="w-full overflow-x-auto scrollbar-hide"
                                style={{ scrollBehavior: "smooth" }}
                            >
                                <div className="flex gap-4" style={{ minWidth: "max-content" }}>
                                    {product.images.map((img, i) => (
                                        <LazyLoad key={i} height={96} offset={100} once placeholder={<div>Loading...</div>}>
                                            <div
                                                onClick={() => setFullImg(img)}
                                                className="w-24 h-24 cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all flex-shrink-0 group"
                                            >
                                                <img
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    src={img}
                                                    alt={`Product Variant ${i + 1}`}
                                                />
                                            </div>
                                        </LazyLoad>
                                    ))}
                                </div>
                            </div>
                            {/* Navigation Arrows */}
                            <button
                                onClick={() => scrollThumbnails("left")}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                            >
                                <FaChevronLeft className="text-gray-700" />
                            </button>
                            <button
                                onClick={() => scrollThumbnails("right")}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                            >
                                <FaChevronRight className="text-gray-700" />
                            </button>
                        </div>
                    </div>

                    {/* Product Attributes */}
                    <div className="w-full lg:w-[40%]">
                        <h2 className="text-2xl font-bold text-gray-500 mb-4">Key Attributes</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 dark:text-gray-500 bg-gray-50 rounded-lg">
                                <span className="text-lg font-semibold text-gray-500 dark:text-gray-300">Name</span>
                                <span className="text-lg">{product.name}</span>
                            </div>
                            <div className="flex flex-col justify-between p-4 dark:text-gray-500 bg-gray-50 rounded-lg">
                                <span className="text-lg font-semibold text-gray-500 dark:text-gray-300">Description</span>
                                <span className="text-lg">{product.description}</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Material</span>
                                <span className="text-lg text-gray-900 dark:text-gray-400">{product.material}</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Price</span>
                                <span className="text-lg text-gray-900 dark:text-gray-400 flex items-center">
                                    <FaNairaSign className="mr-1" />
                                    {product.price.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-500 mb-6">Place Your Order</h2>
                    <div className="space-y-6">
                        {/* Scrollable Variation Selection Container */}
                        <div className="p-3 bg-gray-50 dark:bg-[#111828] dark:border-[1px] rounded-lg">
                            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1 block">
                                Select Variation from above
                            </span>
                            <div>
                                <div className="flex">
                                    <LazyLoad height={96} offset={100} once placeholder={<div>Loading...</div>}>
                                        <div className="w-24 h-24 cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all flex-shrink-0 group">
                                            <img
                                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                                src={fullImg}
                                                alt={`Product Variant`}
                                            />
                                        </div>
                                    </LazyLoad>
                                </div>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-gray-50 dark:bg-[#111828] dark:border-[1px] rounded-lg">
                            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 lg:mb-0">
                                Select Size
                            </span>
                            <select
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                className="w-full lg:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            >
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="x-large">X-Large</option>
                                <option value="2x-large">2X-Large</option>
                                <option value="3x-large">3X-Large</option>
                                <option value="4x-large">4X-Large</option>
                            </select>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-gray-50 dark:bg-[#111828] dark:border-[1px] rounded-lg">
                            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 lg:mb-0">
                                Quantity
                            </span>
                            <input 
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-full lg:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                type="text" 
                            />
                        </div>

                        {/* Add to Cart Button */}
                        <div className="flex justify-center">
                            <button
                                disabled={loading}
                                onClick={handleAddToCart}
                                className="w-full lg:w-48 flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                <FaCartPlus className="text-xl" />
                                {loading ? "Adding to..." : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;