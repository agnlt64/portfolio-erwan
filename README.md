# 🚀 Portfolio — Erwan Christ

Portfolio personnel construit avec **Next.js 14** + **Tailwind CSS**.

---

## ⚡ Installation & démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Ouvrir dans le navigateur
# http://localhost:3000
```

---

## 📝 Personnalisation

### 1. Photo de profil
- Ajoutez votre photo dans `/public/profile.jpg`
- Dans `app/page.tsx`, supprimez le bloc `<div>` placeholder
- Décommentez le bloc `<Image ... />` en dessous

### 2. Textes à modifier (commentaires `👈 À MODIFIER`)
| Fichier | Ce qu'il faut modifier |
|---|---|
| `app/page.tsx` | Description, À propos, localisation, disponibilité |
| `app/projets/page.tsx` | Tableau `projets[]` avec vos vrais projets |
| `app/competences/page.tsx` | Tableaux `categories[]` et `formations[]` |
| `app/contact/page.tsx` | Tableau `infos[]` avec vos coordonnées |

### 3. Formulaire de contact
Connectez le formulaire à un service gratuit :
- [Formspree](https://formspree.io) — le plus simple
- [EmailJS](https://www.emailjs.com) — sans serveur
- [Web3Forms](https://web3forms.com) — gratuit

Dans `app/contact/page.tsx`, remplacez le `// TODO` dans `handleSubmit`.

---

## 🛠 Stack technique

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- Polices : **Syne** (display) + **JetBrains Mono** (code) + **Inter** (corps)

---

## 📦 Build production

```bash
npm run build
npm start
```

## 🌐 Déploiement sur Vercel (recommandé)

1. Poussez le projet sur GitHub
2. Importez sur [vercel.com](https://vercel.com)
3. Déployé automatiquement en 1 clic ✅
