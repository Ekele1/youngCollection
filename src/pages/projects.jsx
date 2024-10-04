import React from 'react'
import { IoIosLink } from "react-icons/io";
import Header from '../components/header';
import Footercomp from '../components/footer';

const ProjectsComp = () => {
    const projects = [
    {
        name: "Avant Garde Finance",
        title: "Creating technology to empower civilians",
        link: "avantgardefinance.com",
        url: "",
        loggo:"./profile.jpg"
    },
    {
        name: "Avant Garde Finance",
        title: "Creating technology to empower civilians",
        link: "avantgardefinance.com",
        url: "",
        loggo:"./profile.jpg"
    },
    {
        name: "Avant Garde Finance",
        title: "Creating technology to empower civilians",
        link: "avantgardefinance.com",
        url: "",
        loggo:"./profile.jpg"
    },
]
  return (
    <>
    <Header />
    <div className='w-full lg:pt-20 pt-10'>
        <div className='lg:w-[70%] w-full flex flex-col gap-5'>
            <p className='lg:text-[48px] text-[40px] text-[rgb(39, 39, 42)] font-bold lg:leading-[55px] leading-[50px]'>
                Things I’ve made trying to put my dent in the universe.
            </p>
            <p className='text-[20px] lg:text-[17px]'>
                I’ve worked on tons of little projects over the years but these are the ones 
                that I’m most proud of. Many of them are open-source, so if you see something 
                that piques your interest, check out the code and contribute if you have ideas 
                for how it can be improved.
            </p>
        </div>
        <div className='w-full pt-20 pb-20'>
            <div className='w-full flex flex-wrap lg:flex-row flex-col justify-around'>
                {
                    projects.map((e,i)=>(
                        <div className='lg:w-[30%] w-full text-[20px] lg:text-[17px] dark:hover:bg-black hover:bg-gray-100 rounded-xl p-6'>
                    <div className='w-[60px] h-[60px] rounded-[50%] border-[1px] flex items-center justify-center'>
                        <img 
                        className='w-[40px] h-[40px] rounded-[50%] object-cover'
                        src={e.loggo} alt="" />
                    </div>
                    <p className='font-bold text-[rgb(39, 39, 42)] mt-4'>
                        {e.name}
                    </p>
                    <p className='mt-4'>
                        {e.title}
                    </p>
                    <div className='mt-5 flex items-center gap-5'>
                        <IoIosLink />
                        <a href={e.url}>{e.link}</a>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
    <Footercomp />
    </>
  )
}

export default ProjectsComp