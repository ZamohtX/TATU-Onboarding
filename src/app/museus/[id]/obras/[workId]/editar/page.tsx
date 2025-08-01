// Em: src/app/museus/[id]/obras/[workId]/editar/page.tsx

import { fetchWorkById } from "@/lib/api";
import WorkForm from "@/app/components/WorkForm";

// A página agora recebe tanto o 'id' do museu quanto o 'workId' da obra
interface EditWorkPageProps {
  params: {
    id: string; // ID do museu
    workId: string; // ID da obra
  }
}

export default async function EditWorkPage({ params }: EditWorkPageProps) {
  const museumId = parseInt(params.id);
  const workId = parseInt(params.workId);

  // Buscamos os dados da obra específica para pré-preencher o formulário
  const work = await fetchWorkById(workId);

  if (!work) {
    return <p>Obra não encontrada para edição.</p>;
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Editar Obra</h1>
      <div className="panel">
        {/* Passamos o ID do museu e os dados iniciais da obra para o formulário */}
        <WorkForm museumId={museumId} initialData={work} />
      </div>
    </div>
  );
}