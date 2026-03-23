// ==================== VIBEZONE — MESSAGES & NEWS DATA ==================== //

// ── Demo seed (runs once, fills localStorage with sample conversations) ──
function seedDemoData() {
  if (localStorage.getItem('vz_demo_seeded')) return;

  const now = Date.now();
  const day = 86400000;

  // Helper to build a message object
  function mk(senderId, senderName, text, msAgo, readBy) {
    return { id: now - msAgo, senderId, senderName, text, ts: new Date(now - msAgo).toISOString(), read: readBy };
  }

  // Users present in demo data
  // id:1 Sophie, id:2 Thomas, id:3 Léa, id:4 Marc, id:5 Julie, id:7 Camille, id:8 Hugo
  // id:99 Admin

  const CONVS = [
    // Sophie (1) ↔ Admin (99)
    {
      id: '1_99',
      participants: [1, 99],
      participantNames: { 1: 'Sophie Martin', 99: 'Admin VibeZone' },
      messages: [
        mk(99,'Admin VibeZone', 'Salut Sophie ! Bienvenue sur VibeZone 🎉 Tu trouveras plein d\'activités sympas cette semaine.', day*5, [1,99]),
        mk(1, 'Sophie Martin',  'Merci ! J\'ai vu le concert Rock\'n\'Roll Night, c\'est encore disponible ?', day*4+3600000, [1,99]),
        mk(99,'Admin VibeZone', 'Oui, il reste encore des places ! Tu peux réserver directement depuis la page événement 🎸', day*4, [1,99]),
        mk(1, 'Sophie Martin',  'Super, je viens avec une amie. Y\'a-t-il des réductions groupe ?', day*3+7200000, [1,99]),
        mk(99,'Admin VibeZone', 'On a une promo -10% pour les duos ce weekend, utilise le code VIBE2DUO au moment du paiement 🤙', day*3, [1,99]),
        mk(1, 'Sophie Martin',  'Parfait merci beaucoup !!', day*2+3600000, [1,99]),
        mk(99,'Admin VibeZone', 'Avec plaisir Sophie ! Profites-en bien 😄', day*2, [1,99]),
      ]
    },
    // Thomas (2) ↔ Léa (3)
    {
      id: '2_3',
      participants: [2, 3],
      participantNames: { 2: 'Thomas Dupont', 3: 'Léa Bernard' },
      messages: [
        mk(2,'Thomas Dupont','Hey Léa, tu vas au hackathon IA demain ?', day*3, [2,3]),
        mk(3,'Léa Bernard',  'Oui ! Je suis en équipe avec deux autres dev. Et toi ?', day*3-1800000, [2,3]),
        mk(2,'Thomas Dupont','Je cherche encore une équipe... vous pouvez me prendre ? 😅', day*2+7200000, [2,3]),
        mk(3,'Léa Bernard',  'Haha bien sûr ! On se retrouve à 9h à Station F ? 💻', day*2+3600000, [2,3]),
        mk(2,'Thomas Dupont','Top ! Je serai là. On travaille sur quoi comme sujet ?', day*2, [2,3]),
        mk(3,'Léa Bernard',  'On a une idée autour d\'un assistant IA pour les événements culturels... assez meta non ? 😄', day*1+7200000, [2,3]),
        mk(2,'Thomas Dupont','Haha carrément ! J\'ai justement des idées là-dessus. À demain 🚀', day*1+3600000, [2,3]),
        mk(3,'Léa Bernard',  'À demain ! T\'apportes du café ☕', day*1, [2,3]),
      ]
    },
    // Julie (5) ↔ Sophie (1)
    {
      id: '1_5',
      participants: [1, 5],
      participantNames: { 1: 'Sophie Martin', 5: 'Julie Chen' },
      messages: [
        mk(5,'Julie Chen',   'Sophie ! T\'as vu le Food Festival samedi ? 🍹', day*4, [1,5]),
        mk(1,'Sophie Martin','Oui j\'adore l\'idée ! Tu y vas ?', day*4-3600000, [1,5]),
        mk(5,'Julie Chen',   'Je prévois d\'y aller vers 18h. On se rejoint là-bas ?', day*3+7200000, [1,5]),
        mk(1,'Sophie Martin','Avec plaisir ! Je ramène Thomas si ça te dérange pas 😊', day*3, [1,5]),
        mk(5,'Julie Chen',   'Bien sûr ! Plus on est de fous... 🎉', day*2, [1,5]),
        mk(1,'Sophie Martin','Super ! On se retrouve à l\'entrée du parc à 18h alors', 3600000*5, [1,5]),
        mk(5,'Julie Chen',   'C\'est noté 📍 Hâte !!', 3600000*2, [1,5]),
      ]
    },
    // Hugo (8) ↔ Admin (99)
    {
      id: '8_99',
      participants: [8, 99],
      participantNames: { 8: 'Hugo Petit', 99: 'Admin VibeZone' },
      messages: [
        mk(8,'Hugo Petit',    'Bonjour, comment puis-je proposer une activité sur la plateforme ?', day*6, [8,99]),
        mk(99,'Admin VibeZone','Bonjour Hugo ! Tu peux nous envoyer ta proposition par email à contact@vibezone.fr avec les détails 📩', day*5+3600000, [8,99]),
        mk(8,'Hugo Petit',    'Super merci ! Je donne des cours de guitare, ça pourrait intéresser des membres ?', day*5, [8,99]),
        mk(99,'Admin VibeZone','Absolument ! Les ateliers musicaux sont très populaires. Envoie nous ça et on en discute 🎸', day*4, [8,99]),
        mk(8,'Hugo Petit',    'Email envoyé ! J\'espère qu\'on pourra s\'organiser rapidement.', day*3, [8,99]),
        mk(99,'Admin VibeZone','Reçu ✅ On revient vers toi cette semaine. Merci de ta motivation !', day*2, [8,99]),
      ]
    },
    // Camille (7) ↔ Thomas (2)
    {
      id: '2_7',
      participants: [2, 7],
      participantNames: { 2: 'Thomas Dupont', 7: 'Camille Moreau' },
      messages: [
        mk(7,'Camille Moreau','Thomas ! T\'étais au concert électro hier soir ?', day*2, [2,7]),
        mk(2,'Thomas Dupont', 'Ouiii c\'était dingue 🔥 Le système son du Rex Club c\'est incroyable', day*2-1800000, [2,7]),
        mk(7,'Camille Moreau','J\'ai raté ça... prochain concert tu me préviens d\'avance ok ? 😭', day*1+3600000, [2,7]),
        mk(2,'Thomas Dupont', 'Promis ! T\'as vu qu\'il y a le Jazz & Apéro samedi prochain ?', day*1, [2,7]),
        mk(7,'Camille Moreau','Non ! C\'est où ?', 3600000*8, [2,7]),
        mk(2,'Thomas Dupont', 'Café de Flore Paris — 19h. Je prends deux places ?', 3600000*4, [7]), // unread by Camille
        mk(7,'Camille Moreau','Oui carrément vas-y ! Je te rembourse ce soir 🙏', 3600000*2, [7]),
      ]
    },
    // Sophie (1) ↔ Thomas (2)
    {
      id: '1_2',
      participants: [1, 2],
      participantNames: { 1: 'Sophie Martin', 2: 'Thomas Dupont' },
      messages: [
        mk(1,'Sophie Martin','Thomas, Léa m\'a dit que tu rejoins leur team pour le hackathon ?', day*2+3600000, [1,2]),
        mk(2,'Thomas Dupont','Oui ! C\'est validé, on est une super équipe maintenant 💪', day*2, [1,2]),
        mk(1,'Sophie Martin','Top ! Vous allez gagner j\'en suis sûre 🏆', day*1+7200000, [1,2]),
        mk(2,'Thomas Dupont','Croise les doigts haha. Toi tu fais quoi ce weekend ?', day*1, [1,2]),
        mk(1,'Sophie Martin','Food Festival avec Julie ! Tu viens ?', 3600000*6, [1,2]),
        mk(2,'Thomas Dupont','Peut-être samedi soir oui, je vois si j\'ai fini avec le hack 🤔', 3600000*1, [2]), // unread by Sophie
      ]
    },
  ];

  // Demo broadcasts
  const BCS = [
    {
      id: now - day*7,
      senderId: 99,
      senderName: 'Admin VibeZone',
      subject: '🎉 Bienvenue sur VibeZone !',
      text: 'Bonjour à tous les membres !\n\nNous sommes ravis de vous accueillir sur VibeZone, la plateforme qui tue l\'ennui !\n\nChaque semaine, de nouveaux événements, concerts et activités sont ajoutés. N\'oubliez pas de sauvegarder vos favoris et d\'activer les notifications pour ne rien manquer.\n\nÀ très bientôt pour plein d\'aventures ! 🚀\n\nL\'équipe VibeZone',
      ts: new Date(now - day*7).toISOString()
    },
    {
      id: now - day*3,
      senderId: 99,
      senderName: 'Admin VibeZone',
      subject: '🎸 Programme spécial Août — Ne ratez rien !',
      text: 'Hey la communauté !\n\nLe mois d\'août est chargé et on a concocté un programme de feu :\n\n• 15 Août — Rock\'n\'Roll Night au Zénith 🎸\n• 20 Août — Beach Volleyball à La Baule 🏐\n• 22 Août — Food & Cocktail Festival à La Villette 🍹\n• 23 Août — Nuit Électro Underground au Rex Club 🎧\n• 27 Août — Randonnée Nocturne en forêt 🌙\n\nLes places partent vite, réservez maintenant !\n\nBonne semaine à tous 💪',
      ts: new Date(now - day*3).toISOString()
    },
    {
      id: now - day*1,
      senderId: 99,
      senderName: 'Admin VibeZone',
      subject: '⚡ Nouveau : Cours de Salsa disponibles !',
      text: 'Bonne nouvelle !\n\nOn vient d\'ajouter des cours de salsa pour débutants à Bordeaux ! Que vous veniez seul(e) ou en duo, c\'est l\'occasion parfaite de découvrir une nouvelle passion et de rencontrer du monde.\n\n📅 Samedi 7 Septembre à 18h\n📍 Studio Ritmo, Bordeaux\n💰 15€ seulement\n\nLes places sont limitées à 24 participants — foncez réserver !\n\nÀ bientôt sur la piste 💃🕺',
      ts: new Date(now - day*1).toISOString()
    },
  ];

  // Demo news
  const NEWS = [
    {
      id: now - day*10,
      authorId: 99, authorName: 'Admin VibeZone',
      title: '🎉 VibeZone est en ligne !',
      body: 'Après des mois de travail, VibeZone ouvre officiellement ses portes !\n\nNotre mission : vous aider à trouver des activités, des concerts et des événements près de chez vous, et rencontrer des gens partageant les mêmes passions.\n\nInscrivez-vous gratuitement et explorez le programme de la semaine !',
      category: 'general', emoji: '🎉', pinned: true, ts: new Date(now - day*10).toISOString(), likes: 24, likedBy: [1,2,3,5,7]
    },
    {
      id: now - day*5,
      authorId: 99, authorName: 'Admin VibeZone',
      title: '🎸 Rock\'n\'Roll Night — Dernières places !',
      body: 'Attention ! Il ne reste que 50 places pour le Rock\'n\'Roll Night du 15 Août au Zénith de Paris.\n\nTrois groupes de la scène underground, system son immersif, bière artisanale — une soirée qu\'on n\'oubliera pas de sitôt.\n\nRéservez MAINTENANT avant qu\'il ne soit trop tard 🔥',
      category: 'concert', emoji: '🎸', pinned: false, ts: new Date(now - day*5).toISOString(), likes: 18, likedBy: [1,3,8]
    },
    {
      id: now - day*3,
      authorId: 99, authorName: 'Admin VibeZone',
      title: '⚡ Hackathon IA — Inscriptions ouvertes',
      body: 'Le plus grand hackathon IA de Paris aura lieu les 26-27 Août à Station F !\n\n48h pour créer un outil révolutionnaire, des mentors de haut niveau, et un prize de 10 000€ pour l\'équipe gagnante.\n\nFormez vos équipes de 3 à 5 personnes et inscrivez-vous dès maintenant — les places se remplissent très vite !',
      category: 'event', emoji: '💻', pinned: false, ts: new Date(now - day*3).toISOString(), likes: 12, likedBy: [2,3]
    },
    {
      id: now - day*1,
      authorId: 99, authorName: 'Admin VibeZone',
      title: '🎁 Promo : -20% sur tous les ateliers ce weekend',
      body: 'Ce weekend uniquement, profitez de 20% de réduction sur tous nos ateliers créatifs !\n\nAtelier Street Art, cours de danse, yoga au lever du soleil... Utilisez le code VIBEWKND lors de la réservation.\n\nOffre valable samedi et dimanche uniquement. Ne la ratez pas ! 🙌',
      category: 'promo', emoji: '🎁', pinned: false, ts: new Date(now - day*1).toISOString(), likes: 31, likedBy: [1,2,5,7,8]
    },
  ];

  saveConversations(CONVS);
  saveBroadcasts(BCS);
  saveNews(NEWS);
  localStorage.setItem('vz_demo_seeded', '1');
}

