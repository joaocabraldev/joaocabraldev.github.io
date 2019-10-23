const version = "0.0.2";
const cacheName = `appcache-${version}`;

self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			
			return cache.addAll([
				'/pwa',
				'/pwa/favicon.ico',
				'/pwa/index.html',
				'/pwa/app.js',
				'/pwa/styles.css',
				'/pwa/images/calc_144.png',
				'/pwa/images/calc_512.png'
			])
			.then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
		.then(cache => cache.match(event.request, {ignoreSearch: true}))
		.then(response => {
			return response || fetch(event.request);
		})
	);
});
