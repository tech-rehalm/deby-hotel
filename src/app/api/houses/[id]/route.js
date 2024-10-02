import House from "@/models/HouseModel.ts";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    try {
        const house = await House.findOne({_id: params.id})
        return NextResponse.json({house})
    } catch (error) {
        return NextResponse.json({error})
    }
}