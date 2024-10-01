import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

export default function DailyOffer() {
  return (
    <div className='w-full h-[80vh] flex flex-col relative'>
      <div className="w-full h-[50%]  bg-[#35f135d5]">
        <h1 className="text-slate-900 text-3xl font-extrabold w-full text-center my-3">Offer of the day</h1>
      </div>
      <div className="w-full h-[50%] bg-gray-300"></div>
      <div className="w-full h-full z-10 flex flex-col md:flex-row items-center absolute gap-5 justify-center">
      <div className="w-[250px] p-2 rounded-xl shadow-lg border border-green-400 h-[300px] flex flex-col shadow-slate-500 justify-between">
            <img src="/suite.jpg" className='h-[60%] w-full object-cover rounded-xl' alt="" />
            <h1 className="text-sm font-bold text-slate-900">King suit with full set resources</h1>
            <div className="text-lg text-yellow-600 px-1 py-2 flex">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className="flex items-center justify-between w-full">
                <Link href="/booking" className=" text-sm w-full  bg-gray-300 font-light text-[#10a510]">Rent it now</Link>
                <span className=" text-sm text-slate-900 ">$70/day</span>
            </div>
            <Link href="/booking" className="bg-[#35f135d5] text-slate-900 text-center py-2 my-1 rounded-b-lg">See more</Link>
        </div><div className="w-[250px] p-2 rounded-xl shadow-lg border border-green-400 h-[300px] flex flex-col shadow-slate-500 justify-between">
            <img src="/conf.jpg" className='h-[60%] w-full object-cover rounded-xl' alt="" />
            <h1 className="text-sm font-bold text-slate-900">Room ideal for meetings</h1>
            <div className="text-lg text-yellow-600 px-1 py-2 flex">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className="flex items-center justify-between w-full">
                <Link href="/booking" className=" text-sm w-full  bg-gray-300 font-light text-[#10a510]">Rent it now</Link>
                <span className=" text-sm text-slate-900 ">$80/day</span>
            </div>
            <Link href="/booking" className="bg-[#35f135d5] text-slate-900 text-center py-2 my-1 rounded-b-lg">See more</Link>
        </div><div className="w-[250px] p-2 rounded-xl shadow-lg border border-green-400 h-[300px] flex flex-col shadow-slate-500 justify-between">
            <img src="/pool.jpg" className='h-[60%] w-full object-cover rounded-xl' alt="" />
            <h1 className="text-sm font-bold text-slate-900">Pool side for leisure</h1>
            <div className="text-lg text-yellow-600 px-1 py-2 flex">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className="flex items-center justify-between w-full">
                <Link href="/booking" className=" text-sm w-full  bg-gray-300 font-light text-[#10a510]">Rent it now</Link>
                <span className=" text-sm text-slate-900 ">$40/day</span>
            </div>
            <Link href="/booking" className="bg-[#35f135d5] text-slate-900 text-center py-2 my-1 rounded-b-lg">See more</Link>
        </div>
      </div>

    </div>
  )
}
