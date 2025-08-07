
import { fetchMuseumById } from "@/lib/api";
import ActionButton from "@/app/components/ActionButton";
import WorkCard from "@/app/components/WorkCard";
import Link from 'next/link';
import { Suspense } from 'react';

export default async function MuseumDetailPage({ params }: { params: { id: string } }) {
  
  const id = params.id;

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