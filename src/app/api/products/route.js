import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {uri } from "../../../../lib/db";
import { Product } from "../../../../lib/model/product";

export async function GET(){

    let data =[]
    try {
        await mongoose.connect(uri)
         data = await Product.find()        
    } catch (error) {
        data = {success: false}
    }

    return NextResponse.json(data, {success: true})
}