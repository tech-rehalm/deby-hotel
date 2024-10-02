import House from "@/models/HouseModel.js"
import connectDB from "@/utils/db.ts"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { image, title, description, field } = await req.json();
    
    if (!title || !image || !description || !field) {
        return NextResponse.json({ error: "Please fill in all the fields" }, { status: 400 });
    }
    
    await connectDB();
    
    try {
        const houses = await House.find();
        const number = houses.length + 1;  // Dynamically generate house number

        const houseExist = await House.findOne({ number });
        if (houseExist) {
            return NextResponse.json({ error: "House with the same number exists" }, { status: 400 });
        }

        const house = new House({
            title,
            number,
            image,
            description,
            field,
        });
        await house.save();

        return NextResponse.json({ message: "House suite added successfully" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    await connectDB();
    try {
        const houses = await House.find();
        return NextResponse.json({ houses });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
