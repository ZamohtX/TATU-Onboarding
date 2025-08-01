// Em: src/app/components/WorkForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createWork, updateWork } from '@/lib/api';
import { Work, WorkParaCriar } from '@/lib/types';

interface WorkFormProps {
  museumId: number;
  initialData?: Work; // Propriedade opcional para dados iniciais (edição)
}

export default function WorkForm({ museumId, initialData }: WorkFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isEditing = !!initialData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const workData: WorkParaCriar = {
      title,
      author: author || null,
      description: description || null,
      attraction_id: museumId,
    };

    try {
      if (isEditing) {
        await updateWork(initialData.id, workData);
        alert('Obra atualizada com sucesso!');
      } else {
        await createWork(workData);
        alert('Obra criada com sucesso!');
      }
      router.push(`/museus/${museumId}`); // Volta para a página de detalhes do museu
      router.refresh();
    } catch (error: any) {
      alert(`Erro ao salvar a obra: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="title">Título da Obra</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="author">Autor</label>
        <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={5} />
      </div>
      <button type="submit" className="form-submit-button" disabled={isLoading}>
        {isLoading ? 'Salvando...' : (isEditing ? 'Atualizar Obra' : 'Salvar Obra')}
      </button>
    </form>
  );
}