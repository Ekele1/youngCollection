import React, { useState } from "react";

const AddProduct = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (images.length + files.length > 10) {
      alert("You can upload a maximum of 10 images.");
      return;
    }

    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full h-full lg:mt-5">
      <div className="w-full h-[70px] font-bold text-[20px] dark:text-gray-500 flex items-center">
        <p>Add Product</p>
      </div>
      <form>
        <div className="w-full flex flex-col lg:flex-row justify-around">
          {/* Product Details Section */}
          <div className="lg:w-[48%] w-full flex flex-col gap-3 p-5 lg:bg-white dark:bg-[#1d283a] lg:shadow-md rounded-lg">
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold dark:text-gray-500">Product name</p>
              <input
                required
                placeholder="Enter product name"
                className="w-full h-[45px] outline-none border-2 dark:bg-[#1d283a] border-gray-300 rounded-lg pl-3"
                type="text"
              />
              <p className="text-[13px] text-gray-500">
                Do not exceed 20 characters for the product name
              </p>
            </div>
            <div className="w-full flex justify-between dark:text-gray-500">
              <div className="w-[47%] h-[80px] flex flex-col gap-2">
                <p className="font-bold">Category</p>
                <select
                  required
                  className="w-full h-[45px] outline-none border-2 border-gray-300 dark:bg-[#1d283a] rounded-lg"
                >
                  <option value="">Choose category</option>
                  <option value="shop">Shop</option>
                  <option value="product">Product</option>
                </select>
              </div>
              <div className="w-[47%] h-[80px] flex flex-col dark:text-gray-500 gap-2">
                <p className="font-bold">Gender</p>
                <select
                  required
                  className="w-full dark:bg-[#1d283a] h-[45px] outline-none border-2 border-gray-300 rounded-lg"
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </select>
              </div>
            </div>
            <div className="w-full dark:text-gray-500">
              <p className="font-bold">Description</p>
              <div
                contentEditable={true}
                className="w-full h-[200px] outline-none p-3 rounded-lg border-2 border-gray-400"
              ></div>
              <p className="text-[13px] text-gray-500">
                Do not exceed 100 characters for the product description
              </p>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="lg:w-[48%] w-full lg:bg-white dark:bg-[#1d283a] dark:text-gray-500 p-5 lg:shadow-md rounded-lg">
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold">Upload images</p>
              <div className="w-full flex gap-2 flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[100px] h-[120px] relative bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-gray-500">
                You can add a maximum of 10 pictures.
              </p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2"
              />
            </div>
            <div className="w-full pt-3">
                <div className="w-full flex justify-between">
                <div className="w-[47%] h-[80px] flex flex-col gap-2">
                    <p className="font-bold">Add size</p>
                    <select
                    required
                    className="w-full h-[45px] outline-none dark:bg-[#1d283a] border-2 border-gray-300 rounded-lg"
                    >
                    <option value="">Choose category</option>
                    <option value="shop">Shop</option>
                    <option value="product">Product</option>
                    </select>
                </div>
                <div className="w-[47%] h-[80px] flex flex-col gap-2">
                    <p className="font-bold">Color</p>
                    <select
                    required
                    className="w-full h-[45px] dark:bg-[#1d283a] outline-none border-2 border-gray-300 rounded-lg"
                    >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    </select>
                </div>
                </div>
            </div>
            <div className="w-full pt-5">
                <button className="w-[50%] h-[50px] border-2 border-blue-500 hover:bg-white hover:text-blue-500 bg-blue-500 rounded-lg text-white">
                    Add Product
                </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;