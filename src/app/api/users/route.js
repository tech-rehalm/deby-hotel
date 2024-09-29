import User from "@/models/UserModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req, res){
    const {firstname, lastname, email, password} = await req.json()
    await connectDB()
    const existUser = await User.findOne({email})
    if(!firstname || !lastname || !email || !password){
        throw new Error("Please fill out all fields")
    }
    if(existUser){
        throw new Error("User with the same email already exist")
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    try {
        const newUser = await new User({
        firstname,
        lastname,
        email,
        password: hashedPassword
    })
    await newUser.save()
    return NextResponse.json(newUser)
    } catch (error) {
    return NextResponse.json({message: error.message})
    }
}

export async function GET(req, res){
    try {
        const users = await User.find({})
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({message: error.message})
    }
    

    
}
