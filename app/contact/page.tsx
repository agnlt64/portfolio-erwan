"use client";
import { useState } from "react";

const infos = [
    {
        label: "Email",
        valeur: "erwan.christ.10@gmail.com",
        lien: "mailto:erwan.christ.10@gmail.com",
        icone: "@",
    },
    {
        label: "Teléphone",
        valeur: "+33 7 82 19 84 14",
        lien: "tel:+33782198414",
        icone: "Tel",
    },
    {
        label: "LinkedIn",
        valeur: "linkedin.com/in/erwan-christ",
        lien: "https://linkedin.com/in/erwan-christ",
        icone: "in",
    },
    {
        label: "GitHub",
        valeur: "github.com/erwan-cht",
        lien: "https://github.com/erwan-cht",
        icone: "gh",
    },
    {
        label: "Localisation",
        valeur: "Amiens, France",
        lien: null,
        icone: "Loc",
    },
];

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({
        nom: "",
        email: "",
        sujet: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => setForm({ ...form, [e.target.name]: e.target.value });

    // 👇 Connectez ce formulaire à un service (Formspree, EmailJS, etc.)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: intégrez votre service d'envoi d'email ici
        setSent(true);
    };

    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-6xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-16">
                    <p className="font-mono text-xs text-accent mb-4">
                        04 — Contact
                    </p>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold text-light leading-none mb-6">
                        Contacts
                    </h1>

                    {/* Infos de contact */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="border border-accent/30 bg-accent-dim p-5 mt-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                <span className="font-mono text-xs text-accent">
                                    Disponible
                                </span>
                            </div>
                            <p className="font-mono text-sm text-muted">
                                Actuellement à la recherche d&apos;une
                                alternance pour la rentrée 2026 dans le domain
                                du développement informatique.
                            </p>
                        </div>
                        <p className="font-mono text-base text-muted mb-6">
                            Si vous souhaitez me contacter, voici les
                            différentes façons de me joindre :
                        </p>
                        {infos.map((info) => (
                            <div
                                key={info.label}
                                className="border border-border p-5 hover:border-accent/40 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="font-mono text-xs text-accent w-6 flex-shrink-0 mt-0.5">
                                        {info.icone}
                                    </span>
                                    <div>
                                        <p className="font-mono text-xs text-muted mb-1">
                                            {info.label}
                                        </p>
                                        {info.lien ? (
                                            <a
                                                href={info.lien}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-mono text-sm text-light group-hover:text-accent transition-colors break-all"
                                            >
                                                {info.valeur}
                                            </a>
                                        ) : (
                                            <p className="font-mono text-sm text-light">
                                                {info.valeur}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
