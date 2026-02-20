const CACHE_NAME = "zoby-cache-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    // Aplikacja uruchomiona jako PWA (ekran główny)
} else {
    // Aplikacja uruchomiona w przeglądarce
}
