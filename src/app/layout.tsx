import type { Metadata } from "next";
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
            </body>
        </html>
    );
}