// ── Messages ──────────────────────────────────────────────────────────────
// Structure d'une conversation : { id, participants: [userId, userId], messages: [{...}] }
// Structure d'un message       : { id, senderId, senderName, text, ts, read: [userId] }
// Broadcast (admin→tous)       : stored under key 'vz_broadcasts'

function getConversations() {
  try { return JSON.parse(localStorage.getItem('vz_conversations') || '[]'); } catch { return []; }
}
function saveConversations(list) { localStorage.setItem('vz_conversations', JSON.stringify(list)); }

function getConvId(uid1, uid2) {
  return [uid1, uid2].sort((a,b)=>a-b).join('_');
}

function getConversation(uid1, uid2) {
  const convs = getConversations();
  const cid = getConvId(uid1, uid2);
  return convs.find(c => c.id === cid) || null;
}

function sendMessage(fromUser, toUser, text) {
  if (!text.trim()) return null;
  const convs = getConversations();
  const cid = getConvId(fromUser.id, toUser.id);
  let conv = convs.find(c => c.id === cid);
  const msg = {
    id: Date.now(),
    senderId: fromUser.id,
    senderName: fromUser.name,
    text: text.trim(),
    ts: new Date().toISOString(),
    read: [fromUser.id]
  };
  if (!conv) {
    conv = { id: cid, participants: [fromUser.id, toUser.id], participantNames: { [fromUser.id]: fromUser.name, [toUser.id]: toUser.name }, messages: [] };
    convs.push(conv);
  }
  conv.messages.push(msg);
  // keep last 200 messages per conv
  if (conv.messages.length > 200) conv.messages = conv.messages.slice(-200);
  saveConversations(convs);
  return msg;
}

