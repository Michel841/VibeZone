// ==================== VIBEZONE — DATA ==================== //

const EVENTS_DATA = [
  {
    id: 1,
    title: "Rock'n'Roll Night",
    category: "concert",
    emoji: "🎸",
    color: "#FF4D4D",
    date: "2024-08-15",
    time: "21:00",
    location: "Le Zénith, Paris",
    price: 35,
    description: "Une nuit explosive avec les meilleurs groupes de rock de la scène underground parisienne. Guitares saturées, foule en délire, ambiance garantie.",
    tags: ["Rock", "Live", "Concert"],
    capacity: 2000,
    registered: 1547,
    status: "active"
  },
  {
    id: 2,
    title: "Atelier Street Art",
    category: "art",
    emoji: "🎨",
    color: "#AF52DE",
    date: "2024-08-18",
    time: "14:00",
    location: "Belleville, Paris",
    price: 0,
    description: "Venez créer votre chef-d'œuvre sur les murs de Belleville. Peinture, spray, techniques mixtes — tous niveaux acceptés. Matériel fourni.",
    tags: ["Art", "Street Art", "Gratuit"],
    capacity: 30,
    registered: 22,
    status: "active"
  },
  {
    id: 3,
    title: "Beach Volleyball Tour",
    category: "sport",
    emoji: "🏐",
    color: "#FF9500",
    date: "2024-08-20",
    time: "10:00",
    location: "Plage de la Baule",
    price: 15,
    description: "Tournoi de beach-volley ouvert à tous les niveaux. Prizes, ambiance festive et DJ set en fin de journée sur la plage.",
    tags: ["Sport", "Beach", "Tournoi"],
    capacity: 120,
    registered: 88,
    status: "active"
  },
  {
    id: 4,
    title: "Food & Cocktail Festival",
    category: "food",
    emoji: "🍹",
    color: "#34C759",
    date: "2024-08-22",
    time: "17:00",
    location: "Parc de la Villette, Paris",
    price: 12,
    description: "30 chefs et mixologistes vous ouvrent leurs créations. Street food du monde entier, cocktails signature, ateliers culinaires et musique live.",
    tags: ["Food", "Festival", "Cocktails"],
    capacity: 5000,
    registered: 3210,
    status: "active"
  },
  {
    id: 5,
    title: "Nuit Électro Underground",
    category: "concert",
    emoji: "🎧",
    color: "#007AFF",
    date: "2024-08-23",
    time: "23:00",
    location: "Rex Club, Paris",
    price: 20,
    description: "Trois DJs internationaux pour une nuit techno jusqu'à l'aube. Système son Funktion-One, mapping vidéo, lasers.",
    tags: ["Techno", "Club", "Underground"],
    capacity: 800,
    registered: 756,
    status: "active"
  },
  {
    id: 6,
    title: "Yoga au Lever du Soleil",
    category: "sport",
    emoji: "🧘",
    color: "#FF9500",
    date: "2024-08-25",
    time: "06:30",
    location: "Butte Montmartre, Paris",
    price: 0,
    description: "Session de yoga flow avec vue panoramique sur Paris au lever du soleil. Tapis recommandé. Niveau débutant bienvenu.",
    tags: ["Yoga", "Bien-être", "Gratuit"],
    capacity: 50,
    registered: 43,
    status: "active"
  },
  {
    id: 7,
    title: "Hackathon IA 2024",
    category: "tech",
    emoji: "💻",
    color: "#007AFF",
    date: "2024-08-26",
    time: "09:00",
    location: "Station F, Paris",
    price: 0,
    description: "48h pour construire le prochain outil IA révolutionnaire. Équipes de 3-5 personnes, mentorat de pros, prix de 10 000€.",
    tags: ["Tech", "IA", "Hackathon"],
    capacity: 200,
    registered: 198,
    status: "active"
  },
  {
    id: 8,
    title: "Randonnée Nocturne",
    category: "nature",
    emoji: "🌙",
    color: "#30D158",
    date: "2024-08-27",
    time: "20:00",
    location: "Forêt de Fontainebleau",
    price: 8,
    description: "Exploration nocturne de la forêt de Fontainebleau avec guide expert. Lampes frontales fournies. Pique-nique sous les étoiles à mi-parcours.",
    tags: ["Nature", "Randonnée", "Nocturne"],
    capacity: 40,
    registered: 31,
    status: "active"
  },
  {
    id: 9,
    title: "Jazz & Apéro",
    category: "concert",
    emoji: "🎺",
    color: "#AF52DE",
    date: "2024-09-01",
    time: "19:00",
    location: "Café de Flore, Paris",
    price: 10,
    description: "Un quartet de jazz manouche pour accompagner votre apéritif dans ce lieu mythique parisien. Entrée libre sur réservation.",
    tags: ["Jazz", "Apéro", "Live"],
    capacity: 80,
    registered: 45,
    status: "active"
  },
  {
    id: 10,
    title: "Escape Game Géant",
    category: "gaming",
    emoji: "🔐",
    color: "#FF4D4D",
    date: "2024-09-03",
    time: "15:00",
    location: "Palais des Sports, Lyon",
    price: 25,
    description: "Le plus grand escape game jamais organisé en France. 500 joueurs simultanés, 10 salles interconnectées, scénario de 3h.",
    tags: ["Gaming", "Escape", "Teamwork"],
    capacity: 500,
    registered: 234,
    status: "active"
  },
  {
    id: 11,
    title: "Cinéma Plein Air",
    category: "culture",
    emoji: "🎬",
    color: "#FF9500",
    date: "2024-09-05",
    time: "21:30",
    location: "Parc des Buttes-Chaumont",
    price: 0,
    description: "Projection du classique Pulp Fiction sur grand écran sous les étoiles. Apportez vos coussins, plaid et pop-corn maison.",
    tags: ["Cinéma", "Gratuit", "Plein Air"],
    capacity: 300,
    registered: 287,
    status: "active"
  },
  {
    id: 12,
    title: "Cours de Salsa Débutants",
    category: "dance",
    emoji: "💃",
    color: "#FF4D4D",
    date: "2024-09-07",
    time: "18:00",
    location: "Studio Ritmo, Bordeaux",
    price: 15,
    description: "Initiez-vous à la salsa cubaine avec un professeur certifié. Aucun prérequis, venez seul(e) ou en duo. 90 minutes de cours + pratique libre.",
    tags: ["Danse", "Salsa", "Débutants"],
    capacity: 24,
    registered: 18,
    status: "active"
  }
];

