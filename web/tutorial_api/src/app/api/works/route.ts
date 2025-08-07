import  { NextRequest, NextResponse} from "next/server";
import { WorkController } from "@/lib/controllers/workController";

const controller = new WorkController();


// POST /api/works
export async function POST(req: NextRequest){
    try{

        const data = await req.json();
        const created = await controller.create(data);
        return NextResponse.json(created, {status: 201});
        } catch (error: any){
            return NextResponse.json({error: error.message}, {status: 400});
        }
}


// GET /api/works
export async function GET(){
    try {
        const list = await controller.findAll();
        return NextResponse.json(list);
    } catch (error: any){
        return NextResponse.json({error: error.message}, {status:400});
    }
}