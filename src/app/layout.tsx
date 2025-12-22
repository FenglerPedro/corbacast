import type { Metadata } from "next";
import Script from "next/script";
import { Providers } from "./providers";
import Header from "@/components/corbacast/Header";
import Footer from "@/components/corbacast/Footer";
import "../index.css";

export const metadata: Metadata = {
  title: "Corbã Cast",
  description: "O podcast oficial do Projeto Missionário Corbã",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Providers>
          <Header />
          <main className="min-h-screen bg-background">
            {children}
          </main>
          <Footer />
        </Providers>

        {/* Widget Env Script */}
        <Script id="zaia-env" strategy="afterInteractive">
          {`
            window.ZWidget = {
              AgentURL: "https://platform.zaia.app/embed/chat/72123",
            };
          `}
        </Script>

        {/* Widget Loader Script */}
        <Script
          src="https://platform.zaia.app/script/widget-loader.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
