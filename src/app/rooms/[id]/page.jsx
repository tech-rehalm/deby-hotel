"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [house, setHouse] = useState()
    const par = useParams()
    console.log(par.id);
    
    const fetchHouse = async()=>{
        const response = await fetch(`/api/houses/${par.id}`)
        const data = await response.json()
        setHouse(data.house)
    }
    useEffect(()=>{
      fetchHouse()
    },[])
    console.log(house);
    
  return (
    <div className='w-full min-h-screen p-3 sm:p-10 pt-[100px]'>
      <h1 className="text-xl font-bold text-blue-900">{house?.title}</h1>
      <img src={house?.image} alt="" />
    </div>
  )
}
