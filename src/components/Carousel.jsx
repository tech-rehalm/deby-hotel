"use client"

import React, { useRef } from 'react'
import { FlipWords } from "./ui/flip-words";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
 
export default function Carousel() {
  const words = ["stay now", "confort in Deby", "beautiful room", "place for bussiness"];
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
    <div className="h-[90vh] w-full relative text-gray-300 overflow-hidden" id="rooms">
        <img src="/hotelfront.jpg" alt="bg" className='w-full h-screen onject-cover absolute z-[-1]' />
        <div className="w-full h-screen bg-[#03040492] p-5">
          <h1 className="text-5xl  md:pt-[70px] ml-[10%]">Find your <FlipWords  words={words} />.</h1>
          <div  className="mt-[50px] ml-[10%] transition duration-500 flex h-[250px] w-full overflow-hidden rounded-xl border border-[lime] backdrop-blur-lg">
          <div ref={slider} className="flex transition duration-500">
            {images.map((image)=>(
              <img key={`${image.name}`} src={image.name} alt={image.name} className='m-5 rounded-xl'/>
            ))}
            <div className="m-2 flex">
              
            </div>
          </div>
           
          </div><div className="m-2 flex ml-[10%] mt-4">
              <button className='p-3 font-extrabold text-xl hover:shadow-md hover:shadow-[lime] text-[lime] border border-[lime] rounded-full mx-2 backdrop-blur-xl' onClick={slideForward}><FaArrowLeft/></button>
              <button className='p-3 font-extrabold text-xl hover:shadow-md hover:shadow-[lime] text-[lime] border border-[lime] rounded-full mx-2 backdrop-blur-xl' onClick={slideBack}><FaArrowRight/></button>
            </div> 
        </div>
    </div>
  )
}
