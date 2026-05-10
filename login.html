const CACHE = 'cheers55-v2';
const ASSETS = ['./', './login.html', './index.html', './lecturer.html', './premium.html', './manifest.json', './shared.js', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./login.html')))); });
self.addEventListener('push', e => {
  const d = e.data ? e.data.json() : {};
  e.waitUntil(self.registration.showNotification(d.title || 'CHEERS55', { body: d.body || '', icon: './icons/icon-192.png', badge: './icons/icon-192.png', vibrate: [200,100,200] }));
});
