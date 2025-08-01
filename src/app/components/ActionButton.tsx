// Em: src/app/components/ActionButton.tsx
'use client';

import React from 'react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'add' | 'update' | 'delete';
}

export default function ActionButton({ children, variant, ...props }: ActionButtonProps) {
  // LINHA DE DEPURAÇÃO: Vamos verificar se a função onClick está a chegar como propriedade
  // Usamos 'Object.prototype.toString.call' para tentar extrair o texto ou ícone
  const childText = Object.prototype.toString.call(children) === '[object Array]' ? (children as any[])[1] : children;
  console.log(`Botão "${childText}": Recebeu a propriedade onClick?`, typeof props.onClick);

  const className = `action-button ${variant}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}