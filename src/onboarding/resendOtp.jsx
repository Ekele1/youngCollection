import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ResendOTP = ({ email }) => {
  const [timer, setTimer] = useState(30);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsDisabled(false);
    }
  }, [timer]);

  const handleResendOtp = async () => {
    setIsDisabled(true);
    setTimer(30);

    try {
      const url = "https://youngcollection-server.onrender.com/auth/resendOtp";
      await axios.post(url, { email });
      toast.success("New OTP sent successfully!");
    } catch (error) {
      console.error("Resend OTP error:", error);
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <div className="text-center mt-4">
      <p className="text-gray-600">
        Didn’t receive the OTP?&nbsp;
        <button
          onClick={handleResendOtp}
          disabled={isDisabled}
          className={`text-blue-500 font-medium ${
            isDisabled ? "cursor-not-allowed opacity-50" : "hover:underline"
          }`}
        >
          Resend OTP
        </button>
      </p>
      {isDisabled && <p className="text-sm text-gray-500">You can resend OTP in {timer}s</p>}
    </div>
  );
};

export default ResendOTP;
