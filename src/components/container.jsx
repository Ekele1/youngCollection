import React from 'react'

const Contain = ({prop}) => {
  return (
    <div className='w-full bg-[#fafafa] dark:bg-black dark:text-white flex justify-center'>
        <div className='lg:w-[90%] pl-1 dark:bg-[#18181a] w-[95%]'>
            {prop}
        </div>
    </div>
  )
}

export default Contain