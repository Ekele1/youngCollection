import React, { useState, useContext } from "react";
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../onboarding/authContext";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const { adminLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async(e) => {
    setLoading(true)
    e.preventDefault();
    try {
      await adminLogin(email, password);
      // console.log(response);
      const token = localStorage.getItem("token");
    //   console.log("Token:", token);
      navigate("/admin/adminDashboard");
    } catch (err) {
      toast.error(err.message || "Login failed. Please try again.");
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen pt-4 pb-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome Back ADMIN
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Log in to access your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="flex items-center justify-between mb-6">
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

      </div>
    </div>
  );
};

export default AdminLogin;
