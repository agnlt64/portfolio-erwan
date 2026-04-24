import Image from "next/image";
import Link from "next/link";

const formations = [
    {
        titre: "BUT Informatique - Parcours Réalisation d'applications",
        lieu: "IUT d'Amiens - Université de Picardie Jules Verne",
        periode: "2024 — 2027",
        description:
            "Formation en développement, réseaux, bases de données et gestion de projet.",
    },
    {
        titre: "Baccalauréat général - Mention Bien",
        lieu: "Lycée Robert de Luzarches - Amiens   ",
        periode: "2021 — 2024",
        description:
            "Spécialité NSI (Numérique et Sciences de l'Informatique) et Mathématiques avec l'option maths expertes.",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen pt-16">
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
                {/* Text side */}
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent-dim rounded-full px-4 py-1.5">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="font-mono text-xs text-accent">
                            BUT 2 Informatique
                        </span>
                    </div>

                    {/* Name */}
                    <div>
                        <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-none tracking-tight">
                            <span className="text-light">Erwan</span>
                            <br />
                            <span className="text-accent">Christ</span>
                            <span className="text-muted animate-blink ml-1">
                                _
                            </span>
                        </h1>
                    </div>

                    <p className="font-body text-muted text-lg leading-relaxed max-w-md">
                        Actuellement étudiant en 2ᵉ année de BUT Informatique,
                        je recherche une alternance de Développeur Fullstack
                        pour l'année 2026/2027, avec la volonté de poursuivre
                        ensuite en Master.
                    </p>

                    <div className="space-y-0">
                        <p className="font-body text-muted/70 text-base leading-tight max-w-md">
                            « First, solve the problem. Then, write the code. »
                        </p>

                        <p className="font-body text-muted/80 text-sm">
                            John Johnson
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            href="/projets"
                            className="inline-flex items-center gap-2 bg-accent text-bg font-display font-bold px-6 py-3 rounded-none hover:bg-accent/90 transition-colors text-sm tracking-wide"
                        >
                            Voir mes projets
                            <span>→</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 border border-border text-light font-mono px-6 py-3 rounded-none hover:border-accent hover:text-accent transition-colors text-sm"
                        >
                            Contacts
                        </Link>
                    </div>
                </div>

                {/* Photo side */}
                <div className="relative flex justify-center md:justify-end">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Decorative frame */}
                        <div className="absolute inset-0 border border-accent/40 translate-x-3 translate-y-3" />
                        <div className="absolute inset-0 border border-border -translate-x-1 -translate-y-1" />

                        {/* Photo — REMPLACEZ /profile.jpg par votre photo */}
                        <div className="relative w-full h-full bg-surface border border-border overflow-hidden">
                            {
                                <Image
                                    src="/erwan.jpg"
                                    alt="Erwan Christ"
                                    fill
                                    quality={100}
                                    className="object-cover transition-all duration-500"
                                />
                            }
                        </div>

                        {/* Corner accent */}
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-accent" />
                    </div>
                </div>
            </section>

            {/* ── DIVIDER ──────────────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-border" />
                    <span className="font-mono text-xs text-muted">//</span>
                    <div className="flex-1 h-px bg-border" />
                </div>
            </div>

            {/* ── Formations & Expériences ─────────────────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-3 gap-12"></div>
                <p className="font-display text-2xl font-bold text-light mb-1">
                    Formations
                </p>
                <div className="space-y-6">
                    {formations.map((f, i) => (
                        <div key={i} className="flex gap-8">
                            <div className="flex flex-col items-center">
                                <div className="w-2 h-2 bg-accent mt-1.5 flex-shrink-0" />
                                {i < formations.length - 1 && (
                                    <div className="w-px flex-1 bg-border mt-2" />
                                )}
                            </div>
                            <div className="pb-8">
                                <p className="font-mono text-base text-accent mb-1">
                                    {f.periode}
                                </p>
                                <h3 className="font-display text-xl font-bold text-light mb-1">
                                    {f.titre}
                                </h3>
                                <p className="font-mono text-sm text-muted mb-2">
                                    {f.lieu}
                                </p>
                                <p className="font-body text-base text-muted leading-relaxed">
                                    {f.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── QUICK LINKS ──────────────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-4">
                {[
                    {
                        href: "/projets",
                        num: "02",
                        title: "Projets",
                        desc: "Découvrez mes réalisations et travaux pratiques.",
                    },
                    {
                        href: "/competences",
                        num: "03",
                        title: "Compétences",
                        desc: "Langages, frameworks et outils que je maîtrise.",
                    },
                    {
                        href: "/contact",
                        num: "04",
                        title: "Contact",
                        desc: "Échangeons sur vos projets ou opportunités.",
                    },
                ].map(({ href, num, title, desc }) => (
                    <Link
                        key={href}
                        href={href}
                        className="group border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:bg-accent-dim"
                    >
                        <p className="font-mono text-xs text-muted mb-4">
                            {num} —
                        </p>
                        <h3 className="font-display text-xl font-bold text-light group-hover:text-accent transition-colors mb-2">
                            {title}
                        </h3>
                        <p className="font-body text-sm text-muted leading-relaxed">
                            {desc}
                        </p>
                        <span className="inline-block mt-4 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                        </span>
                    </Link>
                ))}
            </section>
        </div>
    );
}
