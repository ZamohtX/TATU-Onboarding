import { WorkRepository } from "../repositories/workRepository";

const repository = new WorkRepository();



export class WorkController{
  async create(data: { title: string; author?: string | null; description?: string | null; attraction_id: number }) {
    if (!data.title || data.title.trim() === "") {
        throw new Error("O campo 'title' é obrigatório.");
    }

    if (!data.attraction_id || isNaN(data.attraction_id)) {
        throw new Error("O campo 'attraction_id' é obrigatório e deve ser um número.");
    }

    const createData = {
        title: data.title,
        author: data.author ?? null,
        description: data.description ?? null,
        attraction_id: data.attraction_id,
    };

    return repository.create(createData);
    }


    async findById(id: number){ 
        if (!id || isNaN(id)){
            throw new Error("ID inválido.");
        }
        
        const work = await repository.findById(id);
        if (!work){
            throw new Error("Trabalho não encontrado");
        }
        return work;
    }


    async findAll() {
        return repository.findAll();
    }


    async update(id:number, data: {title?:string; description?:string|null; author?:string; attraction_id?:string}){
        if (!id || isNaN(id)){
            throw new Error("ID inválido.");
        }

        const updateData = {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.attraction_id !== undefined && { attraction_id: Number(data.attraction_id) }),
        ...(data.author !== undefined && { author: data.author }),
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


