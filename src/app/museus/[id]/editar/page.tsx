// Em: src/app/museus/[id]/editar/page.tsx

import { AttractionController } from "@/lib/controllers/attractionController";
import MuseumForm from "@/app/components/MuseumForm";

const controller = new AttractionController();

export default async function EditMuseumPage({ params }: { params: { id: string } }) {
  
  const id = parseInt(params.id);
  const museum = await controller.findById(id);

  if (!museum) {
    return (
      <div className="page-container">
        <h1 className="page-title">Erro 404</h1>
        <p style={{ textAlign: 'center' }}>O museu que você está a tentar editar não foi encontrado.</p>
      </div>
    );
  }

  const plainMuseumObject = JSON.parse(JSON.stringify(museum));

  return (
    <div className="page-container">
      <h1 className="page-title">Editar Museu</h1>
      <div className="panel">
        <MuseumForm initialData={plainMuseumObject} />
      </div>
    </div>
  );
}