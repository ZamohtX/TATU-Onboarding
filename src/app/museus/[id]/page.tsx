// Em: src/app/museus/[id]/page.tsx

import { fetchMuseumById } from "@/lib/api";
import ActionButton from "@/app/components/ActionButton";
import WorkCard from "@/app/components/WorkCard";
import Link from 'next/link';
import { Suspense } from 'react';

export default async function MuseumDetailPage({ params }: { params: { id: string } }) {
  
  // ✅ PASSO 1: Lemos o ID uma única vez e guardamos numa variável
  const id = params.id;

  // ✅ PASSO 2: Usamos a nossa variável 'id' para buscar os dados
  const museum = await fetchMuseumById(id);

  if (!museum) {
    return <p>Museu não encontrado.</p>;
  }
  
  const works = museum.works;

  return (
    <div className="detail-page-container">
      <h1 className="detail-page-title">{museum.name}</h1>
      <p className="detail-page-description">{museum.description}</p>
      <div className="actions-container panel">
        {/* ✅ PASSO 3: Usamos a nossa variável 'id' aqui também */}
        <Link href={`/museus/${id}/obras/novo`} style={{ textDecoration: 'none' }}>
            <ActionButton variant="add">
              Adicionar Obra
            </ActionButton>
        </Link>
      </div>
      <hr className="divider" />
      <h2 className="works-list-title">Obras em Exposição</h2>
      <div className="works-list panel">
        {works && works.length > 0 ? (
          works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))
        ) : (
          <p>Nenhuma obra encontrada para este museu no momento.</p>
        )}
      </div>
    </div>
  );
}