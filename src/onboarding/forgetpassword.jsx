import axios from "axios";
import React, { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Step 1: Request OTP
  const handleRequestOTP = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const url = "https://youngcollection-server.onrender.com/forgot-password/request-otp";
      await axios.post(url, { email });
      toast.success("OTP sent to your email!");
      setStep(2); // Move to OTP verification step
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP & Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!otp || !newPassword) {
      toast.error("Please enter the OTP and new password.");
      return;
    }

    setLoading(true);
    try {
      const url = "http://localhost:5000/forgot-password/verify-otp";
      await axios.post(url, { email, otp, newPassword });
      toast.success("Password reset successful!");
      navigate("/onboarding/login"); // Redirect to login
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {step === 1 ? "Forgot Your Password?" : "Enter OTP & New Password"}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {step === 1
            ? "Enter your email address to receive an OTP."
            : "Enter the OTP sent to your email and set a new password."}
        </p>

        {step === 1 ? (
          // Step 1: Request OTP Form
          <form onSubmit={handleRequestOTP}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <span className="pl-3 text-gray-500">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 focus:outline-none rounded-lg"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-lg text-white transition duration-200 
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"}`}
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          // Step 2: OTP & New Password Form
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                required
                disabled={loading}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <span className="pl-3 text-gray-500">
                  <FaKey />
                </span>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 focus:outline-none rounded-lg"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-lg text-white transition duration-200 
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
              disabled={loading}
            >
              {loading ? "Resetting Password..." : "Reset Password"}
            </button>
          </form>
        )}

        {/* Back to Login */}
        <p className="text-center text-gray-600 mt-6">
          Remembered your password?{" "}
          <span
            onClick={() => navigate("/onboarding/login")}
            className="text-purple-500 cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
