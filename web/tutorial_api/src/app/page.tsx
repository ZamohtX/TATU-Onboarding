import { fetchAttractions } from '@/lib/api';
import MuseumList from '@/app/components/MuseumList';
import { Suspense } from 'react';

export default async function HomePage() {
  const museus = await fetchAttractions();
  
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MuseumList museus={museus} />
    </Suspense>
  );
}