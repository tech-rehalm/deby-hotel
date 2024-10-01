"use client"
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function page() {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await fetch("/api/users",{
        method:"POST",
        headers:{
          "Contente-Type": "application/json"
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password
        })
      })
      if(response.ok){
        toast.success("Registration successfull")
      }
      router.push("/signin")
    } catch (error) {
      console.log(error);
      toast.error(error?.message)
    }
  }

  return (
    <div className="w-full min-h-screen grid content-center">
       <form onSubmit={handleSubmit} className='max-w-[350px] sm:m-auto sm:w-[350px] p-5 m-5 sm:p-[20px] shadow-inner shadow-[#00ff0048] rounded-xl border border-[lime] text-[lime]'>
      <h1 className="w-full mb-4 text-4xl font-extrabold bg-gradient-to-r from-[lime] to-[aqua] text-center clip">
        Welcome
      </h1>
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstname" className='my-1'>First Name</label>
      <input 
      type="text" 
      value={firstname}
      onChange={(e)=> setFirstName(e.target.value)}
      className='w-full p-1 rounded-xl bg-base-300 font-bold border-2 border-[lime] focus:outline-none mt-1 mb-2' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname" className='my-1'>Last Name</label>
      <input 
      value={lastname}
      onChange={(e)=> setLastName(e.target.value)} 
      id='lastname' 
      className='w-full p-1 rounded-xl bg-base-300 font-bold border-2 border-[lime] focus:outline-none mt-1 mb-2' />
      
        </div>
      </div>
      
      <label htmlFor="email" className='my-1'>Email</label>
      <input 
      type="text" 
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      className='w-full p-1 rounded-xl bg-base-300 font-bold border-2 border-[lime] focus:outline-none mt-1 mb-2' />
      <label htmlFor="password" className='my-1'>Password</label>
      <input 
      value={password}
      onChange={(e)=> setPassword(e.target.value)} 
      id='password' 
      className='w-full p-1 rounded-xl bg-base-300 font-bold border-2 border-[lime] focus:outline-none mt-1 mb-2' />
      <button className="text-lg mb-4 text-slate-900 font-bold btn w-full bg-gradient-to-r from-[lime] to-[aqua]">Register</button>
      <p className="my-2 text-sm font-light">Already have an account? <span className="underline"><Link href="/signin">sign in</Link></span></p>
    </form>
    </div>
    )
}
