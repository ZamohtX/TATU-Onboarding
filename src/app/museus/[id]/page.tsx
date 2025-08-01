// Em: src/app/museus/[id]/page.tsx

// ✅ CORREÇÃO AQUI: A linha de importação estava faltando
import { fetchMuseumById } from "@/lib/api";
import ActionButton from "@/app/components/ActionButton";
import WorkCard from "@/app/components/WorkCard";
import { Work } from "@/lib/types";
import Link from "next/link";
export default async function MuseumDetailPage({ params }: { params: { id: string } }) {
  
  const museum = await fetchMuseumById(params.id);

  // LINHA DE DEPURAÇÃO
  console.log(
    "DADOS COMPLETOS DO MUSEU RECEBIDOS NA PÁGINA:",
    JSON.stringify(museum, null, 2)
  );

  if (!museum) {
    return <p>Museu não encontrado.</p>;
  }
  
  const works = museum.works;

  return (
    <div className="detail-page-container">
      <h1 className="detail-page-title">{museum.name}</h1>
      <p className="detail-page-description">{museum.description}</p>
      <div className="actions-container panel">
        <Link href={`/museus/${params.id}/obras/novo`} style={{ textDecoration: 'none' }}>
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