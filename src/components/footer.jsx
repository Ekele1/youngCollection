import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footercomp = () => {
    const currentYear = new Date().getFullYear()
    const nav = useNavigate()
  return (
    <div className='w-full flex lg:flex-row flex-col gap-5 lg:gap-0 items-center border-t-[1px] pt-10 pb-10 lg:justify-between'>
        <div className='flex items-center gap-[20px]'>
            <p className='cursor-pointer hover:text-green-500 font-bold' onClick={()=>nav("/")}>About</p>
            <p className='cursor-pointer hover:text-green-500 font-bold' onClick={()=>nav("/projects")}>Projects</p>
            <p className='cursor-pointer hover:text-green-500 font-bold' onClick={()=>nav("/tools")}>Tools</p>
            <p className='cursor-pointer hover:text-green-500 font-bold' onClick={()=>nav("/contacts")}>Contact</p>
        </div>
        <div>
            © {currentYear} Ekele Jeremiah. All rights reserved.
        </div>
    </div>
  )
}

export default Footercomp