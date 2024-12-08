// service-worker.js

const CACHE_NAME = 'my-pwa-cache-v1'; // Unique name for the cache
const urlsToCache = [
  '/', // The home page
  '/index.html', // HTML file
  '/static/js/main.js', // Your JavaScript bundle
  '/static/css/main.css', // Your CSS file
];

// Install event: called when the service worker is installed
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open(CACHE_NAME) // Open the cache
      .then((cache) => {
        return cache.addAll(urlsToCache); // Cache all the specified assets
      })
  );
});

// Fetch event: called whenever a request is made by the app
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request) // Try to find the requested resource in the cache
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request); // If not found, fetch from the network
      })
  );
});

// Activate event: called when the service worker is activated
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]; // List of caches to keep
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Delete old caches
          }
        })
      );
    })
  );
});
