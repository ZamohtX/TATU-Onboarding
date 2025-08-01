// src/app/layout.tsx
import '@/styles/globals.css'; // <--- ESSA LINHA É FUNDAMENTAL
import Header from './components/Header';
import type { Metadata } from 'next';
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata : Metadata = {
  title: "Acervus",
  description:"Explorador de museus"
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <Header/>
        <main>
          {children}  
        </main>        
      </body>
    </html>
  );
}