# Guide d'installation WordPress — WPGraphQL + ACF

Ce guide explique comment configurer WordPress pour exposer le contenu via WPGraphQL, afin que le front-end React puisse le consommer.

---

## 1. Mise à jour de WordPress (CRITIQUE)

**WordPress 7.0.2 est vulnérable à CVE-2026-63030 (RCE wp2shell).**

Mettre à jour WordPress en priorité via l'admin WP ou SiteGround.

---

## 2. Plugins à installer

| Plugin | Version minimum | Rôle |
|--------|----------------|------|
| **WPGraphQL** | 1.x | Expose l'API GraphQL |
| **WPGraphQL for ACF** (ou **WPGraphQL**) | — | Expose les champs ACF via GraphQL |
| **Advanced Custom Fields PRO** | 6.x | Crée les types de contenu personnalisés et les champs |

Installer ces 3 plugins via **Plugins > Ajouter** dans l'admin WordPress.

---

## 3. Types de contenu personnalisés (Custom Post Types)

Créer ces CPT via ACF > **Groupes de champs** > **Types de contenu** ou via code (functions.php du child theme) :

### 3.1 Projets (`project`)
- **Slug** : `project`
- **Plural** : `Projets`
- **Singular** : `Projet`
- **Supports** : title, editor, thumbnail, excerpt
- **Taxonomies** : `project_category` (créer aussi cette taxonomie)

### 3.2 Partenaires (`partner`)
- **Slug** : `partner`
- **Plural** : `Partenaires`
- **Singular** : `Partenaire`
- **Supports** : title, thumbnail (pas editor)

### 3.3 Membres de l'équipe (`team_member`)
- **Slug** : `team_member`
- **Plural** : `Membres de l'équipe`
- **Singular** : `Membre de l'équipe`
- **Supports** : title, thumbnail (pas editor)
- **Menu order** : activer (pour le tri)

### 3.4 Valeurs (`value`)
- **Slug** : `value`
- **Plural** : `Valeurs`
- **Singular** : `Valeur`
- **Supports** : title, editor, thumbnail
- **Menu order** : activer

### 3.5 Paliers de don (`donation_tier`)
- **Slug** : `donation_tier`
- **Plural** : `Paliers de don`
- **Singular** : `Palier de don`
- **Supports** : title (pas editor, pas thumbnail)
- **Menu order** : activer

### 3.6 Taxonomie projets (`project_category`)
- **Slug** : `project_category`
- **Labels** : Catégories de projets
- **Post types** : project

---

## 4. Champs ACF (Advanced Custom Fields)

Créer ces groupes de champs dans **ACF > Groupes de champs > Ajouter** :

### 4.1 Groupe : `partnerFields`
- **Position** : Sur le type de contenu `partner`
- **Champs** :
  - `category` (Texte) — ex: "Institutions & entreprises", "Écoles & centres de formation", "Partenaires projets", "Ils nous ont fait confiance"
  - `website` (URL) — site web du partenaire (optionnel)

### 4.2 Groupe : `teamMemberFields`
- **Position** : Sur le type de contenu `team_member`
- **Champs** :
  - `role` (Texte) — ex: "Président", "Directrice", "Trésorier"
  - `region` (Sélection) — Options: `fr` (France), `bj` (Bénin)
  - `order` (Nombre) — ordre d'affichage

