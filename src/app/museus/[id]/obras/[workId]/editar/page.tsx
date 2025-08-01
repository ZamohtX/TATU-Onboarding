
import { fetchWorkById } from "@/lib/api";
import WorkForm from "@/app/components/WorkForm";

interface EditWorkPageProps {
  params: {
    id: string; 
    workId: string; 
  }
}

export default async function EditWorkPage({ params }: EditWorkPageProps) {
  const museumId = parseInt(params.id);
  const workId = parseInt(params.workId);

  const work = await fetchWorkById(workId);

  if (!work) {
    return <p>Obra não encontrada para edição.</p>;
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Editar Obra</h1>
      <div className="panel">
        <WorkForm museumId={museumId} initialData={work} />
      </div>
    </div>
  );
}