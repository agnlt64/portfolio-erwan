const categories = [
    {
        id: "langages",
        titre: "Langages",
        icone: "</>",
        competences: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "PHP",
            "Python",
            "Java",
            "SQL",
        ],
    },
    {
        id: "frameworks",
        titre: "Frameworks & Outils",
        icone: "{ }",
        competences: [
            "React",
            "Node.js",
            "Smarty",
            "Git",
            "GitHub / GitLab",
            "Docker",
        ],
    },
    {
        id: "bdd",
        titre: "Bases de données",
        icone: "[ ]",
        competences: ["MySQL", "PostgreSQL", "PhpMyAdmin"],
    },
    {
        id: "soft",
        titre: "Soft Skills",
        icone: "//",
        competences: [
            "Agilité / Scrum",
            "Gestion de projet",
            "Communication",
            "Travail en équipe",
        ],
    },
    {
        id: "Langue",
        titre: "Langues",
        icone: "//",
        competences: ["Anglais (B1)", "Français (niveau natif)"],
    },
];

export default function Competences() {
    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-6xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-16">
                    <p className="font-mono text-xs text-accent mb-4">
                        03 — Compétences
                    </p>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold text-light leading-none mb-6">
                        Mon stack
                    </h1>
                    <p className="font-body text-muted text-lg max-w-xl leading-relaxed">
                        Les technologies et compétences acquises au fil de ma
                        formation et de mes projets.
                    </p>
                </div>

                {/* Tableau des compétences */}
                <div className="border border-border mb-20">
                    {categories.map((cat, i) => (
                        <div
                            key={cat.id}
                            className={`flex flex-col md:flex-row ${
                                i < categories.length - 1
                                    ? "border-b border-border"
                                    : ""
                            }`}
                        >
                            {/* Colonne titre */}
                            <div className="md:w-56 flex-shrink-0 flex items-center gap-3 px-6 py-5 bg-surface border-b md:border-b-0 md:border-r border-border">
                                <span className="font-mono text-xs text-accent">
                                    {cat.icone}
                                </span>
                                <span className="font-display font-bold text-light text-xl">
                                    {cat.titre}
                                </span>
                            </div>

                            {/* Colonne tags */}
                            <div className="flex flex-wrap gap-2 px-6 py-5 items-center">
                                {cat.competences.map((comp) => (
                                    <span
                                        key={comp}
                                        className="font-mono text-xs text-light border border-border bg-surface px-3 py-1.5 hover:border-accent hover:text-accent transition-colors duration-150"
                                    >
                                        {comp}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
