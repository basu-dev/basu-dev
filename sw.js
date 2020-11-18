const cacheName='assets';
const cacheAssets=[
    './',
    'index.html',
    'css/style.min.css',
    'js/app.min.js',
    'images/144.png',
    'images/512.png',
    'images/bnb.jpg',
    'images/candycrush.jpg',
    'images/devjs.jpg',
    'images/far.jpg',
    'images/mypic.jpg',
    'images/raven.jpg',
    'images/mypic2.jpg',
    'images/tic.jpg',
    'images/weather.jpg',
    'logos/django.svg',
    'logos/figma.svg',
    'logos/git.svg',
    'logos/javascript.svg',
    'logos/node-js.svg',
    'logos/python.svg',
    'logos/vscode.svg',
    'manifest.webmanifest',
    'sw.js',
    'favicon.ico',
    'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rust/rust.png',
    'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png',
    'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png',
    'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-regular-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-brands-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-solid-900.woff2',
    'https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap'
    

]
self.addEventListener("install", async (e) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(cacheAssets);
  return self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  self.clients.claim();
});
self.addEventListener("fetch", async (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (url.origin == location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

const cacheFirst = async (req) => {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
};
const networkAndCache = async (req) => {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(reg);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
};
