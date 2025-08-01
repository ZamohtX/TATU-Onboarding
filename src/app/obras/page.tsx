import { fetchAllWorks } from "@/lib/api";
import WorkCard from "../components/WorkCard";


export default async function ObrasPage(){
    const works = await fetchAllWorks();

    return( 
        <div className="page-cotainer">
            <h1 className="page-title">Todas as Obras</h1>
            <div className="workslist panel">
                {works && works.length > 0 ? (
                    works.map((work) => (
                        <WorkCard key={work.id} work={work}/>
                    ))
                ): (
                    <p className="empty-list-message">Nenhuma Obra encontrada.</p>
                )}
            </div>
        </div>
    )
}
