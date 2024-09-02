import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { uri } from "../../../../lib/db";
import { Product } from "../../../../lib/model/product";

export async function GET() {

    let data = []
    try {
        await mongoose.connect(uri)
        data = await Product.find()
    } catch (error) {
        data = { success: false }
    }

    return NextResponse.json(data, { success: true })
}

export async function POST(request) {
    await mongoose.connect(uri)
    let payload = await request.json()
    console.log(payload)
    let product = await Product(payload)
    const result = await product.save()
    return NextResponse.json({ result: true })
}