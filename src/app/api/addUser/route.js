import { NextResponse } from "next/server"

export function POST (request){
    let payload = request.json()
    console.log(payload)
    return NextResponse.json({result: 'new user created'})
}