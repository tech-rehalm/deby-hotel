import Link from 'next/link'
import React from 'react'

export default function Services() {
  return (
    <div className='w-full h-[70vh] bg-gray-200 pt-6 sm:px-[50px]'>
        <h1 className="text-5xl  font-bold w-full text-center mb-5">A little overview of services we offer </h1>
        <div className="flex flex-col sm:flex-row w-full text-gray-700 items-center justify-center shadow-lg p-5 ">
            <div className="min-w-[25%] p-5">
                <img src="/guest.jpg" className='w-full h-full object-cover' alt="" />
            </div> 
            <div className="flex flex-col min-w-[25%] cursor-pointer justify-center  items-center">
                <Link href="/accomodation" className=' my-3 transition duration-500 hover:scale-110'>Accomodation</Link>
                <Link href="/accomodation" className=' my-3 transition duration-500 hover:scale-110'>Leisure Center</Link>
                <Link href="/accomodation" className=' my-3 transition duration-500 hover:scale-110'>Resturants</Link>
                <Link href="/accomodation" className=' my-3 transition duration-500 hover:scale-110'>Conferencing</Link>
                <Link href="/accomodation" className=' my-3 transition duration-500 hover:scale-110'>Contact Us now</Link>
            </div>
            <div className="flex min-w-[50%] p-[5%] bg-slate-900 text-gray-200">
                <p className='text-center'>Experience unmatched comfort and luxury. Whether you're here for business or leisure, our team is dedicated to making your stay unforgettable. Relax in our elegant rooms, savor world-class dining, and enjoy personalized service every step of the way. At [Hotel Name], your perfect escape awaits.</p>
            </div>
        </div>
      
    </div>
  )
}
