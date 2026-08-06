# Site web — Emmenez-moi Sàrl

Site professionnel de transport accompagné pour personnes à mobilité réduite (Genève & Vaud), déployé sur Vercel.

- Production : [https://transport-emmenez-moi.vercel.app](https://transport-emmenez-moi.vercel.app)
- Dépôt : [https://github.com/djasiqi/transport-emmenez-moi](https://github.com/djasiqi/transport-emmenez-moi)

## Installation locale

Prérequis : Node.js 20+ et npm.

```bash
npm install
cp .env.example .env.local
```

Renseignez `RESEND_API_KEY` dans `.env.local`.

## Développement

```bash
npm run dev
```

## Build

```bash
npm run lint
npm run build
```

## Variables d’environnement

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Clé API Resend (serveur uniquement) |
| `CONTACT_TO_EMAIL` | Destinataire principal (`info@casa-famiglia.ch`) |
| `CONTACT_CC_EMAIL` | Copie (`alaoui.khalid@outlook.com`) |
| `CONTACT_FROM_EMAIL` | Expéditeur (`Emmenez-moi Site Web <contact@transport-emmenez-moi.ch>`) |
| `NEXT_PUBLIC_SITE_URL` | URL canonique SEO (optionnelle) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Code meta Google Search Console (optionnel) |

## Référencement Google & IA

Fichiers publics :

| URL | Usage |
| --- | --- |
| `/robots.txt` | Règles crawlers (Google, Bing, GPTBot, ClaudeBot, etc.) |
| `/sitemap.xml` | Plan du site pour Google Search Console |
| `/llms.txt` | Résumé structuré pour assistants / recherche IA |
| `/llms-full.txt` | Fiche détaillée Emmenez-moi + lien LIRIE |

Après propagation DNS du domaine `.ch` :

1. [Google Search Console](https://search.google.com/search-console) → ajouter `https://transport-emmenez-moi.ch`
2. Vérifier la propriété (meta tag → coller le code dans `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` sur Vercel, ou fichier HTML)
3. Soumettre `https://transport-emmenez-moi.ch/sitemap.xml`
4. Demander l’indexation de la page d’accueil

Ne jamais committer `.env` / `.env.local`.

## Formulaire

`POST /api/contact` → Resend → `info@casa-famiglia.ch` (TO) + `alaoui.khalid@outlook.com` (CC).

Expéditeur : `contact@transport-emmenez-moi.ch` (domaine Resend vérifié).

L’email public affiché sur le site reste `info@casa-famiglia.ch`.

Champs : identité, date/heure, adresses, type de trajet, fauteuil, accompagnement, message, consentement protection des données.

L’envoi ne constitue pas une confirmation automatique de transport.

## LIRIE

Le site présente LIRIE comme **plateforme de coordination** distincte (lien externe). Emmenez-moi reste l’entreprise de transport. Aucune donnée du formulaire public n’est transmise à LIRIE dans cette version.

URL centralisée dans `lib/company.ts` (`lirieUrl`). Confirmer l’URL officielle avant toute communication large.

## Pages légales

Les textes de `/mentions-legales` et `/protection-des-donnees` doivent être **validés par l’entreprise ou un conseil juridique**. Ce rappel n’apparaît plus sur le site public.

## Transfert DomainPrice

Utiliser le code AuthInfo reçu séparément par email et le saisir directement dans l’interface sécurisée de DomainPrice. Ne jamais enregistrer ce code dans le dépôt Git.

Ne pas raccorder `transport-emmenez-moi.ch` / `www` avant la fin du transfert SWITCH.

## Coordonnées figées

- Bureau : 022 512 02 03
- Chauffeur : 079 291 50 37
- Email : info@casa-famiglia.ch
- Adresse : Route de Chevrens 145, 1247 Anières
