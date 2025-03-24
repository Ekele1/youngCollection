import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbClock24 } from "react-icons/tb";

const IdealService = () => {
  return (
    <div className='w-full flex items-center justify-center bg-white py-8'>
      <div className='w-[90%] md:w-[80%] overflow-x-auto md:overflow-visible'>
        <div className='flex flex-nowrap md:flex-row gap-6 md:gap-0 md:justify-between'>
          {/* Delivery Service */}
          <div className='flex items-center gap-4 p-4 min-w-[200px] md:min-w-0'>
            <div className='text-blue-500'>
              <LiaShippingFastSolid size={30} />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm md:text-[15px] font-medium'>Delivery Nationwide</p>
              <p className='text-xs text-gray-500'>Lorem ipsum dolor</p>
            </div>
          </div>

          {/* Secure Payments */}
          <div className='flex items-center gap-4 p-4 min-w-[200px] md:min-w-0'>
            <div className='text-green-500'>
              <RiSecurePaymentLine size={30} />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm md:text-[15px] font-medium'>Secure Payments</p>
              <p className='text-xs text-gray-500'>Lorem ipsum dolor</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className='flex items-center gap-4 p-4 min-w-[200px] md:min-w-0'>
            <div className='text-purple-500'>
              <TbClock24 size={30} />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm md:text-[15px] font-medium'>24/7 Support</p>
              <p className='text-xs text-gray-500'>Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdealService;