import axios from "axios";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const user = JSON.parse(localStorage.getItem("userEmail"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      toast.error("Please enter all 6 digits.");
      return;
    }

    setLoading(true);

    try {
      const data = {otp: enteredOtp, email: user.email}
      const url = "https://youngcollection-server.onrender.com/auth/verifyOtp";
      const response = await axios.post(url, data);
    //   console.log(response);

      toast.success("OTP Verified Successfully!");
      setTimeout(() => navigate("/onboarding/login"), 2000);
    } catch (error) {
      console.error("OTP verification error:", error);

      if (error.response) {
        toast.error(error.response.data?.message || "OTP verification failed. Try again.");
      } else if (error.request) {
        toast.error("Network error. Please check your internet connection.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    setLoading(true); // Added this to prevent multiple clicks

    try {
      const data = {
        email: user?.email,
        role: user?.role,
      };

      if (!user || !user.email) {
        toast.error("User email not found. Please try again.");
        setLoading(false);
        return;
      }

      const url = "http://localhost:5000/auth/resendOtp";
      const response = await axios.post(url, data);
    //   console.log(response);
      toast.success("OTP resent successfully!");
    } catch (error) {
      console.error("OTP resend error:", error);

      if (error.response) {
        toast.error(error.response.data?.message || "OTP resend failed. Try again.");
      } else if (error.request) {
        toast.error("Network error. Please check your internet connection.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-4">Enter OTP</h2>
        <p className="text-gray-600 text-center mb-6">
          We sent a 6-digit OTP to your email.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Didn't receive OTP?&nbsp;
          <button
            onClick={handleResendOtp}
            disabled={loading}
            className={`text-blue-500 hover:underline ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
