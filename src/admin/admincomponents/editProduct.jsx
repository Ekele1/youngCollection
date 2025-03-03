import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../onboarding/authContext";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { categories } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state; // Get product data from the previous page

  // Initialize state with product details
  const [productDetails, setProductDetails] = useState({
    name: product?.name || "",
    category: product?.category?._id || "",
    price: product?.price || "",
    description: product?.description || "",
    discount: product?.discount || "",
    brand: product?.brand || "",
    material:product?.material || ""
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found, redirecting to login.");
      // navigate("/admin");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/admin/editProduct/${product._id}`,
        productDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response.data);
      toast.success("Product updated successfully!");
      setLoading(false)
      navigate("/admin/productlist");
    } catch (error) {
      console.error("Error updating product:", error.response?.data || error);
      toast.error("Failed to update product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto dark:text-gray-500">
      <div className="w-full h-[70px] font-bold text-[25px] flex items-center">
        <p>Edit Product</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col lg:flex-row justify-around">
          {/* Product Details Section */}
          <div className="lg:w-[48%] w-full flex flex-col gap-3 p-5 dark:bg-[#1d283a] bg-white shadow-md rounded-lg">
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold">Product Name</p>
              <input
                name="name"
                value={productDetails.name}
                onChange={handleChange}
                className="w-full h-[45px] outline-none dark:bg-[#1d283a] border-2 border-gray-300 rounded-lg pl-3"
                type="text"
              />
              <p className="text-[13px] text-gray-500">
                Do not exceed 20 characters for the product name
              </p>
            </div>
            <div className="w-full flex justify-between">
              <div className="w-[47%] h-[80px] flex flex-col gap-2">
                <p className="font-bold">Category</p>
                <select
                  name="category"
                  value={productDetails.category}
                  onChange={handleChange}
                  className="w-full dark:bg-[#1d283a] h-[45px] outline-none border-2 border-gray-300 rounded-lg"
                >
                  <option value="">Choose category</option>
                  {categories?.length > 0 &&
                    categories.map((e) => (
                      <option key={e._id} value={e._id}>
                        {e.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="w-[47%] h-[80px] flex flex-col gap-2">
                <p className="font-bold">Price</p>
                <input
                  name="price"
                  value={productDetails.price}
                  onChange={handleChange}
                  className="w-full pl-2 dark:bg-[#1d283a] h-[45px] outline-none border-2 border-gray-300 rounded-lg"
                  type="number"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="font-bold">Description</p>
              <textarea
                name="description"
                value={productDetails.description}
                onChange={handleChange}
                className="w-full h-[200px] outline-none p-3 rounded-lg border-2 border-gray-400 dark:bg-[#1d283a]"
              ></textarea>
              <p className="text-[13px] text-gray-500">
                Do not exceed 100 characters for the product description
              </p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="lg:w-[48%] w-full dark:bg-[#1d283a] bg-white p-5 shadow-md rounded-lg">
            <div className="w-full pt-3">
              <div className="w-full flex justify-between">
                <div className="w-[47%] h-[80px] flex flex-col gap-2">
                  <p className="font-bold">Sale</p>
                  <input
                    name="discount"
                    value={productDetails.discount}
                    onChange={handleChange}
                    className="w-full pl-2 dark:bg-[#1d283a] h-[45px] outline-none border-2 border-gray-300 rounded-lg"
                    type="number"
                  />
                </div>
                <div className="w-[47%] h-[80px] flex flex-col gap-2">
                  <p className="font-bold">Brand</p>
                  <input
                    name="brand"
                    value={productDetails.brand}
                    onChange={handleChange}
                    className="w-full pl-2 dark:bg-[#1d283a] h-[45px] outline-none border-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-[47%] h-[80px] flex flex-col gap-2">
                  <p className="font-bold">Material</p>
                  <input
                    name="material"
                    value={productDetails.material}
                    onChange={handleChange}
                    className="w-full pl-2 dark:bg-[#1d283a] h-[45px] outline-none border-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div>
                {/* <div className="w-[47%] h-[80px] flex flex-col gap-2">
                  <p className="font-bold">Brand</p>
                  <input
                    name="brand"
                    value={productDetails.brand}
                    onChange={handleChange}
                    className="w-full pl-2 dark:bg-[#1d283a] h-[45px] outline-none border-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div> */}
              </div>
            </div>

            <div className="w-full pt-5">
            <button
              type="submit"
              disabled={loading}
              className={`w-[50%] h-[50px] border-2 border-blue-500 
                ${loading ? "bg-gray-400 cursor-not-allowed" : "hover:bg-white hover:text-blue-500 bg-blue-500"} 
                rounded-lg text-white`}
            >
              {loading ? "Updating..." : "Update Product"}
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
