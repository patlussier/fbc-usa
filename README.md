# ForBetterCommunity USA — site web

Site statique Astro + Tailwind pour `usa.forbettercommunity.org`.
Entité : ForBetterCommunity USA, 501(c)(3), Montana.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Structure

- `src/pages/` — une page par fichier (`index`, `mission`, `our-work`, `governance`, `support`, `contact`)
- `src/content/fieldnotes/` — les articles archivés 2020-2021, un fichier Markdown par article
- `src/layouts/Base.astro` — en-tête, pied de page, métadonnées
- `src/styles/global.css` — palette et typographie (`#0f1115`, `#c8a951`, fond `#faf9f7`)

## Ajouter un article

Créer un fichier dans `src/content/fieldnotes/` :

```markdown
---
title: "Titre de l'article"
date: 2026-09-05
summary: "Une phrase de résumé."
---

Le texte, en paragraphes.
```

## Déploiement (à faire)

Coolify sur le VPS, image Nginx alpine servant `dist/`.
Dockerfile à créer au moment de la bascule :

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN echo "ok" > /usr/share/nginx/html/health
EXPOSE 80
```

Rappel Coolify : passer `portsExposes` à 80, sinon Bad Gateway.
