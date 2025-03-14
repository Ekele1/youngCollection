import React, { useEffect } from 'react'
import DoughnutChart from './piechat'
import BarChart from './barchat'
import LineChart from './lineChart'
import TotalIncome from './totalincome'
import WebVisitors from './webvisitor'
import RecentOrder from './recentorder'
import axios from 'axios'

const Home = () => {
  return (
    <div className='w-full h-full pb-10'>
        <div className='w-full h-[50px] flex items-center font-bold text-[25px]'>
            {/* <p>Add Attribute</p> */}
        </div>
        <div className='w-full flex flex-col lg:flex-row gap-4'>
            <div className='w-[100%] lg:w-[23%] flex flex-col gap-3'>
                <div className='w-full p-1 bg-white dark:bg-[#1e293b] shadow-md rounded-md'>
                    <LineChart /> 
                </div>
                <div className='w-full p-1 bg-white dark:bg-[#1e293b] shadow-md rounded-md'>
                    <TotalIncome /> 
                </div>
            </div>
            <div className='lg:w-[30%] w-full pt-3 rounded-md shadow-md bg-white dark:bg-[#1e293b] flex flex-col pl-2'>
                <DoughnutChart />
            </div>
            <div className='lg:w-[42%] w-full bg-white dark:bg-[#1e293b] shadow-md rounded-md pl-2'>
                <BarChart />
            </div>
        </div>
        <div className='w-[98%] bg-white dark:bg-[#1e293b] shadow-md rounded-md mt-5 p-5 '>
           <RecentOrder />
        </div>
        <div className='lg:w-[50%] w-full bg-white dark:bg-[#1e293b] shadow-md rounded-md mt-5 p-5'>
            <div className='w-full flex  items-center font-bold text-[25px]'>
                <WebVisitors />
            </div>
        </div>
    </div>
  )
}

export default Home