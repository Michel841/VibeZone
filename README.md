# 🎉 VibeZone — Site Anti-Ennui

Un site événementiel complet avec espace public et panel d'administration.

## 🗂 Structure des fichiers

```
vibezone/
├── index.html              ← Page d'accueil
├── events.html             ← Liste de tous les événements
├── activities.html         ← Activités & ateliers
├── concerts.html           ← Concerts
├── event-detail.html       ← Détail d'un événement
├── login.html              ← Connexion utilisateur
├── register.html           ← Inscription
├── profile.html            ← Profil utilisateur
├── news.html               ← Fil d'actualites public
├── messages.html            ← messageries utilisateurs
├── style.css               ← Styles globaux
├── js/
│   ├── data.js             ← Données & fonctions utilitaires
│   ├── messaging.js        ← message, broadcast, actuallites
│   └── app.js              ← Animations & nav
└── admin/
    ├── login.html          ← Connexion admin sécurisée
    ├── dashboard.html      ← Tableau de bord admin
    ├── events-admin.html   ← Gestion des événements
    ├── users-admin.html    ← Gestion des utilisateurs
    └── add-event.html      ← Ajouter / modifier un événement
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
