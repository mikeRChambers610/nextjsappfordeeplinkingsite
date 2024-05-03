// app/layout.tsx
import React from 'react';
import NavBar from './components/NavBar'; // Make sure the path is correct

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
