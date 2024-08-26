import { db } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request){
    const data = db
    return NextResponse.json(data)
}

export async function POST(request){
    let payload = await request.json()
    console.log(payload)

    if(!payload.name){
        return NextResponse.json({result: 'require field not found'})
    }
    return NextResponse.json({result: "hello"})
}