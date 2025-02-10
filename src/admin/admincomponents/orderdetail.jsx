import React from 'react';

const OrderDetail = () => {
    const allitems = [
        { productName: "Fitted jean", Quantity: 3, price: 30, image: "./cloth.jpg" },
        { productName: "Joggers", Quantity: 2, price: 20, image: "./cloth.jpg" },
        { productName: "Polo shirt", Quantity: 1, price: 10, image: "./cloth.jpg" },
        { productName: "Jean", Quantity: 3, price: 30, image: "./cloth.jpg" },
        { productName: "T-shirt", Quantity: 5, price: 15, image: "./cloth.jpg" },
    ];

    const subtotal = allitems.reduce((acc, item) => acc + item.price * item.Quantity, 0);
    const shipping = 10; // Flat rate for simplicity
    const tax = 5; // Flat tax for simplicity
    const total = (subtotal + shipping + tax).toFixed(2);

    return (
        <div className='w-full h-[100%] dark:text-gray-500'>
            <div className='w-full h-[70px] flex items-center'>
                <p className='text-[20px] font-bold'>Order Detail</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-5'>
                {/* Items Section */}
                <div className='w-full lg:w-[62%] flex flex-col gap-5'>
                    <div className='w-full p-3 flex flex-col gap-2 lg:bg-white dark:bg-[#1d283a] rounded-md lg:shadow-md'>
                        <div className='w-full h-[50px] font-bold'>All items</div>
                        {allitems.map((e, i) => (
                            <div key={i} className='w-full h-[70px] flex bg-blue-100 dark:bg-[#1d283a] dark:border-[1px] dark:border-white p-2 rounded-lg'>
                                <div className='w-[10%] h-full'>
                                    <img className='w-full h-full object-contain rounded-md' src={e.image} alt={e.productName} />
                                </div>
                                <div className='w-[30%] h-full pl-3 flex flex-col justify-center'>
                                    <p className='text-[13px]'>Product name</p>
                                    <p className='text-[13px] font-bold'>{e.productName}</p>
                                </div>
                                <div className='w-[30%] h-full flex flex-col justify-center'>
                                    <p className='text-[13px]'>Quantity</p>
                                    <p className='text-[13px] font-bold'>{e.Quantity}</p>
                                </div>
                                <div className='w-[30%] h-full flex flex-col justify-center'>
                                    <p className='text-[13px]'>Price</p>
                                    <p className='text-[13px] font-bold'>${e.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Totals Section */}
                    <div className='w-full bg-white dark:bg-[#1d283a] rounded-md shadow-md p-3'>
                        <div className='w-full bg-gray-100 dark:bg-[#1d283a] rounded-md p-2'>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[15px] font-bold'>Cart totals</p>
                                <p className='text-[15px] font-bold'>Price</p>
                            </div>
                        </div>
                        <div className='w-full border-b-[1px] border-gray-200 p-2'>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[15px] text-gray-400'>Subtotal:</p>
                                <p className='text-[15px] font-bold'>${subtotal}</p>
                            </div>
                        </div>
                        <div className='w-full border-b-[1px] border-gray-200 p-2'>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[15px] text-gray-400'>Shipping:</p>
                                <p className='text-[15px] font-bold'>${shipping}</p>
                            </div>
                        </div>
                        <div className='w-full border-b-[1px] border-gray-200 p-2'>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[15px] text-gray-400'>Tax:</p>
                                <p className='text-[15px] font-bold'>${tax}</p>
                            </div>
                        </div>
                        <div className='w-full rounded-md p-2'>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[15px] font-bold'>Total price</p>
                                <p className='text-[15px] font-bold text-orange-500'>${total}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary and Delivery Section */}
                <div className='w-full lg:w-[35%] flex flex-col gap-3 dark:text-gray-500 dark:bg-[#1d283a]'>
                    <div className='w-full h-[150px] text-[13px] p-3 bg-white dark:bg-[#1d283a] rounded-md shadow-md'>
                        <div className='w-full h-[40px] flex items-center'>
                            <p className='font-bold'>Summary</p>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p>Order ID</p>
                            <div className='w-[60%] font-bold'>#192847</div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p>Date</p>
                            <div className='w-[60%] font-bold'>20 Nov 2023</div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p>Total</p>
                            <div className='w-[60%] font-bold text-orange-500'>${total}</div>
                        </div>
                    </div>
                    <div className='w-full h-[90px] dark:bg-[#1d283a] text-[13px] bg-white rounded-md shadow-md p-3'>
                        <p className='font-bold'>Shipping Address</p>
                        <p>1313 Karimu Kotun VI Lagos</p>
                        <p>091234567890</p>
                    </div>
                    <div className='w-full h-[120px] text-[13px] dark:bg-[#1d283a] bg-white rounded-md shadow-md p-3'>
                        <p className='font-bold'>Expected date of delivery</p>
                        <p className='text-green-500'>20 March 2025</p>
                        <button className='mt-2 w-full h-[50px] bg-blue-500 text-white py-1 rounded-md'>Track Delivery</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
