import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const location = useLocation()
  const product = location.state; 
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="border rounded-lg overflow-hidden">
            <img
              src={selectedImage || product.images[0]}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden cursor-pointer ${
                  selectedImage === image ? "border-blue-500" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6 dark:text-gray-500">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          {/* Price */}
          <div className="text-2xl font-semibold">
            ${product.price.toFixed(2)}
          </div>
          {/* Additional Details */}
          <div className="space-y-4">
            <div>
              <span className="font-semibold">Category:</span>{" "}
              {product.category?.name || "Uncategorized"}
            </div>
            <div>
              <span className="font-semibold">Brand:</span> {product.brand}
            </div>
            <div>
              <span className="font-semibold">Stock:</span>{" "}
                <span className="text-green-500">In Stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;