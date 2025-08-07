import { error } from "console";
import { Museu, Work, WorkParaCriar } from "./types";

export async function fetchAttractions(){
    const res = await fetch("http://localhost:3000/api/attractions",{
        cache:"no-store",
    });
    if (!res.ok){
        throw new Error("Erro ao carregar atrações");
    }
    return res.json();
}


export async function fetchMuseumById(id:string):Promise<Museu>{
    const res = await fetch(`http://localhost:3000/api/attractions/${id}`);
    if (!res){
        throw new Error('Falha ao buscar dados do museu');
    }
    return res.json();
}


export async function fetchAllWorks(): Promise<Work[]>{
    const res = await fetch(`http://localhost:3000/api/works`);
    if (!res.ok){
        throw new Error('Falha ao buscar todas as obras');
    }
    return res.json();
}

export async function createMuseum(data: {name:string, description:string}):Promise<Museu>{
    const res = await fetch("http://localhost:3000/api/attractions",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!res.ok){
        const errorBody = await res.json();
        throw new Error(errorBody.message || "Falha ao cria museu");
    }
    return res.json();
}


export async function updateMuseum(id:string, data:{name:string, description:string}):Promise<Museu>{
    const res = await fetch(`http://localhost:3000/api/attractions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const errorBody = await res.json();
        throw new Error(errorBody.message || "Falha ao atualizar museu");
    }
    return res.json();


}


export async function deleteMuseum(id: string): Promise<void> {
  const res = await fetch(`http://localhost:3000/api/attractions/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody.message || "Falha ao excluir o museu");
  }
}

export async function createWork(data: WorkParaCriar): Promise<Work>{
    const res = await fetch("http://localhost:3000/api/works",{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!res.ok){
        const errorBody = await res.json();
        throw new Error(errorBody.message || "Falha ao criar a obra");
    }
    return res.json();
}


export async function fetchWorkById(workId: number): Promise<Work> {
  const res = await fetch(`http://localhost:3000/api/works/${workId}`);
  if (!res.ok) {
    throw new Error('Falha ao buscar dados da obra');
  }
  return res.json();
}


export async function updateWork(workId: number, data: WorkParaCriar): Promise<Work> {
  const res = await fetch(`http://localhost:3000/api/works/${workId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody.message || "Falha ao atualizar a obra");
  }
  return res.json();
}

export async function deleteWork(workId: number): Promise<void> {
  const res = await fetch(`http://localhost:3000/api/works/${workId}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody.message || "Falha ao excluir a obra");
  }
}


