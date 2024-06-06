import { NextResponse } from "next/server"
import connectMongoDB from "../../../../../libs/mongodb"
import Topic from "../../../../../models/topics"

export async function PUT(req,{params}){
    const {id} = params

    const {newTitle:title,newDescription:description} =await req.json()

    await connectMongoDB()
    await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({msg:'updated'},{status:200})
}

export async function GET({params}){
    const {id} = params
    await connectMongoDB()
    const topic = await Topic.findById(id)
    return NextResponse.json({topic},{status:200})
}