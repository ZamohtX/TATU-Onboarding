// Em: src/app/components/Card.tsx
import { Museu } from '@/lib/types';

interface CardProps {
  museu: Museu;
}

// Este é um componente simples que apenas exibe dados.
export default function Card({ museu }: CardProps) {
  return (
    <div className="museum-card">
      <div className="card-text-content">
        <h2 className="card-title">{museu.name}</h2>
        <p className="card-description">{museu.description}</p>
      </div>
      {/* O 'chevron' dá uma indicação visual de que o item é clicável */}
      <div className="card-chevron">
        <span>›</span>
      </div>
    </div>
  );
}