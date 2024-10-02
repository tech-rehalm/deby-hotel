import User from "@/models/UserModel";
import connectDB from "@/utils/db.ts";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(req, {params}){
    try {
        await connectDB()
        const user = await User.findOne({_id:params.id}).select("-password")
        console.log(user);
        return NextResponse.json(user)
        
    } catch (error) {
        return NextResponse.json({message: error.message})
    }
}

export async function PATCH(req, { params }) {
    try {
        const { firstname, lastname, email, password } = await req.json();
        await connectDB();
        const user = await User.findByIdAndUpdate(
            params.id, 
            {firstname, lastname, email, },
            { new: true, runValidators: true }
        );
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        const updatedUser = user.toObject();
        delete updatedUser.password;
        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(req, {params}){
    await connectDB()
    try {
        await User.findByIdAndDelete({_id: params.id})
        return NextResponse.json({message:"User deleted successfully"});
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}