function markConvRead(uid1, uid2, readerUid) {
  const convs = getConversations();
  const cid = getConvId(uid1, uid2);
  const conv = convs.find(c => c.id === cid);
  if (!conv) return;
  conv.messages.forEach(m => { if (!m.read.includes(readerUid)) m.read.push(readerUid); });
  saveConversations(convs);
}

function getUnreadCount(myUid) {
  const convs = getConversations();
  let total = 0;
  convs.forEach(c => {
    if (!c.participants.includes(myUid)) return;
    c.messages.forEach(m => { if (m.senderId !== myUid && !m.read.includes(myUid)) total++; });
  });
  // also count unread broadcasts
  const bcs = getBroadcasts();
  const readBc = JSON.parse(localStorage.getItem('vz_read_broadcasts_' + myUid) || '[]');
  total += bcs.filter(b => !readBc.includes(b.id)).length;
  return total;
}

function getMyConversations(myUid) {
  return getConversations().filter(c => c.participants.includes(myUid));
}

// ── Broadcasts (admin → tous) ────────────────────────────────────────────
function getBroadcasts() {
  try { return JSON.parse(localStorage.getItem('vz_broadcasts') || '[]'); } catch { return []; }
}
function saveBroadcasts(list) { localStorage.setItem('vz_broadcasts', JSON.stringify(list)); }

