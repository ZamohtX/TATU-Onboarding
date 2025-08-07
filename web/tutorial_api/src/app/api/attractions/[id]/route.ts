// Em: src/app/api/attractions/[id]/route.ts

import { AttractionController } from "@/lib/controllers/attractionController";
import { NextRequest, NextResponse } from "next/server";

const controller = new AttractionController();

// GET /api/attractions/[id]
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } } 
) {
  try {
    const id = parseInt(params.id);
    const attraction = await controller.findById(id);

    if (!attraction) {
      return NextResponse.json({ message: "Atração não encontrada." }, { status: 404 });
    }
    return NextResponse.json(attraction);
  } catch (error: any) {
    return NextResponse.json({ message: "Erro ao buscar atração.", error: error.message }, { status: 500 });
  }
}

// PUT /api/attractions/:id
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } } 
){
    try {
        const id = parseInt(params.id);
        const body = await request.json();
        const updatedAttraction = await controller.update(id, body);
        return NextResponse.json(updatedAttraction);
    } catch (error: any){
        return NextResponse.json({ message: "Erro ao atualizar atração.", error: error.message }, { status: 400 });
    }
}

// DELETE /api/attractions/:id
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } } 
){
    try{
        const id = parseInt(params.id);
        await controller.delete(id);
        return NextResponse.json({ message: "Atração deletada com sucesso." });
    } catch (error: any){
        return NextResponse.json({ message: "Erro ao deletar atração.", error: error.message }, { status: 400 });
    }
}