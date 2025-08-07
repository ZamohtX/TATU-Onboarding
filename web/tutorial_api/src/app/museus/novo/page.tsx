
import MuseumForm from "@/app/components/MuseumForm";

export default function NewMuseumPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Adicionar Novo Museu</h1>
      <div className="panel">
        <MuseumForm />
      </div>
    </div>
  );
}