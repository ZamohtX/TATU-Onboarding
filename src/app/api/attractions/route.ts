import { AttractionController } from "@/lib/controllers/attractionController";
import { NextRequest, NextResponse } from "next/server";

const controller = new AttractionController();

// POST /api/attractions
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const attraction = await controller.create(body);
        return NextResponse.json(attraction, {status:201});
    } catch (error: any){
        return NextResponse.json({error: error.message}, {status: 400});
    }
}




// GET /api/attractions
export async function GET(){
    try{
        const attractions = await controller.findAll();
        return NextResponse.json(attractions);
    } catch (error: any){
        return NextResponse.json({error: error.message}, {status:400});
    }
}