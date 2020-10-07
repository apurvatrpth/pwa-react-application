let cacheData = 'app-cache-apurv';

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/bundle.js',
        '/static/js/1.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/main.chunk.js',
        '/index.html',
        '/manifest.json',
        '/favicon.ico',
        '/users',
        '/about',
        '/',
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res) {
          return res;
        }

        let reqUrl = event.request.clone();
        return fetch(reqUrl);
      })
    );
  }
});

// this.addEventListener('fetch', function (event) {
//   if (!navigator.onLine) {
//     event.respondWith(
//       fetch(event.request).catch(function () {
//         return caches.match(event.request);
//       })
//     );
//   }
// });

//checks whether we are online or not, if not online if return cached pages else return new pages from actual server
