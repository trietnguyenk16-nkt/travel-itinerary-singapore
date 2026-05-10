const CACHE_NAME = 'my-pwa-v2';

const ASSETS = [
  '/travel-itinerary-singapore/',
  '/travel-itinerary-singapore/index.html',
  '/travel-itinerary-singapore/manifest.json',
  '/travel-itinerary-singapore/icons/icon-192.png',
  '/travel-itinerary-singapore/icons/icon-512.png',
];


// Install: cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );

  self.skipWaiting();
});


// Activate: remove old cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    )
  );

  self.clients.claim();
});


// Fetch: cache first
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cached) => {
        return cached || fetch(event.request);
      })
  );
});