const USERS_DATA = [
  { id: 1, name: "Sophie Martin", email: "sophie@example.com", role: "user", joined: "2024-01-15", saved: [1,3,5], status: "active" },
  { id: 2, name: "Thomas Dupont", email: "thomas@example.com", role: "user", joined: "2024-02-20", saved: [2,4], status: "active" },
  { id: 3, name: "Léa Bernard", email: "lea@example.com", role: "user", joined: "2024-03-10", saved: [1,7,8], status: "active" },
  { id: 4, name: "Marc Leblanc", email: "marc@example.com", role: "admin", joined: "2024-01-01", saved: [], status: "active" },
  { id: 5, name: "Julie Chen", email: "julie@example.com", role: "user", joined: "2024-04-05", saved: [4,6,11], status: "active" },
  { id: 6, name: "Antoine Rousseau", email: "antoine@example.com", role: "user", joined: "2024-05-12", saved: [9,12], status: "inactive" },
  { id: 7, name: "Camille Moreau", email: "camille@example.com", role: "user", joined: "2024-06-18", saved: [3,5,10], status: "active" },
  { id: 8, name: "Hugo Petit", email: "hugo@example.com", role: "user", joined: "2024-07-01", saved: [1,2], status: "active" }
];

// ============ HELPERS ============

function getAllEvents() {
  const stored = localStorage.getItem('vz_events');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed.length > 0) return parsed;
    } catch(e) {}
  }
  return [...EVENTS_DATA];
}

function saveEvents(events) {
  localStorage.setItem('vz_events', JSON.stringify(events));
}

function getAllUsers() {
  const stored = localStorage.getItem('vz_users');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return [...USERS_DATA];
}

