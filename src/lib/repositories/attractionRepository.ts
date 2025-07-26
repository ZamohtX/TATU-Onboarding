import { PrismaClient, Attraction } from "../../generated/prisma";

const prisma = new PrismaClient();

export class AttractionRepository{
    async create(data: Omit<Attraction,"id">){
        return prisma.attraction.create({data});
    }

    async findAll(){
        return prisma.attraction.findMany();
    }
 
    async findById(id: number){
        return prisma.attraction.findUnique({
            where: {id},
            include: {works: true},
        });
    }

    async update(id: number, data: Partial<Omit<Attraction, "id">>){
        return prisma.attraction.update({
            where: {id},
            data,
        });
    }
    async delete(id: number){
        return prisma.attraction.delete({
            where: {id},
        });
    }
}