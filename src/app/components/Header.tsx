// src/app/components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container header-container">
        <Link href="/" className="logo-link">
          <h1 className="logo-title">Acervus</h1>
        </Link>

        <nav className="main-nav">
          <Link href="/" className="nav-link">
            Museus
          </Link>
          <Link href="/obras" className="nav-link">
            Obras
          </Link>
        </nav>
        
      </div>
    </header>
  );
}