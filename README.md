# Site web — Emmenez-moi Sàrl

Reproduction fidèle du site de transport de personnes à mobilité réduite, déployée sur Vercel.

Site source de référence : [https://www.transport-emmenez-moi.ch/](https://www.transport-emmenez-moi.ch/)

Dépôt GitHub : [https://github.com/djasiqi/transport-emmenez-moi](https://github.com/djasiqi/transport-emmenez-moi)

## Installation locale

Prérequis : Node.js 20+ et npm.

```bash
npm install
cp .env.example .env.local
```

Renseignez `RESEND_API_KEY` dans `.env.local` (voir section Resend).

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run lint
npm run build
npm start
```

## Variables d’environnement

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Clé API Resend (serveur uniquement) |
| `CONTACT_TO_EMAIL` | Destinataire du formulaire (`info@casa-famiglia.ch`) |
| `NEXT_PUBLIC_SITE_URL` | URL canonique (SEO), optionnelle |

Ne jamais committer `.env` / `.env.local`. Utiliser `.env.example` comme modèle sans secrets.

## Formulaire de contact

Le formulaire envoie un `POST` vers `/api/contact`. Les messages sont transmis via Resend à `info@casa-famiglia.ch`.

### Configuration Resend

1. Créer un compte sur [https://resend.com](https://resend.com)
2. Générer une clé API
3. Ajouter `RESEND_API_KEY` dans `.env.local` (local) et dans les Environment Variables du projet Vercel
4. En production, vérifier un domaine d’envoi dans Resend et adapter l’adresse `from` dans `app/api/contact/route.ts` si nécessaire

Tant qu’aucun domaine n’est vérifié, Resend peut limiter l’envoi (domaine d’essai `onboarding@resend.dev`).

## Déploiement Vercel (`*.vercel.app`)

1. Importer le dépôt `djasiqi/transport-emmenez-moi` dans Vercel
2. Framework : Next.js (détection automatique)
3. Configurer les variables d’environnement (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`)
4. Déployer
5. Vérifier l’URL `*.vercel.app`

**Priorité :** obtenir une URL Vercel fonctionnelle **avant le 19 août 2026** (fin d’hébergement MyWEBSITE / Local Search).

## Domaines personnalisés (après transfert uniquement)

Ne **pas** ajouter prématurément :

- `transport-emmenez-moi.ch`
- `www.transport-emmenez-moi.ch`

Attendre la fin du transfert DomainPrice / SWITCH, puis :

1. Ajouter les domaines dans Vercel → Project → Domains
2. Appliquer les enregistrements DNS exacts affichés par Vercel

Valeurs **indicatives** (à confirmer dans le tableau de bord Vercel) :

```text
@     A       76.76.21.21
www   CNAME   cname.vercel-dns.com
```

## Transfert DomainPrice (étapes génériques)

1. Ouvrir un compte DomainPrice / GoDaddy
2. Lancer le transfert du domaine `.ch`
3. Utiliser le code AuthInfo reçu séparément par email et le saisir directement dans l’interface sécurisée de DomainPrice. Ne jamais enregistrer ce code dans le dépôt Git.
4. Payer le transfert / renouvellement
5. Attendre la confirmation SWITCH
6. Une fois le domaine disponible chez le nouveau registrar, configurer le DNS vers Vercel (voir ci-dessus)

## Coordonnées figées (ne pas modifier)

- Entreprise : Emmenez-moi Sàrl
- Adresse : Route de Chevrens 145, 1247 Anières
- Bureau : 022 512 02 03
- Chauffeur : 079 291 50 37
- Formulaire : info@casa-famiglia.ch

## Pages

- `/` — page d’accueil
- `/mentions-legales`
- `/protection-des-donnees`

Les pages légales portent une mention de validation juridique recommandée.
