import { prisma } from '@/lib/prisma';
import { Work } from "@/generated/prisma";



export class WorkRepository{
    async create(data: Omit<Work, "id">): Promise<Work>{
        return prisma.work.create({data});
    }

    async findAll(): Promise<Work[]> {
    return prisma.work.findMany();
    }

    async findById(id: number): Promise<Work | null>{
        return prisma.work.findUnique({
            where: {id},
        });
    }

    async update(id: number, data: Partial<Omit<Work, "id">>): Promise<Work>{
        return prisma.work.update({
            where: {id},
            data,
        });
    }

    async delete(id: number):Promise<Work>{
        return prisma.work.delete({
            where: {id},
        });
    }

        
}