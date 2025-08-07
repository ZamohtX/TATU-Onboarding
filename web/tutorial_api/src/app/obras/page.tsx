
import { fetchAllWorks } from "@/lib/api";
import WorkCard from "@/app/components/WorkCard";

export default async function ObrasPage() {
  
  const works = await fetchAllWorks();

  return (
    <div className="page-container">
      <h1 className="page-title">Todas as Obras</h1>
      
      <div className="works-list panel">
        {works && works.length > 0 ? (
          works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))
        ) : (
          <p className="empty-list-message">Nenhuma obra encontrada no banco de dados.</p>
        )}
      </div>
    </div>
  );
}