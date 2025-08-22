// /Nakupny-zoznam/sw.js
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  clients.claim();
});
// Bez cache logiky – iOS potrebuje len, aby SW existoval.
