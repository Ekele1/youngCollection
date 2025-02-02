import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here (e.g., API call)
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Forgot Your Password?
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your email address below, and we'll send you a link to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <span className="pl-3 text-gray-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-200"
          >
            Send Reset Link
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-400 px-4">OR</span>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>

        {/* Back to Login */}
        <p className="text-center text-gray-600">
          Remembered your password?{" "}
          <a href="#" className="text-purple-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