function sendBroadcast(adminUser, text, subject) {
  const bc = {
    id: Date.now(),
    senderId: adminUser.id,
    senderName: adminUser.name,
    subject: subject || 'Message de l\'équipe VibeZone',
    text: text.trim(),
    ts: new Date().toISOString()
  };
  const list = getBroadcasts();
  list.unshift(bc);
  saveBroadcasts(list);
  return bc;
}

function markBroadcastRead(bcId, uid) {
  const key = 'vz_read_broadcasts_' + uid;
  const read = JSON.parse(localStorage.getItem(key) || '[]');
  if (!read.includes(bcId)) { read.push(bcId); localStorage.setItem(key, JSON.stringify(read)); }
}

function isBroadcastRead(bcId, uid) {
  const read = JSON.parse(localStorage.getItem('vz_read_broadcasts_' + uid) || '[]');
  return read.includes(bcId);
}

// ── News (actualités admin) ──────────────────────────────────────────────
function getNews() {
  try { return JSON.parse(localStorage.getItem('vz_news') || '[]'); } catch { return []; }
}
function saveNews(list) { localStorage.setItem('vz_news', JSON.stringify(list)); }

function publishNews(adminUser, { title, body, category, emoji, pinned }) {
  const post = {
    id: Date.now(),
    authorId: adminUser.id,
    authorName: adminUser.name,
    title: title.trim(),
    body: body.trim(),
    category: category || 'general',
    emoji: emoji || '📢',
    pinned: !!pinned,
    ts: new Date().toISOString(),
    likes: 0,
    likedBy: []
  };
  const list = getNews();
  list.unshift(post);
  saveNews(list);
  return post;
}

