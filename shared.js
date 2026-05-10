// ── CHEERS55 Shared Utilities v2.0 ────────────────────────────────

const KEYS = {
  users: 'c55_users',
  currentUser: 'c55_current_user',
  premium: 'c55_premium',
  lastUser: 'c55_last_username',
  globalNotifs: 'c55_global_notifs',
  globalNotes: 'c55_global_notes',
  downloads: 'c55_downloads',
  customTT: 'c55_custom_timetables',
};

function getJSON(key, fallback = null) {
  try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}
function setJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) { console.error('Storage error', e); }
}

function getUsers()         { return getJSON(KEYS.users, []); }
function saveUsers(u)       { setJSON(KEYS.users, u); }
function getCurrentUser()   { return getJSON(KEYS.currentUser, null); }
function setCurrentUser(u)  { setJSON(KEYS.currentUser, { ...u, loginTime: new Date().toISOString() }); }
function clearCurrentUser() { localStorage.removeItem(KEYS.currentUser); }

function hashPwd(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h |= 0; }
  return h.toString(36);
}

function isPremium() {
  try { return getJSON(KEYS.premium, {}).unlocked === true; } catch { return false; }
}

// Toast — any page with #toast, #tT, #tM
let _tt;
function showToast(icon, title, msg) {
  const t = document.getElementById('toast');
  const tT = document.getElementById('tT');
  const tM = document.getElementById('tM');
  if (!t) return;
  if (tT) tT.textContent = icon + ' ' + title;
  if (tM) tM.textContent = msg;
  t.classList.add('on');
  clearTimeout(_tt);
  _tt = setTimeout(() => t.classList.remove('on'), 4500);
}

// PWA service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
