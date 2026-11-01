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

## Déploiement

En ligne depuis le 2026-09-06 sur `usa.forbettercommunity.org` et `usa2.forbettercommunity.org`.

- Coolify sur le VPS personnel, application `usa-site`, construite depuis la branche `main` avec le `Dockerfile` du dépôt (build Astro, puis Nginx alpine servant `dist/`).
- **Déploiement automatique** : chaque envoi sur `main` reconstruit et redéploie le site. Pour un commit qui ne doit pas déployer (documentation seulement), ajouter `[skip ci]` au message.
- Santé : `/health` répond `ok`, utilisé par le healthcheck Docker (d'où `curl` dans l'image).
- Rappel Coolify : `portsExposes` à 80, sinon Bad Gateway.