### 4.3 Groupe : `valueFields`
- **Position** : Sur le type de contenu `value`
- **Champs** :
  - `order` (Nombre) — ordre d'affichage
  - `description` (Texte long, optionnel) — description courte de la valeur
  - `image` (Image, optionnel) — image spécifique (sinon utiliser l'image à la une)

### 4.4 Groupe : `donationTierFields`
- **Position** : Sur le type de contenu `donation_tier`
- **Champs** :
  - `amount` (Nombre) — montant en euros (ex: 30, 50, 100)
  - `description` (Texte) — ex: "Finance 3 mois de fournitures scolaires"

### 4.5 Groupe : `contactInfoFields`
- **Position** : Sur le type de contenu `page` (page spécifique)
- **Instruction** : Créer une page WP avec le slug `contact-info`
- **Champs** :
  - `email` (Email)
  - `phoneFr` (Texte) — téléphone France
  - `phoneBj` (Texte) — téléphone Bénin
  - `address` (Texte) — adresse postale
  - `latitude` (Nombre, optionnel)
  - `longitude` (Nombre, optionnel)

### 4.6 Groupe : `homePageFields`
- **Position** : Sur le type de contenu `page` (page d'accueil)
- **Instruction** : Créer une page WP avec le slug `accueil`
- **Champs** :
  - `heroNumber` (Texte) — ex: "10"
  - `heroTitle` (Texte long)
  - `heroDescription` (Texte long)
  - `missionText` (Texte long)
  - `stat1Value` (Texte) — ex: "500+"
  - `stat1Label` (Texte) — ex: "De bénéficiaires"
  - `stat2Value` (Texte)
  - `stat2Label` (Texte)
  - `stat3Value` (Texte)
  - `stat3Label` (Texte)
  - `aboutTitle` (Texte)
  - `aboutText` (Texte long)
  - `aboutImage` (Image)
  - `projectsTitle` (Texte)
  - `articlesTitle` (Texte)
  - `partnersTitle` (Texte)
  - `ctaTitle` (Texte)
  - `ctaSubtitle` (Texte long)
  - `ctaImage` (Image)

### 4.7 Groupe : `globalSettingsFields`
- **Position** : Sur le type de contenu `page` (page des paramètres)
- **Instruction** : Créer une page WP avec le slug `parametres-sites`
- **Champs** :
  - `youtubeUrl` (URL)
  - `missionVideoUrl` (URL)
  - `heroTitle` (Texte)
  - `heroDescription` (Texte long)
  - `missionText` (Texte long)
  - `aboutText` (Texte long)
  - `ctaTitle` (Texte)
  - `ctaSubtitle` (Texte long)

---

## 5. Configuration WPGraphQL

### 5.1 Activer le endpoint GraphQL
Après installation de WPGraphQL, l'endpoint est disponible à :
```
https://allianceactionsafrique.com/graphql
```

### 5.2 Exposer les champs ACF
Dans **GraphQL > Settings** (ou **WPGraphQL > Settings**) :
- Activer **"Show in GraphQL"** pour chaque groupe de champs ACF
- Pour chaque groupe, définir le **GraphQL Field Name** (doit correspondre aux noms utilisés dans les requêtes React) :
  - `partnerFields`
  - `teamMemberFields`
  - `valueFields`
  - `donationTierFields`
  - `contactInfoFields`
  - `homePageFields`
  - `globalSettingsFields`

### 5.3 Exposer les Custom Post Types
Pour chaque CPT, activer **"Show in GraphQL"** dans les paramètres ACF ou via code :
- `project` → GraphQL Name: `Project`
- `partner` → GraphQL Name: `Partner`
- `team_member` → GraphQL Name: `TeamMember`
- `value` → GraphQL Name: `Value`
- `donation_tier` → GraphQL Name: `DonationTier`

### 5.4 Exposer les taxonomies
- `project_category` → GraphQL Name: `ProjectCategory`

---

## 6. Pages WP à créer

| Slug | Type | Contenu |
|------|------|---------|
| `accueil` | Page | Page d'accueil avec champs ACF homePageFields |
| `contact-info` | Page | Informations de contact avec champs ACF contactInfoFields |
| `parametres-sites` | Page | Paramètres globaux avec champs ACF globalSettingsFields |

---

## 7. Données à migrer

### Posts (Actualités)
Créer des articles WP normalement (Posts > Ajouter). Le front-end les affichera via `GET_ALL_POSTS`.

### Projets
Créer des projets via le CPT `project`. Remplir :
- Titre
- Extrait
- Contenu
- Image à la une
- Catégorie (project_category)

### Partenaires
Créer des partenaires via le CPT `partner`. Pour chaque partenaire :
- Titre = nom du partenaire
- Image à la une = logo du partenaire
- Champ `category` = catégorie (reprendre les 4 catégories existantes)
- Champ `website` = site web (optionnel)

### Membres de l'équipe
Créer des membres via le CPT `team_member`. Pour chaque membre :
- Titre = nom du membre
- Image à la une = photo (optionnel)
- Champ `role` = rôle (Président, Directrice, etc.)
- Champ `region` = `fr` ou `bj`
- Champ `order` = numéro d'ordre

### Valeurs
Créer les 4 valeurs via le CPT `value` :
- Solidarité
- Engagement
- Coopération
- Éducation
- Champ `order` = 1, 2, 3, 4
- Image à la une = image de la valeur

### Paliers de don
Créer 3 paliers via le CPT `donation_tier` :
- 30 € — Finance 3 mois de fournitures scolaires
- 50 € — Finance 1 mois de formation professionnelle
- 100 € — Finance le matériel pédagogique d'un étudiant

---

## 8. Sécurité

### REST API
Désactiver l'accent REST API si elle n'est pas nécessaire :
```php
// functions.php du child theme
add_filter('rest_enabled', '__return_false');
add_filter('rest_endpoints', function($endpoints) {
    return [];
});
```

### WPGraphQL
Limiter l'accès GraphQL en production :
- Utiliser des **Application Passwords** pour les requêtes authentifiées
- Ou configurer un **JWT token** via le plugin WPGraphQL JWT Authentication

---

## 9. Vérification

Après configuration, tester l'endpoint GraphQL via le **GraphQL IDE** intégré à WPGraphQL :
```
https://allianceactionsafrique.com/wp-admin/admin.php?page=graphql
```

Requête de test :
```graphql
{
  posts(first: 5) {
    nodes {
      title
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  projects(first: 5) {
    nodes {
      title
      slug
    }
  }
  partners(first: 5) {
    nodes {
      title
      partnerFields {
        category
      }
    }
  }
}
```

Si les données apparaissent, le front-end React pourra les consommer.
