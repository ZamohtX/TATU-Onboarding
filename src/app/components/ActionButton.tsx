'use client';

import React from 'react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'add' | 'update' | 'delete';
}

export default function ActionButton({ children, variant, ...props }: ActionButtonProps) {


  const className = `action-button ${variant}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}