// ── admin-avatar.js — shared avatar logic for all admin pages ──

(function () {
  // ── Helpers ──────────────────────────────────────────────────
  function adminAvatarKey(u) { return 'vz_avatar_' + u.id; }
  function getAdminAvatar(u) { return localStorage.getItem(adminAvatarKey(u)) || null; }

  function saveAdminAvatar(u, dataUrl) {
    localStorage.setItem(adminAvatarKey(u), dataUrl);
    u.avatar = dataUrl;
    localStorage.setItem('vz_current_user', JSON.stringify(u));
  }

  function deleteAdminAvatar(u) {
    localStorage.removeItem(adminAvatarKey(u));
    u.avatar = null;
    localStorage.setItem('vz_current_user', JSON.stringify(u));
  }

  // ── Build avatar element ──────────────────────────────────────
  function buildEl(u, size) {
    const url = getAdminAvatar(u);
    if (url) {
      const img = document.createElement('img');
      img.src = url;
      img.className = 'admin-avatar';
      img.style.cssText = `width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;`;
      return img;
    }
    const initials = u.name ? u.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'A';
    const div = document.createElement('div');
    div.className = 'admin-avatar';
    div.style.cssText = `width:${size}px;height:${size}px;font-size:${Math.round(size * .34)}px;`;
    div.textContent = initials;
    return div;
  }

  function refreshSidebarAvatar(u) {
    const wrap = document.getElementById('admin-av-wrap');
    if (!wrap) return;
    wrap.querySelectorAll('.admin-avatar, img.admin-avatar').forEach(el => el.remove());
    wrap.prepend(buildEl(u, 42));
  }

  // ── Crop engine ───────────────────────────────────────────────
  const CSIZE = 240;
  let _img = null, _drag = null, _off = { x: 0, y: 0 };

  function openAdminCrop(file, u) {
    const r = new FileReader();
    r.onload = e => {
      _img = new Image();
      _img.onload = () => {
        _off = { x: 0, y: 0 };
        document.getElementById('admin-crop-zoom').value = 1;
        document.getElementById('admin-crop-rotate').value = 0;
        document.getElementById('admin-crop-overlay').classList.add('open');
        drawAdminCrop();
      };
      _img.src = e.target.result;
    };
    r.readAsDataURL(file);

    // Wire confirm to this user
    document.getElementById('admin-crop-confirm').onclick = () => confirmAdminCrop(u);
  }

  function drawAdminCrop() {
    const canvas = document.getElementById('admin-crop-canvas');
    if (!canvas || !_img) return;
    const ctx = canvas.getContext('2d');
    const zoom = parseFloat(document.getElementById('admin-crop-zoom').value);
    const rot  = parseFloat(document.getElementById('admin-crop-rotate').value) * Math.PI / 180;
    ctx.clearRect(0, 0, CSIZE, CSIZE);
    ctx.save();
    ctx.translate(CSIZE / 2 + _off.x, CSIZE / 2 + _off.y);
    ctx.rotate(rot);
    ctx.scale(zoom, zoom);
    const s = Math.min(CSIZE / _img.naturalWidth, CSIZE / _img.naturalHeight);
    ctx.drawImage(_img, -_img.naturalWidth * s / 2, -_img.naturalHeight * s / 2, _img.naturalWidth * s, _img.naturalHeight * s);
    ctx.restore();
  }

  function confirmAdminCrop(u) {
    const src = document.getElementById('admin-crop-canvas');
    const out = document.createElement('canvas');
    out.width = out.height = CSIZE;
    const ctx = out.getContext('2d');
    ctx.beginPath(); ctx.arc(CSIZE / 2, CSIZE / 2, CSIZE / 2, 0, Math.PI * 2); ctx.clip();
    ctx.drawImage(src, 0, 0);
    saveAdminAvatar(u, out.toDataURL('image/jpeg', 0.88));
    document.getElementById('admin-crop-overlay').classList.remove('open');
    refreshSidebarAvatar(u);
    if (typeof showToast === 'function') showToast('✓ Photo de profil mise à jour !', 'success');
  }

  // ── Inject HTML ───────────────────────────────────────────────
  function injectCropModal() {
    if (document.getElementById('admin-crop-overlay')) return;
    const html = `
      <input type="file" id="admin-avatar-file" accept="image/*" style="display:none"/>
      <div class="admin-crop-overlay" id="admin-crop-overlay">
        <div class="admin-crop-box">
          <h3>📸 Photo de profil</h3>
          <div class="admin-crop-circle" id="admin-crop-circle">
            <canvas id="admin-crop-canvas" width="${CSIZE}" height="${CSIZE}"></canvas>
          </div>
          <div class="admin-crop-controls">
            <div class="admin-ctrl-row">
              <label>Zoom</label>
              <input type="range" id="admin-crop-zoom" min="1" max="4" step="0.01" value="1" oninput="drawAdminCrop()"/>
            </div>
            <div class="admin-ctrl-row">
              <label>Rotation</label>
              <input type="range" id="admin-crop-rotate" min="-180" max="180" step="1" value="0" oninput="drawAdminCrop()"/>
            </div>
          </div>
          <div class="admin-crop-actions">
            <button class="ac-cancel" onclick="document.getElementById('admin-crop-overlay').classList.remove('open')">Annuler</button>
            <button class="ac-confirm" id="admin-crop-confirm">✓ Appliquer</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);

    // File input listener
    document.getElementById('admin-avatar-file').addEventListener('change', function () {
      const u = getCurrentUser();
      if (this.files && this.files[0]) { openAdminCrop(this.files[0], u); this.value = ''; }
    });

    // Drag
    const circle = document.getElementById('admin-crop-circle');
    circle.addEventListener('pointerdown', e => { _drag = { x: e.clientX - _off.x, y: e.clientY - _off.y }; circle.setPointerCapture(e.pointerId); });
    circle.addEventListener('pointermove', e => { if (!_drag) return; _off.x = e.clientX - _drag.x; _off.y = e.clientY - _drag.y; drawAdminCrop(); });
    circle.addEventListener('pointerup', () => { _drag = null; });
    circle.addEventListener('wheel', e => {
      e.preventDefault();
      const sl = document.getElementById('admin-crop-zoom');
      sl.value = Math.min(4, Math.max(1, parseFloat(sl.value) - e.deltaY * 0.005));
      drawAdminCrop();
    }, { passive: false });

    // Expose draw globally so inline oninput works
    window.drawAdminCrop = drawAdminCrop;
  }

  function injectSidebarUserCard(u) {
    const sidebar = document.querySelector('.admin-sidebar');
    if (!sidebar) return;
    if (document.getElementById('admin-sidebar-user')) return;

    const card = document.createElement('div');
    card.className = 'admin-user-card';
    card.id = 'admin-sidebar-user';
    card.title = 'Changer la photo de profil';
    card.onclick = () => document.getElementById('admin-avatar-file').click();
    card.innerHTML = `
      <div class="admin-avatar-wrap" id="admin-av-wrap">
        <div class="admin-avatar-overlay">📷</div>
      </div>
      <div class="admin-user-info">
        <div class="admin-user-name">${u.name}</div>
        <div class="admin-user-role">⚙️ ${u.role}</div>
      </div>
    `;
    sidebar.appendChild(card);
    refreshSidebarAvatar(u);
  }

  // ── Context menu on avatar (right-click to delete) ────────────
  function addAvatarContextMenu(u) {
    const wrap = document.getElementById('admin-av-wrap');
    if (!wrap) return;
    wrap.addEventListener('contextmenu', e => {
      e.preventDefault();
      if (confirm('Supprimer la photo de profil ?')) {
        deleteAdminAvatar(u);
        refreshSidebarAvatar(u);
        if (typeof showToast === 'function') showToast('Photo supprimée', 'success');
      }
    });
  }

  // ── Init ──────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const u = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    if (!u || u.role !== 'admin') return;

    injectCropModal();
    injectSidebarUserCard(u);
    addAvatarContextMenu(u);
  });
})();
