import { db } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content){
    // console.log(content.params.id)
    const data = db
    const userData = data.filter((ele)=>ele.id==content.params.id)
    if(userData.length == 0){
        userData.push({
            error: 'Id not avaible'
        })
        
    }
    return NextResponse.json(userData, {status:200})
}