function deleteNews(id) {
  saveNews(getNews().filter(n => n.id !== id));
}

function likeNews(postId, uid) {
  const list = getNews();
  const post = list.find(n => n.id === postId);
  if (!post) return;
  if (post.likedBy.includes(uid)) {
    post.likedBy = post.likedBy.filter(u => u !== uid);
    post.likes = post.likedBy.length;
  } else {
    post.likedBy.push(uid);
    post.likes = post.likedBy.length;
  }
  saveNews(list);
  return post;
}

// ── Time helpers ─────────────────────────────────────────────────────────
function timeAgo(isoStr) {
  const diff = (Date.now() - new Date(isoStr).getTime()) / 1000;
  if (diff < 60) return 'À l\'instant';
  if (diff < 3600) return Math.floor(diff/60) + ' min';
  if (diff < 86400) return Math.floor(diff/3600) + 'h';
  if (diff < 604800) return Math.floor(diff/86400) + 'j';
  return new Date(isoStr).toLocaleDateString('fr-FR', {day:'numeric',month:'short'});
}

// ── Get user by id (searches all sources) ───────────────────────────────
function getUserById(id) {
  const all = [
    ...getAllUsers(),
    ...JSON.parse(localStorage.getItem('vz_registered') || '[]'),
    { id: 99, name: 'Admin VibeZone', email: 'admin@vibezone.fr', role: 'admin' }
  ];
  return all.find(u => u.id === id) || null;
}

function getAllMembers() {
  const base = getAllUsers();
  const reg  = JSON.parse(localStorage.getItem('vz_registered') || '[]');
  const merged = [...base, ...reg.filter(r => !base.find(b => b.id === r.id))];
  return merged;
}
