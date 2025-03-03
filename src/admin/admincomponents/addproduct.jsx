import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../onboarding/authContext";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { categories } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    discount: "",
    brand: "",
    material: "",
    images: [],
  });

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
  
    if (productDetails.images.length + files.length > 10) {
      toast.error("You can upload a maximum of 10 images.");
      return;
    }
  
    // Validate file types (JPEG, PNG)
    const validFiles = files.filter((file) =>
      ["image/jpeg", "image/png"].includes(file.type)
    );
  
    if (validFiles.length !== files.length) {
      toast.error("Only JPEG and PNG images are allowed.");
      return;
    }
  
    setProductDetails((prev) => ({
      ...prev,
      images: [...prev.images, ...validFiles],
    }));
  };
  

  const removeImage = (index) => {
    setProductDetails((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      setLoading(false);
      return;
    }
  
    try {
      const formData = new FormData();
  
      Object.entries(productDetails).forEach(([key, value]) => {
        if (key === "images") {
          value.forEach((file) => formData.append("images", file));
        } else {
          formData.append(key, value);
        }
      });
  
      const response = await axios.post(
        "http://localhost:5000/admin/createNewProduct",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      toast.success(response.data.message);
  
      // ✅ Reset all input fields and images
      setProductDetails({
        name: "",
        category: "",
        price: "",
        description: "",
        discount: "",
        brand: "",
        material: "",
        images: [],
      });
  
    } catch (error) {
      console.error("❌ Error adding product:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Failed to add product");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="w-full h-full lg:mt-5">
      <div className="w-full h-[70px] font-bold text-[20px] dark:text-gray-500 flex items-center">
        <p>Add Product</p>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="w-full flex flex-col lg:flex-row justify-around">
          {/* Product Details Section */}
          <div className="lg:w-[48%] w-full flex flex-col gap-3 p-5 lg:bg-white dark:bg-[#1d283a] lg:shadow-md rounded-lg">
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold dark:text-gray-500">Product Name</p>
              <input
                name="name"
                required
                value={productDetails.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full h-[45px] outline-none border-2 dark:text-white dark:bg-[#1d283a] border-gray-300 rounded-lg pl-3"
                type="text"
              />
            </div>
            <div className="w-full flex justify-between dark:text-gray-500">
              <div className="w-[47%] h-[80px] flex flex-col gap-2">
                <p className="font-bold">Category</p>
                <select
                  name="category"
                  required
                  value={productDetails.category}
                  onChange={handleChange}
                  className="w-full h-[45px] outline-none border-2 border-gray-300 dark:bg-[#1d283a] rounded-lg"
                >
                  <option value="">Choose category</option>
                  {categories?.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[47%] h-[80px] flex flex-col dark:text-gray-500 gap-2">
                <p className="font-bold">Price</p>
                <input
                  name="price"
                  required
                  value={productDetails.price}
                  onChange={handleChange}
                  className="w-full dark:bg-[#1d283a] h-[45px] outline-none border-2 border-gray-300 rounded-lg"
                  type="number"
                />
              </div>
            </div>
            <div className="w-full dark:text-gray-500">
              <p className="font-bold">Description</p>
              <textarea
                name="description"
                value={productDetails.description}
                onChange={handleChange}
                className="w-full h-[200px] outline-none dark:bg-[#1d283a] p-3 rounded-lg border-2 border-gray-400"
              ></textarea>
            </div>
          </div>

          {/* Image Upload & Additional Details */}
          <div className="lg:w-[48%] w-full lg:bg-white dark:bg-[#1d283a] dark:text-gray-500 p-5 lg:shadow-md rounded-lg">
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold">Upload Images</p>
              <div className="w-full flex gap-2 flex-wrap">
                {productDetails.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[100px] h-[120px] relative bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      src={URL.createObjectURL(image)}
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
              <p className="text-[13px] text-gray-500">Max 10 images.</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2"
              />
            </div>
            <div className="w-full pt-3 flex justify-between">
              <div className="w-[47%]">
                <p className="font-bold">Discount</p>
                <input
                  name="discount"
                  value={productDetails.discount}
                  onChange={handleChange}
                  className="w-full h-[45px] outline-none dark:bg-[#1d283a] border-2 border-gray-300 rounded-lg"
                  type="text"
                />
              </div>
              <div className="w-[47%]">
                <p className="font-bold">Brand</p>
                <input
                  name="brand"
                  value={productDetails.brand}
                  onChange={handleChange}
                  className="w-full h-[45px] outline-none dark:bg-[#1d283a] border-2 border-gray-300 rounded-lg"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full pt-3 flex justify-between">
              <div className="w-[47%]">
                <p className="font-bold">Material</p>
                <input
                  name="material"
                  value={productDetails.material}
                  onChange={handleChange}
                  className="w-full h-[45px] outline-none dark:bg-[#1d283a] border-2 border-gray-300 rounded-lg"
                  type="text"
                />
              </div>
              {/* <div className="w-[47%]">
                <p className="font-bold">Brand</p>
                <input
                  name="brand"
                  value={productDetails.brand}
                  onChange={handleChange}
                  className="w-full h-[45px] outline-none dark:bg-[#1d283a] border-2 border-gray-300 rounded-lg"
                  type="text"
                />
              </div> */}
            </div>
            <div className="w-full pt-5">
              <button
                disabled={loading}
                className="w-[50%] h-[50px] border-2 border-blue-500 hover:bg-white hover:text-blue-500 bg-blue-500 rounded-lg text-white"
              >
                {loading ? "Adding..." : "Add Product"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
