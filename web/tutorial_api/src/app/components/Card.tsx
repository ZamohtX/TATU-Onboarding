import { Museu } from '@/lib/types';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  museu: Museu;
}

export default function Card({ museu, ...props }: CardProps) {
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