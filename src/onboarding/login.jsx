import React, { useState, useContext } from "react";
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../onboarding/authContext";
import { toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const { userLogin, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await userLogin(email, password);
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    // console.log("Google Login Success:", credentialResponse);
    try {
      await googleLogin(credentialResponse.credential);
      navigate("/");
    } catch (error) {
      // console.error("Google login error:", error);
      toast.error(error.message || "Google login failed. Please try again.");
    }
  };

  const handleGoogleError = () => {
    toast.error("Google login failed. Please try again.");
  };

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="lg:h-screen min-h-screen flex items-center justify-center lg:bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white rounded-lg lg:shadow-lg w-[100%] h-full lg:h-[90%] max-w-md p-4 lg:p-8">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Welcome Back
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-8">
            Log in to access your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 focus:outline-none rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                <span className="ml-2">Remember me</span>
              </label>
              <a
                onClick={() => navigate("/onboarding/forgetpassword")}
                className="text-sm text-blue-500 cursor-pointer hover:underline focus:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-400 px-4">OR</span>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex lg:flex-row flex-col gap-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
              theme="filled_blue"
              size="large"
              text="signin_with"
              shape="rectangular"
            />
            <button className="w-full lg:w-[48%] flex items-center lg:text-[14px] justify-center gap-[4px] lg:py-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200">
              <img src="https://img.icons8.com/ios-filled/50/null/facebook-new.png" alt="Facebook Logo" className="w-5 h-5 text-blue-600" />
              Log in with Facebook
            </button>
          </div>

          {/* Sign Up */}
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <a onClick={() => navigate("/onboarding/signup")} className="text-blue-500 cursor-pointer hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;