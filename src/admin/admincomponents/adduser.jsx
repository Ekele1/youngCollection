import React, { useState } from "react";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    permissions: {
      addProduct: false,
      updateProduct: false,
      deleteProduct: false,
      applyDiscount: false,
    },
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      permissions: { ...prev.permissions, [name]: checked },
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("User added successfully with permissions:");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        permissions: {
          addProduct: false,
          updateProduct: false,
          deleteProduct: false,
          applyDiscount: false,
        },
      });
    }
  };

  return (
    <div className="w-full lg:p-5 bg-gray-100 min-h-screen lg:mt-5 dark:bg-[#0f172a] flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white dark:bg-[#1d283a] dark:text-gray-500 shadow-lg rounded-lg p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-500">Add New User</h1>
          <p className="text-sm text-gray-500">
            Fill in the form below to add a new user and set permissions.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Info Section */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-500"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter user's name"
              className={`w-full mt-1 p-3 dark:bg-[#1d283a] border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter user's email"
              className={`w-full mt-1 p-3 border dark:bg-[#1d283a] rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-500"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter user's password"
              className={`w-full mt-1 dark:bg-[#1d283a] p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-500"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm user's password"
              className={`w-full mt-1 p-3 dark:bg-[#1d283a] border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Permissions Section */}
          <div>
            <h2 className="text-lg font-bold text-gray-800">Permissions</h2>
            <p className="text-sm text-gray-500 mb-4">
              Select the permissions to assign to this user.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="addProduct"
                    checked={formData.permissions.addProduct}
                    onChange={handlePermissionChange}
                    className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">Add Product</span>
                </label>
              </div>

              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="updateProduct"
                    checked={formData.permissions.updateProduct}
                    onChange={handlePermissionChange}
                    className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">Update Product</span>
                </label>
              </div>

              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="deleteProduct"
                    checked={formData.permissions.deleteProduct}
                    onChange={handlePermissionChange}
                    className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">Delete Product</span>
                </label>
              </div>

              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="applyDiscount"
                    checked={formData.permissions.applyDiscount}
                    onChange={handlePermissionChange}
                    className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">Apply Discount</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
