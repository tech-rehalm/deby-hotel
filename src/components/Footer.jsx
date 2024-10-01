import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-[40vh] flex flex-col md:flex-row relative mt-10'>
      <img src="/hotel.jpg" className='h-full w-full object-cover absolute z-[-1]' alt="" />
      <div className="w-full h-full bg-[#010605af] p-5 flex flex-col md:flex-row">
      <div className="flex flex-col min-w-[30%] ml-[10%] text-gray-200 opacity-80">
            <Link href="/Branches" className='my-1 transition duration-500 hover:scale-110'>Branches</Link>
            <Link href="/Branches" className='my-1 transition duration-500 hover:scale-110'>Bookings</Link>
            <Link href="/Branches" className='my-1 transition duration-500 hover:scale-110'>Services</Link>
            <Link href="/Branches" className='my-1 transition duration-500 hover:scale-110'>Code of Conduct</Link>
            <Link href="/Branches" className='my-1 transition duration-500 hover:scale-110'>Privacy Policy</Link>
            <Link href="/Branches" className='my-1 transition duration-500 hover:scale-110'>Customer Support</Link>
        </div>

        <div className="min-w-[60%] p-5 opacity-80">
            <h1 className="text-xl text-gray-100 font-bold">Deby Hotel</h1>
            <p className="font-extralight text-gray-100 opacity-70 p-5 pl-0">We stand to give you luxury, conforting accomodation with affordable prices.Don't miss the chance to enjoy with your loved ones with only limited money</p>
            <div className="text-xl font-bold text-gray-100">All Rights Reserved &copy;DebyHotel</div>
            <div className="flex">
                <Link href="/contact" className='px-5 py-2 rounded-2xl bg-white text-slate-900 my-2'>Contact Us</Link>
                <Link href="/services/#code" className='px-5 py-2 rounded-2xl text-white bg-slate-900  m-6 my-2'>privacy Policy</Link>
            </div>
        </div>
        
      </div>
    </div>
  )
}
