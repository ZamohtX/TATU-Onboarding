// Em: src/app/components/MuseumList.tsx
'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Museu } from '@/lib/types';
import ActionButton from './ActionButton';
import Card from './Card';
import { deleteMuseum } from '@/lib/api'; 

interface MuseumListProps {
  museus: Museu[];
}

export default function MuseumList({ museus }: MuseumListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeMode = searchParams.get('mode');
  const isEditMode = activeMode === 'edit';
  const isDeleteMode = activeMode === 'delete';

  const toggleMode = (mode: 'edit' | 'delete') => {
    if (activeMode === mode) {
      router.push(pathname); // Desliga o modo se o mesmo botão for clicado
    } else {
      router.push(`${pathname}?mode=${mode}`); // Ativa o modo clicado
    }
  };

  const handleDelete = async (museu: Museu) => {
    if (window.confirm(`Tem certeza que deseja excluir o museu "${museu.name}"?`)) {
      try {
        await deleteMuseum(museu.id);
        alert('Museu excluído com sucesso!');
        router.refresh();
      } catch (error: any) {
        alert(`Falha ao excluir o museu: ${error.message}`);
      }
    }
  };

  return (
    <div className={`${isEditMode ? 'edit-mode-active' : ''} ${isDeleteMode ? 'delete-mode-active' : ''}`}>
      <div className="actions-container panel">
        <Link href="/museus/novo" style={{ textDecoration: 'none' }}>
          <ActionButton variant="add">Adicionar Museu</ActionButton>
        </Link>
        <ActionButton variant="update" onClick={() => toggleMode('edit')}>
          {isEditMode ? 'Cancelar Edição' : 'Atualizar Museu'}
        </ActionButton>
        <ActionButton variant="delete" onClick={() => toggleMode('delete')}>
          {isDeleteMode ? 'Cancelar Exclusão' : 'Excluir Museu'}
        </ActionButton>
      </div>

      <div className="list-container panel">
        {isEditMode && <p className="edit-mode-indicator">Modo de Edição: Selecione um museu para editar.</p>}
        {isDeleteMode && <p className="delete-mode-indicator">Modo de Exclusão: Selecione um museu para excluir.</p>}
        
        {museus.map((museu) => {
          if (isDeleteMode) {
            // Em modo de exclusão, o card é um 'div' com um evento de clique
            return (
              <div key={museu.id} onClick={() => handleDelete(museu)} className="card-link-wrapper">
                <Card museu={museu} />
              </div>
            );
          }
          // Em modo de edição ou normal, o card é um Link de navegação
          const href = isEditMode ? `/museus/${museu.id}/editar` : `/museus/${museu.id}`;
          return (
            <Link key={museu.id} href={href} className="card-link-wrapper">
              <Card museu={museu} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}