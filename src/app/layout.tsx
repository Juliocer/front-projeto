import type { Metadata } from "next";
import "./globals.css";
import TemaAlternar from "@/components/temaAlternar/TemaAlternar";
import VLibrasWidget from "@/components/vLibras/Vlibras";
import { ThemeProvider } from "@/components/temaAlternar/themeContext";



export const metadata: Metadata = {
  title: "Projeto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <ThemeProvider>
      <body>
        <VLibrasWidget />
        {children}
      </body>
      </ThemeProvider>
    </html>
  );
}
