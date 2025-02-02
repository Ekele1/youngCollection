import React, { useState } from "react";
import { FaLock, FaUser, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen pt-4 pb-4 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Sign up to get started with your account
        </p>

        {/* Form */}
        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <span className="pl-3 text-gray-500">
                <FaUser />
              </span>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
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
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg relative">
              <span className="pl-3 text-gray-500">
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg relative">
              <span className="pl-3 text-gray-500">
                <FaLock />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirm your password"
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-400 px-4">OR</span>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4">
          <button
            className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <img
              src="https://img.icons8.com/color/48/null/google-logo.png"
              alt="Google Logo"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>
          <button
            className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/null/facebook-new.png"
              alt="Facebook Logo"
              className="w-5 h-5 text-blue-600"
            />
            Sign up with Facebook
          </button>
        </div>

        {/* Already Have an Account */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
