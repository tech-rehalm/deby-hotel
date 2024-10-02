"use client"

import AdminNavigation from '@/components/AdminNavigation'
import { Upload } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function page() {
    const [title, setTitle] = useState("")
    const [number, setNumber] = useState(0)
    const [field, setField] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [imagePreview, setImagePreview] = useState("")
    const [houses, setHouses] = useState([])


    const handleImageChange= (e)=>{
        const file = e.target.files?.[0]
        if(file){
            const reader = new FileReader()
            reader.onloadend=()=>{
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/houses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    field,
                    description,
                    image: imagePreview,
                }),
            });
    
            if (response.ok) {
                toast.success("Suite added successfully");
                fetchHouses(); // Refresh the house list
            } else {
                const errorData = await response.json();
                toast.warning(errorData.error || "Error creating a suite");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };
    
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
    <AdminNavigation>
      <div className="w-full h-full p-3 text-gray-200 flex flex-col">
        <h1 className="text4xl font-bold my-4 md:my-6">Deby Hotel</h1>
        <form onSubmit={handleSubmit} className='w-full m-3 border mx-auto border-[lime] rounded-lg p-3 sm:w-[300px] sm:p-5 flex flex-col'>
            <h1 className="font-bold w-full text-center my-3 text-2xl">Add a suite</h1>
            <label htmlFor="image" className='min-w-[70px] min-h-[70px] bg-gray-900 text-3xl text-[lime] font-extrabold flex items-center justify-center cursor-pointer'>
                <Upload/>
            </label> 
            {imagePreview && <img src={imagePreview} alt="Preview" className='w-full mx-5 h-auto mt-2 rounded-md' />}
            <input type="file"  className='hidden' id='image'  onChange={handleImageChange} accept="image/*"/>
            <label htmlFor="title" className='my-2 font-bold'>House Title</label>
            <input type="text" value={title} id={title} className='w-full p-2 rounded-lg border border-[lime] bg-gray-700 text-[lime] focus:outline-none' onChange={(e)=>setTitle(e.target.value)} />
            <label htmlFor="field" className='my-2 font-bold'>House Field</label>
            <input type="text" value={field} id={field} className='w-full p-2 rounded-lg border border-[lime] bg-gray-700 text-[lime] focus:outline-none' onChange={(e)=>setField(e.target.value)} />
            <label htmlFor="description" className='my-2 font-bold'>House Description</label>
            <textarea type="text" value={description} id={description} className='w-full p-2 text-xs font-extralight rounded-lg border border-[lime] bg-gray-700 text-[lime] focus:outline-none' onChange={(e)=>setDescription(e.target.value)} />
            <button 
            className='flex items-center justify-center bg-gray-800 border border-gray-700 py-2 font-bold text-lg rounded-lg w-full text-center my-2'>
            <div className="w-4 h-4 mr-3 animate-ping rounded-full bg-[lime]"></div> Add suite</button>
        </form>
      </div>
    </AdminNavigation>
  )
}
