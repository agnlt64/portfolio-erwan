"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets & Expériences" },
    { href: "/competences", label: "Compétences" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-display font-bold text-lg tracking-tight group flex items-center gap-2"
                >
                    <span className="text-accent font-mono text-sm group-hover:animate-pulse">
                        &gt;
                    </span>
                    <span className="text-light">Erwan Christ</span>
                </Link>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {links.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`font-mono text-sm transition-colors duration-200 relative group ${
                                            isActive
                                                ? "text-accent"
                                                : "text-muted hover:text-light"
                                        }`}
                                    >
                                        {label}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                                                isActive
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            }`}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Bouton thème */}
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
