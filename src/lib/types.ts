// src/lib/types.ts

export interface Museu {
  id: string;
  name: string;
  description: string;
  works: Work[];
}

export interface Work {
  id: number;
  title: string;
  author: string | null;
  description: string | null;
  attraction_id: number;
}


export type WorkParaCriar = Omit<Work, 'id'>;