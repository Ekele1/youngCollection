import React, { useState, useRef, useContext, useEffect } from "react";
import { FaNairaSign, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { AuthContext } from "../onboarding/authContext";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { debounce } from "lodash";
import { Skeleton } from "@mui/material";

const DetailPage = () => {
  const [sample, setSample] = useState([1, 2, 3, 4, 5]);
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  const { id } = useParams();
  const [fullImg, setFullImg] = useState(product?.images?.[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const thumbnailContainerRef = useRef(null);
  const { logout, user, setCart } = useContext(AuthContext);

  // Redirect if product is not found
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-red-500 text-2xl">
          Product not found. Please go back to the{" "}
          <button onClick={() => navigate("/")} className="text-blue-500 underline">
            homepage
          </button>
        </p>
      </div>
    );
  }

  // Debounced add to cart function
  const debouncedAddToCart = debounce(async (data, token) => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.post(`${apiBaseUrl}/cart/addToCart`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (response.data.data?.cart) {
        setCart(response.data.data.cart.items);
        toast.success("Product added successfully");
      } else {
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        logout();
      } else {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, 500);

  // Handle add to cart
  const handleAddToCart = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    
    if (!user) {
      setLoading(false);
      toast.error("Please login to add products to your cart");
      navigate("/onboarding/login");
      return;
    }

    if (quantity < 1 || isNaN(quantity)) {
      setLoading(false);
      toast.error("Quantity must be at least 1");
      return;
    }

    if (!selectedSize) {
      setLoading(false);
      toast.error("Please select a size");
      return;
    }

    const data = {
      userId: user?._id,
      productId: product._id,
      quantity: parseInt(quantity),
      size: selectedSize,
      selectedImage: fullImg,
    };

    debouncedAddToCart(data, token);
  };

  // Scroll thumbnails
  const scrollThumbnails = (direction) => {
    const container = thumbnailContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Check scroll position
  const checkScroll = (container) => {
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    if (container) {
      checkScroll(container);
      container.addEventListener("scroll", () => checkScroll(container));
      return () => container.removeEventListener("scroll", () => checkScroll(container));
    }
  }, []);

  // Set full image when thumbnail is clicked
  const handleThumbnailClick = (img) => {
    setFullImg(img);
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-36 md:h-96 flex items-center justify-center bg-gradient-to-r from-teal-50 to-cyan-50">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Product Details</h1>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="w-full aspect-square bg-white rounded-xl shadow-sm p-4 flex items-center justify-center">
              <img 
                className="w-full h-full object-contain" 
                src={fullImg || product.images[0]} 
                alt={product.name} 
              />
            </div>
            
            <div className="relative">
              <div 
                ref={thumbnailContainerRef}
                className="w-full flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              >
                {product.images.map((img, i) => (
                  <div 
                    key={i}
                    onClick={() => handleThumbnailClick(img)}
                    className={`min-w-[80px] h-20 bg-white rounded-md p-1 cursor-pointer snap-start flex-shrink-0 border-2 ${
                      fullImg === img ? "border-teal-500" : "border-transparent"
                    }`}
                  >
                    <img 
                      className="w-full h-full object-contain" 
                      src={img} 
                      alt={`${product.name} thumbnail ${i}`} 
                    />
                  </div>
                ))}
              </div>
              
              {canScrollLeft && (
                <button 
                  onClick={() => scrollThumbnails("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  <FaChevronLeft className="text-gray-600" />
                </button>
              )}
              
              {canScrollRight && (
                <button 
                  onClick={() => scrollThumbnails("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  <FaChevronRight className="text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h2>
            
            <div className="flex items-center gap-4 my-4">
              <p className="flex items-center text-xl font-semibold text-teal-700">
                <FaNairaSign className="mr-1" />
                {product.price?.toLocaleString()}
              </p>
              {product.originalPrice && (
                <p className="flex items-center text-gray-500 line-through">
                  <FaNairaSign className="mr-1" />
                  {product.originalPrice.toLocaleString()}
                </p>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">{product.description || "No description available"}</p>
            
            <div className="space-y-6">
              {/* Size Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Select size</option>
                  {["SM", "MD", "L", "XL", "2XL", "3XL"].map((size) => (
                    <option key={size} value={size.toLowerCase()}>{size}</option>
                  ))}
                </select>``
              </div>
              <div className="w-full flex items-center gap-3">
                  <p>variant</p>
                  <div className="w-[80px] h-20">
                    <img className="w-full h-full object-contain rounded-md" src={fullImg} alt="" />
                  </div>
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Quantity</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={loading}
                  className="mt-auto bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="animate-pulse">Adding...</span>
                  ) : (
                    <>
                      <FaCartPlus />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">More Products Like This</h3>
            <div className="flex gap-3">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <FaChevronLeft />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <FaChevronRight />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sample.map((item, i) => (
              <div 
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="aspect-square bg-gray-50 p-4">
                  <img 
                    className="w-full h-full object-contain" 
                    src="./shoe-rb.png" 
                    alt={`Product ${i}`} 
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-gray-900">Men's Shoe</h4>
                  <p className="flex items-center text-teal-700 mt-1">
                    <FaNairaSign className="mr-1" />
                    40,000
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;