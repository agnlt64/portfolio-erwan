import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const syne = Bebas_Neue({
    // ← le nom ici
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-syne",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-jetbrains",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Erwan Christ — Portfolio",
    description: "Étudiant en BUT 2 Informatique",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body
                className={`${syne.variable} ${jetbrainsMono.variable} ${inter.variable}`}
            >
                <Navbar />
                <main>{children}</main>
                <footer className="border-t border-border py-8 mt-20">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="font-mono text-sm text-muted">
                            © {new Date().getFullYear()} — Erwan Christ
                        </span>
                        <span className="font-mono text-xs text-muted">
                            BUT 2 Informatique
                        </span>
                    </div>
                </footer>
            </body>
        </html>
    );
}
