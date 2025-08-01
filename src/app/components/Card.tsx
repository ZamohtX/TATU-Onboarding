// Em: src/app/components/Card.tsx
import { Museu } from '@/lib/types';
import React from 'react'; // Importamos o React

// 1. Atualizamos as props para incluir qualquer propriedade de um div, como 'onClick'
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  museu: Museu;
}

export default function Card({ museu, ...props }: CardProps) {
  // 2. Usamos '{...props}' para passar qualquer propriedade extra (como o nosso onClick)
  //    para o div principal do card.
  return (
    <div className="museum-card" {...props}>
      <div className="card-text-content">
        <h2 className="card-title">{museu.name}</h2>
        <p className="card-description">{museu.description}</p>
      </div>
      <div className="card-chevron">
        <span>›</span>
      </div>
    </div>
  );
}