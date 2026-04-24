import Image from "next/image";

const projets = [
    {
        id: 1,
        titre: "Stage - Diréction Générale des Finances Publiques",
        sousTitre:
            "Développement de tests automatisés et gestion du pipeline CI/CD",
        description:
            "Durant mon stage de 8 semaines à la Direction Générale des Finances Publiques," +
            " j'ai travaillé sur l'automatisation des tests pour une application nommée Baltic qui" +
            " permet de visualiser des données cadastrales. J'ai utilisé Selenium pour créer des tests" +
            " automatisés suivant le design pattern Page Object Model, assurant ainsi la qualité et la fiabilité de l'application." +
            " De plus, j'ai contribué à la mise en place d'un pipeline CI/CD avec Jenkins, permettant des déploiements plus rapides et plus sûrs.",
        tags: ["Java", "Selenium", "Jenkins"],
        image: "/projets/DGFIP.png",
        annee: "19 Janvier - 13 Mars 2026",
        status: "Terminé",
    },
    {
        id: 2,
        titre: "MonCovoitJV",
        sousTitre: "Application de covoiturage pour les étudiants de l'UPJV",
        description:
            "MonCovoitJV est une application de covoiturage destinée aux étudiants de l'UPJV. Cette application permet aux étudiants de trouver facilement d'autres étudiants pour se rendre à l'université. L'application permet aux étudiants de réserver ou de proposer un trajet tout en simplifiant les échanges avec un système de messagerie.",
        tags: ["HTML", "CSS", "JavaScript", "Smarty", "PHP", "MySQL"],
        lien: "https://github.com/erwan-cht/sae-covoiturage",
        image: "/projets/moncovoitjv.png",
        annee: "Mai - Juin 2025",
        status: "Terminé",
    },
];

export default function Projets() {
    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-20">
                    <p className="font-mono text-xs text-accent mb-4">
                        02 — Projets
                    </p>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold text-light leading-none mb-6">
                        Mes projets et expériences
                    </h1>
                    <p className="font-body text-muted text-lg max-w-xl leading-relaxed">
                        Une sélection de projets réalisés durant ma formation et
                        en autonomie.
                    </p>
                </div>

                {/* Liste des projets */}
                <div className="space-y-32">
                    {projets.map((projet, i) => (
                        <article key={projet.id}>
                            {/* Numéro + séparateur */}
                            <div className="flex items-center gap-4 mb-10">
                                <span className="font-mono text-xs text-accent">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="flex-1 h-px bg-border" />
                                <span className="font-mono text-xs text-muted">
                                    {projet.annee}
                                </span>
                                <span
                                    className={`font-mono text-xs px-2 py-0.5 border ${
                                        projet.status === "En cours"
                                            ? "border-accent/40 text-accent"
                                            : "border-border text-muted"
                                    }`}
                                >
                                    {projet.status}
                                </span>
                            </div>

                            {/* Contenu : texte + image */}
                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                {/* Texte */}
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="font-display text-4xl font-extrabold text-light leading-tight mb-3">
                                            {projet.titre}
                                        </h2>
                                        <p className="font-mono text-sm text-accent">
                                            {projet.sousTitre}
                                        </p>
                                    </div>

                                    <p className="font-body text-muted leading-relaxed">
                                        {projet.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {projet.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="font-mono text-xs text-accent/80 border border-accent/20 px-2 py-1"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Lien GitHub — apparaît seulement si lien est défini */}
                                    {projet.lien && (
                                        <a
                                            href={projet.lien}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 border border-border hover:border-accent text-muted hover:text-accent transition-all duration-200 px-5 py-3 font-mono text-sm group"
                                        >
                                            <span>Voir sur GitHub</span>
                                            <span className="group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </a>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="relative">
                                    <div className="absolute inset-0 border border-accent/20 translate-x-2 translate-y-2 pointer-events-none" />
                                    <div className="relative border border-border overflow-hidden bg-surface aspect-video">
                                        <Image
                                            src={projet.image}
                                            alt={projet.titre}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pied de page */}
                <div className="mt-24 border-t border-border pt-8 text-center">
                    <p className="font-mono text-xs text-muted/50">
                        Plus de projets sur{" "}
                        <a
                            href="https://github.com/erwan-cht"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
