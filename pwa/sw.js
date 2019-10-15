self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('appcache_0.01').then(function(cache) {
     return cache.addAll([
       '/pwa',
       '/pwa/index.html',
       '/pwa/app.js',
       '/pwa/styles.css',
       '/pwa/images'
     ]);
   })
 );
});
