"use client"

import React, { useRef } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

export default function BookingCarousel() {
  const images = [
    {name:"/hotel.jpg"},
    {name:"/rec.jpg"},
    {name:"/room.jpg"},
    {name:"/hotelfront.jpg"},
    {name:"/sitting.jpg"},
    {name:"/hotel.jpg"},
    {name:"/rec.jpg"},
    {name:"/room.jpg"},
    {name:"/hotelfront.jpg"},
    {name:"/sitting.jpg"},
  ];
  const slider = useRef();
  let tx = 0
  const slideForward = ()=>{
      if(tx > -165){
          tx -= 20
      }
      slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBack = ()=>{
      if(tx < 0){
          tx += 20
      }
      slider.current.style.transform = `translateX(${tx}%)`
  }
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <div className="flex flex-col relative w-full">
        <div  className="mt-[50px] mr-[20%] transition duration-500 flex h-[250px] w-full overflow-hidden rounded-xl border border-[lime] backdrop-blur-lg">
          <div ref={slider} className="flex transition duration-500">
            {images.map((image)=>(
              <img key={`${image.name}`} src={image.name} alt={image.name} className='m-5 rounded-xl'/>
            ))}
            <div className="m-2 flex">
            </div>
          </div>
        </div>
        <div className="m-2 flex ml-[10%] mt-4 w-full items">
              <button className='p-3 font-extrabold text-xl hover:shadow-md hover:shadow-[lime] text-[lime] border border-[lime] rounded-full mx-2 backdrop-blur-xl' onClick={slideForward}><FaArrowLeft/></button>
              <button className='p-3 font-extrabold text-xl hover:shadow-md hover:shadow-[lime] text-[lime] border border-[lime] rounded-full mx-2 backdrop-blur-xl' onClick={slideBack}><FaArrowRight/></button>
        </div> 
        </div>
       
    </div>
  )
}
