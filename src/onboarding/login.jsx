import React, { useState } from "react";
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen pt-4 pb-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Log in to access your account
        </p>

        {/* Form */}
        <form>
          {/* Username/Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <span className="pl-3 text-gray-500">
                <FaUser />
              </span>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 focus:outline-none rounded-lg"
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
                className="w-full px-3 py-2 focus:outline-none rounded-lg"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
                onClick={()=>navigate("/onboarding/forgetpassword")}
              className="text-sm text-blue-500 cursor-pointer hover:underline focus:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
          >
            Log In
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
            Log in with Google
          </button>
          <button
            className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/null/facebook-new.png"
              alt="Facebook Logo"
              className="w-5 h-5 text-blue-600"
            />
            Log in with Facebook
          </button>
        </div>

        {/* Sign Up */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <a onClick={()=>navigate("/onboarding/signup")} className="text-blue-500 cursor-pointer hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
