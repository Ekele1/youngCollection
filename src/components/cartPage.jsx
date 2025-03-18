import React, { useState, useContext } from "react";
import { AuthContext } from "../onboarding/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { FaNairaSign } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";

const CartPage = () => {
    const nav = useNavigate();
    const [loading, setLoading] = useState({}); // Track loading state for each item
    const { cart, user, setCart } = useContext(AuthContext);

    // Calculate subtotal dynamically (with fallback for invalid cart)
    const subtotal = Array.isArray(cart) ? cart.reduce((total, item) => total + (item.product?.price || 0) * (item.quantity || 0), 0) : 0;

    const handleDeleteItem = async (itemId) => {
        if (!itemId || !user?._id) return;

        setLoading((prev) => ({ ...prev, [itemId]: true })); // Set loading state for this item
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Please log in to manage your cart.");
            setLoading((prev) => ({ ...prev, [itemId]: false }));
            return;
        }

        const apiBaseUrl = import.meta.env.VITE_BASE_URL;

        try {
            const response = await axios.delete(`${apiBaseUrl}/cart/removeFromCart`, {
                headers: { Authorization: `Bearer ${token}` },
                data: { userId: user._id, itemId }, // Pass data in the `data` property
            });

            // Check if the response contains the updated cart
            if (response.data.data?.cart) {
                setCart(response.data.data.cart.items); // Update the cart state with the items array
                toast.success("Product removed successfully.");
            } else {
                toast.error("Failed to remove product. Please try again.");
            }
        } catch (error) {
            console.error("Error removing product:", error);
            toast.error("Error removing product.");
        } finally {
            setLoading((prev) => ({ ...prev, [itemId]: false })); // Reset loading state
        }
    };

    const handleUpdateCart = async (itemId, newQuantity) => {
        if (!itemId || !user?._id || newQuantity < 1) return;

        setLoading((prev) => ({ ...prev, [itemId]: true })); // Set loading state for this item
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Please log in to manage your cart.");
            setLoading((prev) => ({ ...prev, [itemId]: false }));
            return;
        }

        try {
            const apiBaseUrl = import.meta.env.VITE_BASE_URL;
            const response = await axios.patch(
                `${apiBaseUrl}/cart/updateCart`,
                { userId: user._id, itemId, quantity: newQuantity },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Check if the response contains the updated cart
            if (response.data.data?.cart) {
                setCart(response.data.data.cart.items); // Update the cart state with the items array
                toast.success("Cart updated successfully.");
            } else {
                toast.error("Failed to update cart. Please try again.");
            }
        } catch (error) {
            console.error("Error updating cart:", error);
            toast.error("Error updating cart.");
        } finally {
            setLoading((prev) => ({ ...prev, [itemId]: false })); // Reset loading state
        }
    };

    // If no user is found, display a message to log in
    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Please Log In
                    </h2>
                    <p className="text-gray-600 mb-6">
                        You need to log in to view your cart content.
                    </p>
                    <button
                        onClick={() => nav("/login")} // Redirect to login page
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Log In
                    </button>
                </div>
            </div>
        );
    }

    // If cart is empty or not an array, display a message
    if (!Array.isArray(cart) || cart.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Your Cart is Empty
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Add items to your cart to proceed.
                    </p>
                    <button
                        onClick={() => nav("/products")} // Redirect to products page
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Shop Now
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 bg-gray-100 py-8 lg:px-8 px-4">
            {/* Cart Items Section */}
            <div className="lg:w-[68%] w-full bg-white rounded-lg shadow-sm">
                <div className="w-full p-5 border-b border-gray-200">
                    <p className="text-lg font-semibold">Cart ({cart?.length || 0})</p>
                </div>
                {cart?.map((e, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="w-full flex flex-col gap-5 p-5 border-b border-gray-200"
                    >
                        {/* Product Details */}
                        <div className="w-full flex flex-col lg:flex-row gap-4">
                            {/* Product Image */}
                            <div className="w-20 h-20 flex-shrink-0">
                                <img
                                    src={e.product?.image}
                                    alt={e.product?.name}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="flex-1">
                                <p className="text-lg font-medium">{e.product?.name}</p>
                                <p className="text-sm text-gray-600">Size: {e.size}</p>
                            </div>

                            {/* Product Price */}
                            <div className="flex items-center gap-1 text-lg font-semibold">
                                <FaNairaSign />
                                <span>{e.product?.price.toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Quantity Controls and Remove Button */}
                        <div className="w-full flex justify-between items-center">
                            {/* Remove Button */}
                            <button
                                onClick={() => handleDeleteItem(e._id)}
                                className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors"
                            >
                                <RiDeleteBin6Line />
                                <span>Remove</span>
                            </button>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => handleUpdateCart(e._id, e.quantity - 1)}
                                    disabled={e.quantity <= 1 || loading[e._id]}
                                    className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-md hover:bg-blue-200 transition-colors"
                                >
                                    {loading[e._id] ? "..." : <FaMinus />}
                                </button>
                                <span className="text-lg font-semibold">{e.quantity}</span>
                                <button
                                    onClick={() => handleUpdateCart(e._id, e.quantity + 1)}
                                    disabled={loading[e._id]}
                                    className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-md hover:bg-blue-200 transition-colors"
                                >
                                    {loading[e._id] ? "..." : <GrAdd />}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Cart Summary Section */}
            <div className="lg:w-[30%] lg:h-[300px] w-full bg-white rounded-lg shadow-sm">
                <div className="w-full p-5 border-b border-gray-200">
                    <p className="text-lg font-semibold">CART SUMMARY</p>
                </div>
                <div className="w-full p-5 border-b border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-gray-600">Subtotal</p>
                        <div className="flex items-center gap-1 text-lg font-semibold">
                            <FaNairaSign />
                            <span>{subtotal.toLocaleString()}</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">Delivery fees not included yet</p>
                </div>
                <div className="w-full p-5">
                    <button
                        onClick={() => nav("/checkout")}
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Checkout (<FaNairaSign />{subtotal.toLocaleString()})
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;