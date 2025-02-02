import React from 'react'

const NewCategory = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-[70px] font-bold text-[20px] flex items-center'>
            <p>Add New Category</p>
        </div>
        <div className='w-full flex flex-col gap-3 bg-white rounded-lg shadow-md p-3'>
            <div className='w-full h-[70px] flex flex-col lg:flex-row items-center justify-between'>
                <p>Category name</p>
                <input placeholder='Enter category name'
                className='w-[70%] h-[40px] outline-none border-[1.5px] rounded-md border-gray-400 pl-2' type="text" />
            </div>
            <div className='w-full flex flex-col lg:flex-row items-center justify-between'>
                <p>image</p>
                <input placeholder='Enter category name'
                className='w-[70%] h-[100px] outline-none border-[1.5px] rounded-md border-gray-400 pl-2' type="file" />
            </div>
            <div className='w-full h-[70px] flex flex-col lg:flex-row items-center justify-between'>
                <p>QUantity</p>
                <input placeholder='Enter category name'
                className='w-[70%] h-[40px] outline-none border-[1.5px] rounded-md border-gray-400 pl-2' type="text" />
            </div>
            <div className='w-full h-[70px] flex flex-col lg:flex-row items-center justify-between'>
                <p>Sale</p>
                <input placeholder='Enter category name'
                className='w-[70%] h-[40px] outline-none border-[1.5px] rounded-md border-gray-400 pl-2' type="text" />
            </div>
            <div className='w-full h-[100px] flex flex-col lg:flex-row items-center justify-center'>
                <button className='w-[50%] h-[40px] rounded-md bg-blue-500'>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default NewCategory