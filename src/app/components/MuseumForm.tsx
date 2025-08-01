// Em: src/app/components/MuseumForm.tsx
'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createMuseum, updateMuseum } from "@/lib/api";
import { Museu } from "@/lib/types";

interface MuseumFormProps {
  initialData?: Museu;
}

export default function MuseumForm({ initialData }: MuseumFormProps) {
    // Esta é a linha mais importante: o estado inicial é definido aqui.
    const [name, setName] = useState(initialData?.name || '');
    const [description, setDescription] = useState(initialData?.description || '');
    
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Esta flag determina qual função chamar.
    // Ela só será 'true' se 'initialData' for um objeto válido.
    const isEditing = !!initialData;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (isEditing) {
                // Se 'isEditing' for true, chama a função de ATUALIZAR
                await updateMuseum(initialData.id, { name, description });
                alert('Museu atualizado com sucesso!');
            } else {
                // Se 'isEditing' for false, chama a função de CRIAR
                await createMuseum({ name, description });
                alert('Museu criado com sucesso!');
            }
            router.push('/');
            router.refresh();
        } catch (error: any) {
            alert(`Erro ao salvar museu: ${error.message}`);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label htmlFor="name">Nome do Museu</label>
                <input 
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    required
                />
            </div>
            <button type="submit" className="form-submit-button" disabled={isLoading}>
                {isLoading ? 'Salvando...' : (isEditing ? 'Atualizar Museu' : 'Salvar Museu')}
            </button>
        </form>
    );
}