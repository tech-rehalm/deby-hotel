"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";

export function Hero() {
  const images = [
    "/hotel.jpg",
    "/rec.jpg",
    "/room.jpg",
    "/hotelfront.jpg",
    "/sitting.jpg",
  ];
  return (
    (<ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center">
        <motion.p
        className="font-bold text-lg md:text-6xl text-center text-gray-400   py-4">
          Welcome to<br /><h1 className="text-8xl font-extrabold text-[lime]">Deby Hotel</h1> 
        </motion.p>
        <div className="flex w-full md:w-[800px] m-4 h-[40px] bg-gray-900 border border-[lime] rounded-lg p-1 gap-1">
          <Link href="/#rooms" className="border bg-gray-800 text-center font-bold border-gray-600 rounded-lg text-[lime] w-full">Couples</Link>
          <Link href="/#rooms" className="border bg-gray-800 text-center font-bold border-gray-600 rounded-lg text-[lime] w-full">Family</Link>
          <Link href="/#rooms" className="border bg-gray-800 text-center font-bold border-gray-600 rounded-lg text-[lime] w-full">Leisure</Link>
          <Link href="/#rooms" className="border bg-gray-800 text-center font-bold border-gray-600 rounded-lg text-[lime] w-full">Bussiness</Link>
        </div>
        <Link href="/booking"
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Make Bookings now →</span>
          <div
            className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Link>
      </motion.div>
    </ImagesSlider>)
  );
}
