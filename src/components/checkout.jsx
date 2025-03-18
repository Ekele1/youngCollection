import React, { useState, useContext } from "react";
import { AuthContext } from "../onboarding/authContext";
import { FaNairaSign } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";

const CheckoutPage = () => {
    const { cart } = useContext(AuthContext);
    const [shippingDetails, setShippingDetails] = useState({
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to the backend)
        console.log("Shipping Details:", shippingDetails);
        console.log("Payment Details:", paymentDetails);
        alert("Order placed successfully!");
    };

    // console.log(cart)

    // Example cart items
    const cartItems = [
        {
            id: 1,
            name: "Men's T-Shirt",
            price: 25.99,
            quantity: 2,
            image: "https://via.placeholder.com/80",
        },
        {
            id: 2,
            name: "Women's Jeans",
            price: 45.99,
            quantity: 1,
            image: "https://via.placeholder.com/80",
        },
    ];

    const subtotal = Array.isArray(cart) ? cart.reduce((total, item) => total + (item.product?.price || 0) * (item.quantity || 0), 0) : 0;
    const shippingFee = 5000;
    const total = subtotal + shippingFee;

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Shipping and Payment Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={shippingDetails.fullName}
                                        onChange={handleShippingChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={shippingDetails.address}
                                        onChange={handleShippingChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={shippingDetails.city}
                                            onChange={handleShippingChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                                            Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            id="postalCode"
                                            name="postalCode"
                                            value={shippingDetails.postalCode}
                                            onChange={handleShippingChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={shippingDetails.country}
                                        onChange={handleShippingChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-6">Payment Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        value={paymentDetails.cardNumber}
                                        onChange={handlePaymentChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                                            Expiry Date
                                        </label>
                                        <input
                                            type="text"
                                            id="expiryDate"
                                            name="expiryDate"
                                            value={paymentDetails.expiryDate}
                                            onChange={handlePaymentChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="MM/YY"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            value={paymentDetails.cvv}
                                            onChange={handlePaymentChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaCcVisa className="text-3xl text-gray-500" />
                                    <FaCcMastercard className="text-3xl text-gray-500" />
                                    <FaCcAmex className="text-3xl text-gray-500" />
                                    <FaCcPaypal className="text-3xl text-gray-500" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-8 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
                                            <p className="text-sm font-medium text-gray-900 flex items-center"><FaNairaSign /> {item.product.price.toLocaleString()}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900 flex items-center"><FaNairaSign />{(item.product.price * item.quantity).toLocaleString()}.00</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between">
                                <p className="text-sm text-gray-600">Subtotal</p>
                                <p className="text-sm font-medium text-gray-900 flex items-center"><FaNairaSign />{subtotal.toLocaleString()}.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-gray-600">Shipping</p>
                                <p className="text-sm font-medium text-gray-900 flex items-center"><FaNairaSign />{shippingFee.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between border-t pt-4">
                                <p className="text-lg font-semibold text-gray-900">Total</p>
                                <p className="text-lg font-semibold text-gray-900 flex items-center"><FaNairaSign />{total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;