import React from 'react'
import { TiTick } from "react-icons/ti";

export default function Features() {
  return (
    <div className='w-full h-[90vh] flex flex-col p-5'>
      <h1 className="text-7xl font-extrabold my-4 pl-10 pb-5">Each room features</h1>
      <div className="w-full flex flex-col md:flex-row h-full">
        <div className="min-w-[35%] relative h-full">
             <img src="/feature.jpg" className=' ml-7 w-[300px] p-3 h-full object-cover' alt="" />
        </div>
        <div className="flex flex-col sm:flex-row h-full min-w-[60%] justify-between bg-slate-900 text-gray-400 p-5 shadow-xl rounded-xl">
            <div className="flex flex-col  justify-center">
                <h1 className="text-xl font-bold">Bedrooms</h1>
                <p className="font-extrabold">Features</p>
                <p className="font-light flex">At least one king size bed <TiTick className='ml-4'/></p>
                <p className="font-light flex">A built in washroom<TiTick className='ml-4'/></p>
                <p className="font-light flex">A small dinner table<TiTick className='ml-4'/></p>
                <p className="font-light flex">Instant food delivery after order<TiTick className='ml-4'/></p>
                <p className="font-light flex">Morning room service<TiTick className='ml-4'/></p>
                <p className="font-light flex">Free breakfast after 2 days<TiTick className='ml-4'/></p>
                <p className="font-light flex">A free telephone<TiTick className='ml-4'/></p>
                <p className="font-light flex">Power supply ports<TiTick className='ml-4'/></p>
                <p className="font-light flex">A free wifi<TiTick className='ml-4'/></p>
                <p className="text-lg font-bold">All this made to create your memories</p>
            </div>
            <div className="flex flex-col  justify-center ">
                <h1 className="text-xl font-bold">Conference Rooms</h1>
                <p className="font-extrabold">Features</p>
                <p className="font-light flex">A full set furniture<TiTick className='ml-4'/></p>
                <p className="font-light flex">A built in washroom<TiTick className='ml-4'/></p>
                <p className="font-light flex">A big screen and sound systems<TiTick className='ml-4'/></p>
                <p className="font-light flex">Instant food delivery after order<TiTick className='ml-4'/></p>
                <p className="font-light flex">Network for real time meetings<TiTick className='ml-4'/></p>
                <p className="font-light flex">A free telephone<TiTick className='ml-4'/></p>
                <p className="font-light flex">Power supply ports<TiTick className='ml-4'/></p>
                <p className="font-light flex">A free wifi<TiTick className='ml-4'/></p>
                <p className="text-lg font-bold">Experience professional meetings</p>
            </div>
        </div>
      </div>
    </div>
  )
}
