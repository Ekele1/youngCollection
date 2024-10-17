import React from 'react'
import { FaNairaSign } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import CarousellMen from './hero';

const MenCollectionHome = ({prop}) => {
    // const hoodies = [1,2,3,4]
    const men = [
        {
            name: "Hoodies",
            items: [1,2,3,4],
            img: "https://media.istockphoto.com/id/154960461/photo/red-sweat-shirt-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dt1h6jsUfwyJolpalOYanvF5kG6VTWhjDI1zVcbdYJY="
        },
        {
            name: "T-shirts",
            items: [1,2,3,4],
            img: "data:image/webp;base64,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"
        },
        {
            name: "suits",
            items: [1,2,3,4],
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQR9pQQqZVYrX99_Da77JHzZZ6ttU6SEOV2l5GDPjNy6AN2v-xML4hK5fzydtjkNXVpiB2pbx0G7R44i1KQuuSKGX4yDQtk3Rkzf9HOfjWe7kN2VY8lOpxOkT47wO-3o8_yHrV4Dw&usqp=CAc"
        },
        
    ]
  return (
<div className='w-full lg:pl-5 lg:pr-5 pb-20'>
        <div className='w-full h-[80px] text-[30px] font-bold flex items-center justify-center'>
            {prop}
        </div>
        {/* <CarousellMen /> */}
        <div className='w-full flex lg:flex-row flex-col justify-between pb-10'>
            {
                men.map((e,id)=>(
                    <div className='lg:w-[30%] w-full lg:p-5 p-0 bg-[#f8f8f8] lg:rounded-[25px] rounded-none'>
                        <div className='w-full lg:h-[50px] h-[70px] flex items-center justify-center lg:text-[20px] text-[25px] font-semibold'>{e.name}</div>
                        <div className='w-full flex flex-col gap-2'>
                            {
                                e.items.map((item, id)=>(
                                    <div className='w-full h-[120px] flex gap-2'>
                                        <div className='lg:w-[50%] w-[60%]h-full rounded-[20px]'>
                                            <img 
                                            className='w-full h-full object-contain rounded-[20px]'
                                            src={e.img} alt="" />
                                        </div>
                                        <div className='lg:w-[45%] w-[40%]h-full text-[18px] font-semibold flex flex-col justify-center'>
                                            <p>Quality men's Hoodie</p>
                                            <p>$10</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='w-full flex items-center justify-center pt-10'>
            <button className='w-[70%] lg:w-[20%] h-[60px] lg:h-[40px] flex items-center justify-center gap-3 bg-blue-100'>
                view More <FaLongArrowAltDown />
            </button>
        </div>
    </div>
  )
}

export default MenCollectionHome