"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function BookingCarousel() {
  const [houses, setHouses] = useState([])
    const fetchHouses = async () => {
      try {
          const res = await fetch("/api/houses")
          const data = await res.json()
          
          setHouses(data.houses)
          setNumber(data.houses.length === 0 ? 1 : data.houses.length + 1)
      } catch (error) {
          console.log(error)
      }
  }
  
  useEffect(()=>{
      fetchHouses()
  },[])

  return (
    <div className='w-full min-h-screen p-10 bg-gray-900'>
      <div className="w-full p-1 border border-gray-400 bg-gray-800 text-[lime] font-extralight text-lg flex items-center rounded-lg">
        <Link href="/#rooms" className="w-full py-2 mx-1 text-center px-5 border bg-gray-900 border-gray-700 rounded-lg">Night Accomodation</Link>
        <Link href="/#rooms" className="w-full py-2 mx-1 text-center px-5 border bg-gray-900 border-gray-700 rounded-lg">Conference Meetings</Link>
        <Link href="/#rooms" className="w-full py-2 mx-1 text-center px-5 border bg-gray-900 border-gray-700 rounded-lg">Summer Pools</Link>
        <Link href="/#rooms" className="w-full py-2 mx-1 text-center px-5 border bg-gray-900 border-gray-700 rounded-lg">Family Vacations</Link>
        <Link href="/#rooms" className="w-full py-2 mx-1 text-center px-5 border bg-gray-900 border-gray-700 rounded-lg">Night Accomodation</Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 md:p-20 ">
        {houses?.map((house)=>(
        <Link href={`/rooms/${house._id}`} className="m-2 col-span-1 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700">
          <img src={house.image} className='h-[300px] object-cover w-full' alt="" />
          <p className='text-gray-400 opacity-75 text-lg font-bold'>{house.title}</p>
          <p className="font-extralight text-sm text-gray-200 opacity-80">{(house.description).substring(0, 90)}...</p>
          <div className="flex text-yellow-600 py-1">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
            <button className="min-w-full text-center py-3 bg-gray-800 font-bold mt-3 text-gray-300">Check availability</button>
        </Link>
      ))}
      </div>
    </div>
  )
}
