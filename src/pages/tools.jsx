import React from 'react'
import Header from '../components/header'
import Footercomp from '../components/footer'

const ToolsComp = () => {

    const tools = [
        {
            category: "Development",
            types: [
                {
                    name: "HTML",
                    description: `HTML (HyperText Markup Language) is the standard markup language used to create and
                        design documents on the World Wide Web. It is the foundation of web pages, defining 
                        the structure and layout of web content.`
                },
                {
                    name: "CSS",
                    description: `CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation 
                        and design of a document written in HTML or XML. CSS controls the layout, colors, fonts, 
                        and overall visual appearance of web pages.`
                },
                {
                    name: "Javascript",
                    description: `JavaScript is a high-level, interpreted programming language that is primarily used to 
                        create interactive effects within web browsers. It is one of the core technologies of web 
                        development, alongside HTML and CSS. JavaScript enables dynamic content, control multimedia, 
                        animate images, and much more.`
                },
                {
                    name: "React",
                    description: `React is a popular JavaScript library for building user interfaces, particularly for single-page 
                        applications where you need a fast and interactive user experience. It allows developers to create large web 
                        applications that can update and render efficiently in response to data changes.`
                },
                {
                    name: "Next.js",
                    description: `Next.js is a popular React framework developed by Vercel that enables developers to build production-ready 
                        web applications with server-side rendering, static site generation, and other advanced features. It simplifies many 
                        aspects of React development by providing a comprehensive set of tools and conventions for building scalable and 
                        performant applications.`
                },
                {
                    name: "Tailwind",
                    description: `Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom designs directly in 
                        your HTML by using a predefined set of classes. It provides a modern approach to styling web applications, emphasizing 
                        modularity and reusability. Instead of writing custom CSS, you can apply classes that correspond to common CSS properties.`
                },
            ]
        },
        {
            category: "Design",
            types: [
                {
                    name: "Figma",
                    description: `Figma is a cloud-based design tool that is used for interface design, prototyping, and collaboration. 
                        It is widely favored by designers for its real-time collaborative features, allowing multiple people to work on the 
                        same design file simultaneously.`
                }
            ]
        },
        {
            category: "Version Control",
            types: [
                {
                    name: "Github",
                    description: `GitHub is a web-based platform used for version control and collaborative software development. It provides hosting 
                        for software development and version control using Git. GitHub offers both distributed version control and source code management 
                        (SCM) functionality, along with additional features for collaboration, such as bug tracking, feature requests, task management, 
                        and wikis for every project.`
                }
            ]
        },
    ]
  return (
    <>
    <Header />
    <div className='w-full pt-10 lg:pt-20 pb-20'>
        <div className='lg:w-[70%] w-full flex flex-col gap-5'>
            <p className='lg:text-[48px] text-[40px] text-[rgb(39, 39, 42)] font-bold lg:leading-[55px] leading-[50px]'>
                Software I use, gadgets I love, and other things I recommend.
            </p>
            <p className='text-[20px] lg:text-[17px]'>
                I get asked a lot about the things I use to build software, stay productive, or buy 
                to fool myself into thinking I’m being productive when I’m really just procrastinating. 
                Here’s a big list of all of my favorite stuff.
            </p>
        </div>
        <div className='w-full mt-20 flex flex-col gap-10'>
            {
                tools.map((e, id)=> (
                    <div className='w-full flex gap-4 lg:gap-0 lg:flex-row flex-col pl-3 border-l-[1px]'>
                <div className='lg:w-[30%] w-full lg:text-[20px] text-[30px] font-semibold'>
                    {e.category}
                </div>
                <div className='lg:w-[70%] w-full flex flex-col gap-5'>
                    {
                        e.types.map((e,id)=> (
                            <div className='w-full '>
                        <p className='text-[20px] font-semibold'>{e.name}</p>
                        <p>
                            {e.description}
                        </p>
                    </div>
                        ))
                    }
                   
                </div>
            </div>
                ))
            }
        </div>
    </div>
    <Footercomp />
    </>
  )
}

export default ToolsComp


{/* <div className='w-full '>
<p className='text-[20px] font-semibold'>CSS</p>
<p>
    CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation 
    and design of a document written in HTML or XML. CSS controls the layout, colors, fonts, 
    and overall visual appearance of web pages.
</p>
</div>
<div className='w-full '>
<p className='text-[20px] font-semibold'>Javascript</p>
<p>
    JavaScript is a high-level, interpreted programming language that is primarily used to 
    create interactive effects within web browsers. It is one of the core technologies of web 
    development, alongside HTML and CSS. JavaScript enables dynamic content, control multimedia, 
    animate images, and much more.
</p>
</div> */}