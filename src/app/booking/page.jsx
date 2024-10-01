import BookingCarousel from '@/components/booking/BookingCarousel'
import React from 'react'

export default function bookings() {
  return (
    <div className='w-full min-h-screen relative'>
      <img src="/reception.jpg" className='w-full h-[40vh] object-cover absolute z-[-1]' alt="" />
      <div className="flex justify-center pt-[100px]  p-10 bg-[#0000009c] h-[40vh] text-white opacity-80">
        <h1 className="font-bold text-7xl">Find the one suitable for you</h1>
      </div>
      <BookingCarousel/>
    </div>
  )
}
