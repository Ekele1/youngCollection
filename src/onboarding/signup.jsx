import React, { useState, useContext } from "react";
import { FaLock, FaUser, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../onboarding/authContext";

const SignupPage = () => {
    const { signup } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            const success = await signup({
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password,
            });

            if (success) {
                toast.success("Signup successful! Redirecting to OTP verification...");
                setTimeout(() => navigate("/onboarding/otpVerify"), 2000);
            }
        } catch (error) {
            toast.error(error.message || "Signup failed. Try again.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen pt-5 pb-5 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 px-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-4">
                    Create an Account
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Sign up to get started with your account
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    {/* Full Name Field */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <FaUser className="text-gray-500" />
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full px-2 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <FaEnvelope className="text-gray-500" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-2 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 relative">
                            <FaLock className="text-gray-500" />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full px-2 focus:outline-none"
                                required
                            />
                            <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 text-gray-500">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 relative">
                            <FaLock className="text-gray-500" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className="w-full px-2 focus:outline-none"
                                required
                            />
                            <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute right-3 text-gray-500">
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 rounded-lg transition duration-200 ${
                            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                        } text-white focus:ring-2 focus:ring-green-400 focus:outline-none`}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                {/* Login Redirect */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/onboarding/login")} className="text-green-500 cursor-pointer hover:underline">
                        Log in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
