// Em: src/app/components/WorkCard.tsx
'use client';

import Link from 'next/link';
import { Work } from "@/lib/types";
import { useRouter } from "next/navigation";
import ActionButton from './ActionButton';
import { deleteWork } from "@/lib/api"; // Importa a função para DELETAR OBRAS

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  const router = useRouter();

  // ✅ Esta é a função handleDelete para OBRAS
  const handleDelete = async () => {
    if (window.confirm(`Tem certeza que deseja excluir a obra "${work.title}"?`)) {
      try {
        await deleteWork(work.id); // Chama a função deleteWork
        alert('Obra excluída com sucesso!');
        router.refresh();
      } catch (error: any) {
        alert(`Falha ao excluir a obra: ${error.message}`);
        console.error(error);
      }
    }
  };

  return (
    <div className="work-card">
      <div className="work-card-content">
        <h3 className="work-title">{work.title}</h3>
        {work.author && <p className="work-author">Autor: {work.author}</p>}
        {work.description && <p className="work-description">{work.description}</p>}
      </div>
      <div className="work-card-actions">
        <Link href={`/museus/${work.attraction_id}/obras/${work.id}/editar`}>
            <ActionButton variant="update">
              📝 Editar
            </ActionButton>
        </Link>
        <ActionButton variant="delete" onClick={handleDelete}>
          🗑️ Excluir
        </ActionButton>
      </div>
    </div>
  );
}