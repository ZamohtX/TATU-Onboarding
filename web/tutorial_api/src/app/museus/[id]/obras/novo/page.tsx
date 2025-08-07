
import WorkForm from "@/app/components/WorkForm";

export default function NewWorkPage({ params }: { params: { id: string } }) {
  const museumId = parseInt(params.id);

  return (
    <div className="page-container">
      <h1 className="page-title">Adicionar Nova Obra</h1>
      <div className="panel">
        <WorkForm museumId={museumId} />
      </div>
    </div>
  );
}