# 🎉 VibeZone — Site Anti-Ennui

Un site événementiel complet avec espace public et panel d'administration.

## 🗂 Structure des fichiers

```
vibezone/
├── index.html             ← Page d'accueil
├── style.css              ← Styles globaux (Syne, dark theme)
├── events.html            ← Liste événements + filtres
├── activities.html        ← Activités / ateliers
├── concerts.html          ← Page concerts
├── event-detail.html      ← Détail événement + photo
├── news.html              ← Fil d'actualités public
├── messages.html          ← Messagerie utilisateurs
├── login.html             ← Connexion
├── register.html          ← Inscription
├── profile.html           ← Profil + avatar
├── README.md              ← Documentation
├── .gitignore             ← Fichiers ignorés par Git
├── js/
│   ├── data.js            ← Données + localStorage + photo événements
│   ├── messaging.js       ← Messages, broadcasts, actualités
│   └── app.js             ← Animations + scroll
└── admin/
    ├── login.html         ← Accès admin sécurisé
    ├── dashboard.html     ← Tableau de bord + stats
    ├── add-event.html     ← Ajout/édition + photo événement
    ├── events-admin.html  ← Gestion événements
    ├── users-admin.html   ← Gestion membres
    ├── news-admin.html    ← Publications actualités
    ├── admin-messages.html← Messages admin + broadcasts
    ├── admin-avatar.css   ← Styles avatar admin
    └── admin-avatar.js    ← Logique photo profil admin
```

## 🚀 Comment utiliser

### Ouvrir le site
Double-clique sur `index.html` ou ouvre-le dans un navigateur.

### Comptes de démonstration

| Type | Email | Mot de passe |
|------|-------|--------------|
| Utilisateur | sophie@example.com | password123 |
| Admin | admin@vibezone.fr | admin2024 |

> **Note**: Tous les comptes utilisateurs de démo fonctionnent avec le mot de passe `password123`.

## ✨ Fonctionnalités

### Côté public
- **Accueil**: Hero animé, catégories, événements vedettes, concerts
- **Événements**: Recherche + filtres par catégorie
- **Activités**: Sport, Art, Danse, Nature, Gaming, Culture
- **Concerts**: Vue grille + liste avec filtres par genre
- **Détail événement**: Description complète, barre de remplissage, réservation
- **Connexion / Inscription**: Formulaires sécurisés avec validation
- **Profil**: Favoris sauvegardés, modifier ses infos, supprimer le compte
- **Message**: Discussion entre membre et admin
- **Actualite**: Recevoir des nouvelles

### Panel Admin (`/admin/login.html`)
- **Dashboard**: Stats globales, derniers événements, derniers membres
- **Gestion événements**: Tableau complet, filtre, recherche, éditer, supprimer
- **Gestion utilisateurs**: Liste, détail modal, supprimer
- **Ajouter un événement**: Formulaire complet avec aperçu en temps réel
- **Actualite**: Publication des nouvelles

## 💾 Stockage

Le site utilise `localStorage` pour :
- Événements (modifiables par l'admin)
- Utilisateurs inscrits
- Session utilisateur courante

Aucun serveur nécessaire — tout fonctionne en local !

## 🎨 Design

- Palette sombre : #0A0A0F base, #FF4D4D accent rouge
- Polices : Bebas Neue (titres) + DM Sans (corps) + Space Mono (labels)
- Animations CSS : blobs flottants, cartes animées, scroll reveal
- Responsive : mobile, tablette, desktop
