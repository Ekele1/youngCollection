import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NewCategory = () => {
  const [category, setCategory] = useState("");
  const [sale, setSale] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!category.trim()) {
      toast.error("Category name is required");
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("token");
    // console.log(token)
    if (!token) {
      toast.error("Unauthorized. Please log in.");
    //   navigate("/admin");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/admin/addCategory",
        { name: category, sale: sale },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Category added successfully!");
    //   console.log(response)
      setCategory(""); // Clear input field after success
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add category.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-3 shadow-md dark:bg-[#1d283a] mt-10 dark:text-gray-500">
      <div className="w-full h-[70px] font-bold text-[20px] flex items-center">
        <p>Add New Category</p>
      </div>
      <form onSubmit={handleSend} className="w-full flex flex-col gap-3 dark:bg-[#1d283a] rounded-lg">
        <div className="w-full h-[70px] flex flex-col lg:flex-row items-center justify-between">
          <p>Category Name</p>
          <input
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category name"
            className="w-[70%] h-[40px] dark:bg-[#1d283a] outline-none border-[1.5px] rounded-md border-gray-400 pl-2"
            type="text"
          />
        </div>
        <div className="w-full h-[70px] flex flex-col lg:flex-row items-center justify-between">
          <p>Sale</p>
          <input
            value={sale}
            onChange={(e) => setSale(e.target.value)}
            placeholder="discount"
            className="w-[70%] h-[40px] dark:bg-[#1d283a] outline-none border-[1.5px] rounded-md border-gray-400 pl-2"
            type="number"
          />
        </div>
        <div className="w-full h-[100px] flex flex-col lg:flex-row items-center justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-[50%] h-[40px] rounded-md dark:text-black ${
              loading ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            {loading ? "Adding..." : "ADD"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCategory;
