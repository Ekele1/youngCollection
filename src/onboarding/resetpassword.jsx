import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle password reset logic here
    alert("Password reset successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Reset Your Password
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Create a new password to regain access to your account.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* New Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              New Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <span className="pl-3 text-gray-500">
                <FaLock />
              </span>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="pr-3 text-gray-500 focus:outline-none"
              >
                {passwordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <span className="pl-3 text-gray-500">
                <FaLock />
              </span>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="pr-3 text-gray-500 focus:outline-none"
              >
                {confirmPasswordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-200"
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Remembered your password?{" "}
            <a href="#" className="text-green-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
