import { AttractionRepository } from "@/lib/repositories/attractionRepository";

const repository = new AttractionRepository();

export class AttractionController {
    
    async create(data: {name:string; description?:string | null}){
        if(!data.name || data.name.trim() === ""){
            throw new Error("O campo 'name' é obrigatorio");
        }
        const createData = {
            name: data.name,
            description: data.description ?? null,
        };
        return repository.create(createData);
    }


    async findById(id:number){
        if (!id || isNaN(id)){
            throw new Error("ID inválido.");
        }

        const attraction = await repository.findById(id);
        if (!attraction){
            throw new Error("Atração não encontrada.");
        }
        return attraction;
    }

    async findAll(){
        return repository.findAll();
    }

    async update(id:number, data: {name?:string; description?:string | null}){
        if (!id || isNaN(id)){
            throw new Error("ID inválido.");
        }
        const updateData = {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.description !== undefined && { description: data.description ?? null }),
        };
        return repository.update(id, updateData);
    }

    async delete(id:number){
        if (!id || isNaN(id)){
            throw new Error("ID inválido.");
        }
        return repository.delete(id);
    }







}