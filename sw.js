self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ask3schools').then((cache) => cache.addAll([
      'index.html',
      'ask3schools.png',
      'index.js',
      'style.css',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
}); 