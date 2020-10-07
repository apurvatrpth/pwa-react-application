let cacheData = 'app-cache-apurv';

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/bundle.js',
        '/static/js/1.chunk.js',
        '/static/js/main.chunk.js',
        'main.f22661d62f47859372c0.hot-update.js',
        '/index.html',
        '/users',
        '/about',
        '/',
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      if (res) {
        return res;
      }
    })
  );
});
