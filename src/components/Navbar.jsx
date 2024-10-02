"use client"

import Link from "next/link"
import {signOut, useSession} from "next-auth/react"
import {IoIosArrowDown} from "react-icons/io"

import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const {data: session} = useSession()
    const [profileMenu, setProfileMenu] = useState(false)
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
    setMounted(true)
  }, [])
    const signoutHandler = () => {
        signOut({ callbackUrl: '/' })
    }

    if(!mounted) return <></>
    
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-[50px] backdrop-blur-lg py-2 fixed top-0 left-0 z-[100]">
      <h1 className="text-[lime] font-extrabold text-lg">Deby Hotel</h1>
      <div className="flex">
        <Link href="/" className=" px-3 py-2 font-bold mx-3 transition duration-500 hover:bg-[lime] hover:text-black text-[lime] rounded-xl">Home</Link>
        <Link href="/rooms" className=" px-3 py-2 font-bold mx-3 transition duration-500 hover:bg-[lime] hover:text-black text-[lime] rounded-xl">Rooms</Link>
        <Link href="/services" className=" px-3 py-2 font-bold mx-3 transition duration-500 hover:bg-[lime] hover:text-black text-[lime] rounded-xl">Services</Link>
        {session?.user && (
            <div className="flex relative">
                <button onClick={()=> setProfileMenu(!profileMenu)} className=" px-3 py-2 font-bold transition duration-500 bg-[lime] xt-black  flex items-center">Profile <IoIosArrowDown /></button>
                {profileMenu && (
                    <div className="flex flex-col w-[150px] items-center  p-5 absolute z-[101] bg-gray-600 border border-[lime] rounded-xl top-5 right-3">
                        {session?.user.isAdmin && (
                             <Link href="/admin" className=" px-3 py-2 w-full font-bold transition duration-500 hover:bg-[lime] hover:text-black text-[lime] rounded-xl">Admin</Link>
                        )}
                        <Link href="/profile" className=" px-3 w-full py-2 font-bold transition duration-500 hover:bg-[lime] hover:text-black text-[lime] my-2 rounded-xl">Profile</Link>

                        <button onClick={signoutHandler} className=" px-3 py-2 font-bold transition duration-500 bg-[lime] w-full text-black rounded-xl">Sign Out</button>
                    </div>
                )}
            </div>
        )}
        {!session?.user && (
            <div className="flex">
                <Link href="/register" className=" px-3 py-2 font-bold transition duration-500 hover:bg-[lime] hover:text-black text-[lime] rounded-xl">Register</Link>
                <Link href="/signin" className=" px-3 py-2 font-bold transition duration-500 hover:bg-[lime] hover:text-black text-[lime] rounded-xl">Sign In</Link>
            </div>
        )}
      </div>
    </div>
  )
}
