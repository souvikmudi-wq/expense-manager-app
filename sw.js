// Keeps the app shell (this page, icons) available offline. The app itself always loads live from Google.
const CACHE = 'expense-manager-shell-v7';
const SHELL = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-32.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;       // Google requests go straight to the network
  // network first (so updates show up), cached copy when offline
  // always ask the server first, never the browser's HTTP cache, so a changed config.js (new /exec link) is picked up at once
  const key = url.origin + url.pathname;                       // config.js?t=… → one cached copy
  e.respondWith(fetch(e.request.url, { cache: 'no-cache', credentials: 'same-origin' }).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(key, copy)); return r; })
    .catch(() => caches.match(key).then(r => r || caches.match('index.html'))));
});
