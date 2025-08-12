import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roofly - Find Your Luxury Home',
  description: 'Discover premium properties with our advanced search and VR viewing experience',
  keywords: 'real estate, luxury homes, property search, VR viewing, buy home, rent property',
  authors: [{ name: 'Roofly Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}