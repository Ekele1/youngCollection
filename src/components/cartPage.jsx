import React, { useState, useContext } from "react";
import { AuthContext } from "../onboarding/authContext";
import { FaNairaSign } from "react-icons/fa6";
import { GrAdd } from "react-icons/gr";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Cart = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState({}); // Track loading state for each item
  const { cart, user, setCart } = useContext(AuthContext);

  // Calculate subtotal dynamically
  const subtotal = cart?.reduce((total, item) => total + item.product?.price * item.quantity, 0) || 0;

  // Calculate tax as 3% of the subtotal
  const tax = subtotal * 0.03;

  // Calculate total
  const total = subtotal + tax;

  const handleDeleteItem = async (itemId) => {
    if (!itemId || !user?._id) return;

    setLoading((prev) => ({ ...prev, [itemId]: true })); // Set loading state for this item
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please log in to manage your cart.");
      setLoading((prev) => ({ ...prev, [itemId]: false }));
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:5000/cart/removeProduct`,
        {
          headers: { Authorization: `Bearer ${token}` },
          data: { userId: user._id, itemId }, // Pass data in the `data` property
        }
      );

      if (response.data.cart) {
        setCart(response.data.cart); // Update the cart state
        toast.success("Product removed successfully.");
      }
    } catch (error) {
      console.error("Error removing product:", error);
      toast.error("Error removing product.");
    } finally {
      setLoading((prev) => ({ ...prev, [itemId]: false })); // Reset loading state
    }
  };

  return (
    <div className="w-full flex justify-center mt-[110px] dark:bg-[#111828] dark:text-gray-500 bg-gray-50 py-10">
      <div className="w-[95%] max-w-6xl">
        {/* Cart Header */}
        <div className="w-full text-center mb-10">
          {user ? (
            <h1 className="text-3xl font-bold text-blue-600">
              Shopping Cart ({cart?.length || 0} items)
            </h1>
          ) : (
            <h1 className="text-3xl font-bold text-blue-600">
              Please log in to view your cart content.
            </h1>
          )}
        </div>

        {/* Cart Content */}
        {user && (
          <div className="w-full flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-[60%] flex flex-col gap-6">
              {cart?.map((e, i) => (
                <div
                  key={i}
                  className="w-full flex items-center dark:bg-[#141f38] bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  {/* Product Image */}
                  <div className="w-[100px] h-[100px] flex-shrink-0">
                    <img
                      src={e.product?.image}
                      alt={e.product?.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 ml-4">
                    <p className="text-lg font-semibold">{e.product?.name}</p>
                    <p className="text-lg font-semibold">
                      Size: <i className="text-blue-400">{e.size}</i>
                    </p>
                    <div className="flex items-center text-gray-500">
                      <FaNairaSign className="inline-block" />
                      <span className="font-bold">
                        {e.product?.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                      <FaMinus className="text-sm" />
                    </button>
                    <span className="text-lg font-semibold">{e.quantity}</span>
                    <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                      <GrAdd className="text-sm" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleDeleteItem(e._id)}
                    className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                  >
                    {loading[e.product?._id] ? (
                      "..." // Show loading indicator
                    ) : (
                      <RiDeleteBin6Line className="text-2xl" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-white dark:bg-[#141f38] rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-blue-600 mb-6">
                  Order Summary
                </h2>

                {/* Subtotal */}
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-500 font-semibold">Item Subtotal</p>
                  <div className="flex items-center text-lg font-semibold">
                    <FaNairaSign className="inline-block" />
                    <span>{subtotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Tax */}
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-500 font-semibold">Tax (3%)</p>
                  <div className="flex items-center text-lg font-semibold">
                    <FaNairaSign className="inline-block" />
                    <span>{tax.toLocaleString()}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-500 font-semibold">Total</p>
                  <div className="flex items-center text-xl font-bold text-blue-600">
                    <FaNairaSign className="inline-block" />
                    <span>{total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => nav("/order")}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <IoShieldCheckmarkOutline className="text-xl" />
                  <span className="text-lg">Checkout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;