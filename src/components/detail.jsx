import React, { useState, useRef } from "react";
import { FaNairaSign, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";

const DetailPage = ({ items }) => {
    const { id } = useParams();
    const product = items.find((item) => item.id === parseInt(id));
    if (!product) {
        return <p className="text-center text-red-500 text-2xl mt-10">Product not found</p>;
    }

    const [fullImg, setFullImg] = useState(product.image);
    const [selectedSize, setSelectedSize] = useState("small");
    const thumbnailContainerRef = useRef(null);
    const variationContainerRef = useRef(null);

    const handleAddToCart = () => {
        alert(`Added ${product.name} (${selectedSize}) to cart!`); // Replace with actual cart logic
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
            <div className="w-[95%] lg:w-[80%] bg-white dark:bg-[#111828] rounded-lg shadow-lg p-6">
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
                                    {product.otherImg?.map((img, i) => (
                                        <LazyLoad key={i} height={96} offset={100} once>
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
                                <span className="text-lg font-semibold text-gray-500">Name</span>
                                <span className="text-lg">{product.name}</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700">Material</span>
                                <span className="text-lg text-gray-900">{product.material}</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700">Price</span>
                                <span className="text-lg text-gray-900 flex items-center">
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
                        <div className="p-6 bg-gray-50 dark:bg-[#111828] dark:border-[1px] rounded-lg relative">
                            <span className="text-lg font-semibold text-gray-700 mb-4 block">
                                Select Variation
                            </span>
                            <div
                                ref={variationContainerRef}
                                className="w-full overflow-x-auto scrollbar-hide"
                                style={{ scrollBehavior: "smooth" }}
                            >
                                <div className="flex gap-4" style={{ minWidth: "max-content" }}>
                                    {product.otherImg?.map((img, i) => (
                                        <LazyLoad key={i} height={96} offset={100} once>
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
                                onClick={() => scrollVariations("left")}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                            >
                                <FaChevronLeft className="text-gray-700" />
                            </button>
                            <button
                                onClick={() => scrollVariations("right")}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                            >
                                <FaChevronRight className="text-gray-700" />
                            </button>
                        </div>

                        {/* Size Selection */}
                        <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-gray-50 dark:bg-[#111828] dark:border-[1px] rounded-lg">
                            <span className="text-lg font-semibold text-gray-700 mb-4 lg:mb-0">
                                Select Size
                            </span>
                            <select
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                className="w-full lg:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            >
                                <option value="small">Small</option>
                                <option value="large">Large</option>
                                <option value="x-large">X-Large</option>
                                <option value="2x-large">2X-Large</option>
                                <option value="3x-large">3X-Large</option>
                                <option value="4x-large">4X-Large</option>
                            </select>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="flex justify-center">
                            <button
                                onClick={handleAddToCart}
                                className="w-full lg:w-48 flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                <FaCartPlus className="text-xl" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;