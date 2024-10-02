"use client"

import React from 'react'
import {useState} from "react"
import {FaHome, FaUser, FaBed, FaWarehouse} from "react-icons/fa"
import { Settings } from 'lucide-react'
import { Hotel } from 'lucide-react'
import { User, House } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminNavigation({children}) {
    const links = [
        {
            title:"Dashboard", path:"/admin"
        },{
            title:"Houses", path:"/admin/houses"
        },{
            title:"Bookings", path:"/admin/bookings"
        },{
            title:"Customers", path:"/admin/customers"
        },{
            title:"Check Ins", path:"/admin/checkins"
        },{
            title:"Setings", path:"/admin/settings"
        },
    ]
    const [mobile, setMobile] = useState(false)
    const pathName = usePathname()
  return (
    <div className='w-full min-h-screen relative bg-gray-700 pt-[80px]'>
      {mobile? (
        <div className="fixed left-0 top-0 bottom-0 w-[50px] items-center">
            <Link href="/admin"><FaHome/></Link>
            <Link href="/admin/houses"><House/></Link>
            <Link href="/admin/bookings"><FaBed/></Link>
            <Link href="/admin/customers"><FaUser/></Link>
            <Link href="/admin/checkins"><Hotel/></Link>
            <Link href="/admin/settings"><Settings/></Link>
        </div>
      ):(
        <div className="flex flex-col fixed top-[80px] bottom-0 left-0 p-3 pr-0 w-[150px] items-center text-gray-200  bg-gray-700">
            {links.map((link)=>(
                <Link key={link.path} className={`p-4 pr-0 w-full font-bold text-lg opacity-60 ${link.path === pathName && "bg-gray-800 border border-[lime] border-r-0 rounded-l-lg opacity-100 text-[lime]"}`} href={link.path}>{link.title}</Link>
            ))}
        </div>
      )}
      <div className="pl-[50px]  sm:pl-[150px] bg-gray-800 min-h-screen w-full">
        {children}
      </div>
    </div>
  )
}
