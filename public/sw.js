self.addEventListener('install', function(event) {
    console.log('[Service Worker], installing Service worker',event)
})

self.addEventListener('activate', function(event) {
    console.log('[Service Worker], activating Service worker',event)
    return self.clients.claim()
})

self.addEventListener('fetch',function(event) {
    console.log('[Service Worker] fetching something')
    event.respondWith();
})