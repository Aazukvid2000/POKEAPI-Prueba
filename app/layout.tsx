import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PokéDex - Ejercicio API",
  description: "Aplicación de Pokémon usando Next.js y PokéAPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}