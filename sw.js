const CACHE_NAME = "simuladores-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./Reservas_01.html",
  "./Reservas_02.html",
  "./Reservas_03.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