function saveUsers(users) {
  localStorage.setItem('vz_users', JSON.stringify(users));
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function getCategoryLabel(cat) {
  const map = {
    concert: 'Concert', art: 'Art & Créa', sport: 'Sport', food: 'Food & Boissons',
    tech: 'Tech', nature: 'Nature', gaming: 'Gaming', culture: 'Culture', dance: 'Danse'
  };
  return map[cat] || cat;
}

function renderEventCard(ev) {
  const bg = ev.color ? `background: ${ev.color}22; border-bottom: 3px solid ${ev.color}` : 'background: var(--surface2)';
  return `
    <div class="event-card" onclick="window.location='event-detail.html?id=${ev.id}'">
      <div class="event-thumb" style="${bg}">${ev.emoji}</div>
      <div class="event-body">
        <div class="event-cat">${getCategoryLabel(ev.category)}</div>
        <div class="event-title">${ev.title}</div>
        <div class="event-meta">
          <span>📅 ${formatDate(ev.date)}</span>
          <span>⏰ ${ev.time}</span>
          <span>📍 ${ev.location.split(',')[0]}</span>
        </div>
        <div class="event-footer">
          <div class="event-price ${ev.price === 0 ? 'free' : ''}">${ev.price === 0 ? 'GRATUIT' : ev.price + '€'}</div>
          <button class="btn-primary" style="padding:9px 18px;font-size:13px" onclick="event.stopPropagation();saveEvent(${ev.id})">♡ Sauvegarder</button>
        </div>
      </div>
    </div>
  `;
}

function renderConcertRow(ev) {
  return `
    <div class="concert-row" onclick="window.location='event-detail.html?id=${ev.id}'" style="cursor:pointer">
      <div class="concert-emoji">${ev.emoji}</div>
      <div class="concert-info">
        <div class="concert-name">${ev.title}</div>
        <div class="concert-detail">📍 ${ev.location}</div>
      </div>
      <div class="concert-date">📅 ${formatDate(ev.date)}<br>${ev.time}</div>
      <div class="concert-price-tag">${ev.price === 0 ? 'FREE' : ev.price + '€'}</div>
    </div>
  `;
}

function saveEvent(id) {
  const user = getCurrentUser();
  if (!user) { showToast('Connecte-toi pour sauvegarder !', 'error'); return; }
  
  const users = getAllUsers();
  const idx = users.findIndex(u => u.id === user.id);
  if (idx !== -1) {
    if (!users[idx].saved.includes(id)) {
      users[idx].saved.push(id);
      saveUsers(users);
      localStorage.setItem('vz_current_user', JSON.stringify(users[idx]));
      showToast('✓ Événement sauvegardé !', 'success');
    } else {
      showToast('Déjà dans tes favoris !', 'error');
    }
  }
}

function showToast(msg, type = 'success') {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = `toast ${type} show`;
  setTimeout(() => t.classList.remove('show'), 2800);
}

function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('vz_current_user')); } catch(e) { return null; }
}

function isAdmin() {
  const u = getCurrentUser();
  return u && u.role === 'admin';
}

function logout() {
  localStorage.removeItem('vz_current_user');
  window.location.href = '/vibezone/index.html';
}

function initNav() {
  const user = getCurrentUser();

  const btnLogin    = document.getElementById('btn-login');
  const btnLogout   = document.getElementById('btn-logout');
  const navProfile  = document.getElementById('nav-profile');
  const navNews     = document.getElementById('nav-news');
  const navMessages = document.getElementById('nav-messages');
  const navBadge    = document.getElementById('nav-unread-badge');

  if (user) {
    if (btnLogin)    btnLogin.style.display    = 'none';
    if (btnLogout)   btnLogout.style.display   = 'inline-block';
    if (navProfile)  navProfile.style.display  = 'inline';
    if (navNews)     navNews.style.display     = 'inline';
    if (navMessages) navMessages.style.display = 'inline';
    if (navBadge && typeof getUnreadCount === 'function') {
      const n = getUnreadCount(user.id);
      if (n > 0) { navBadge.textContent = n; navBadge.style.display = 'inline'; }
      else navBadge.style.display = 'none';
    }
  } else {
    if (btnLogin)    btnLogin.style.display    = 'inline-block';
    if (btnLogout)   btnLogout.style.display   = 'none';
    if (navProfile)  navProfile.style.display  = 'none';
    if (navNews)     navNews.style.display     = 'none';
    if (navMessages) navMessages.style.display = 'none';
    if (navBadge)    navBadge.style.display    = 'none';
  }
}

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('mobile-open');
}

// Init on load
document.addEventListener('DOMContentLoaded', initNav);
