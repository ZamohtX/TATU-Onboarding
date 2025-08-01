import { NextRequest, NextResponse } from "next/server";
import { WorkController } from "@/lib/controllers/workController";

const controller = new WorkController();

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params; 
    const id = Number(params.id);
    const work = await controller.findById(id);
    return NextResponse.json(work);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = Number(params.id);
    const data = await req.json();
    const updated = await controller.update(id, data);
    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}



export async function DELETE(
  req: NextRequest, 
  { params }: { params: { id: string } } 
) {
  try {
    const id = Number(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido." }, { status: 400 });
    }

    const deleted = await controller.delete(id);
    return NextResponse.json(deleted);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 }); 
  }
}