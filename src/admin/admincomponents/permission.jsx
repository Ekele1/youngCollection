import React from 'react'

const Permission = () => {

  return (
    <div className='w-full dark:text-gray-500'>
        <div className='w-full h-[70px] flex items-center'>
            <p className='text-[20px] font-bold'>Permission</p>
        </div>
        <div className='w-full h-[400px] flex p-3 dark:bg-[#1d283a] bg-white rounded-lg shadow-md'>
            <div className='w-[30%]'>
                <p>Actions that this user is allowed to perform</p>
            </div>
            <div className='w-[70%]'>
                
            </div>
        </div>
    </div>
  )
}

export default Permission