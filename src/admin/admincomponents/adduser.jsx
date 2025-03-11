import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AddUser = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.role) newErrors.role = "Role is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized. Please log in.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://youngcollection-server.onrender.com/admin/addNewUser",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:p-3 bg-gray-100 min-h-screen lg:mt-5 dark:bg-[#0f172a] flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white dark:bg-[#1d283a] dark:text-gray-500 shadow-lg rounded-lg p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-500">Add New User</h1>
          <p className="text-sm text-gray-500">
            Fill in the form below to add a new user.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-500">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter user's full name"
              className={`w-full mt-1 p-3 border dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter user's email"
              className={`w-full mt-1 p-3 border dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter user's password"
                className={`w-full mt-1 p-3 border dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm user's password"
                className={`w-full mt-1 p-3 border dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>

          <div>
            <label className="text-lg font-medium text-gray-500">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`w-full mt-1 p-3 border dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.role ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              {/* <option value="moderator">Moderator</option> */}
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition"
            >
              {loading ? "Adding User..." : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
