import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-full overflow-y-scroll pb-10'>
        <div className='w-full h-[50px] flex items-center font-bold text-[25px]'>
            <p>Add Attribute</p>
        </div>
        <div className='w-full flex gap-4'>
            <div className='w-[23%] flex flex-col gap-3'>
                <div className='w-full h-[200px] bg-white shadow-md rounded-md'></div>
                <div className='w-full h-[200px] bg-white shadow-md rounded-md'></div>
                <div className='w-full h-[200px] bg-white shadow-md rounded-md'></div>
                <div className='w-full h-[200px] bg-white shadow-md rounded-md'></div>
            </div>
            <div className='w-[30%] h-[850px] rounded-md shadow-md bg-white flex flex-col pl-2'>
                <div className='w-full h-[50px] flex items-center font-bold text-[20px]'>
                    <p>Sale by Category</p>
                </div>
            </div>
            <div className='w-[42%] h-[850px] bg-white shadow-md rounded-md pl-2'>
                <div className='w-full h-[50px] flex items-center font-bold text-[20px]'>
                    <p>Earnings revenue</p>
                </div>
            </div>
        </div>
        <div className='w-[98%] h-[500px] bg-white shadow-md rounded-md mt-5 p-5 overflow-scroll'>
            <div className='w-full h-[50px] flex items-center font-bold text-[25px]'>
                <p>Recent orders</p>
            </div>
            <div className=''>
                <div className='flex'>
                    <div className='w-[500px] h-[40px] flex items-center'><p>Products</p></div>
                    <div className='w-[500px] h-[40px] flex items-center'><p>Customer</p></div>
                    <div className='w-[500px] h-[40px] flex items-center'><p>Product Id</p></div>
                    <div className='w-[500px] h-[40px] flex items-center'><p>Product Id</p></div>
                    <div className='w-[500px] h-[40px] flex items-center'><p>Product Id</p></div>
                </div>
            </div>
        </div>
        <div className='w-[98%] h-[500px] bg-white shadow-md rounded-md mt-5 p-5'>
            <div className='w-full h-[50px] flex items-center font-bold text-[25px]'>
                <p>Web visitors</p>
            </div>
        </div>
    </div>
  )
}

export default Home