// self.addEventListener("install" , e =>{
//     e.waitUntil(
//         caches.open("static").then(cache =>{
//             return cache.addAll[("/pushNotification/", "/pushNotification/index.html", "/pushNotification/script.js","/pushNotification/images/download.png", "/pushNotification/images/ghost_animation_by_volorf.jpg")]
//         })
//     )
// })

// self.addEventListener("fetch", e =>{
//     e.respondWith(
//         caches.match(e.request).then(response => {
//             return response || fetch(e.request);
//         })
//     )
// })

const cacheName = 'v1';
const cacheFiles = [
    // './',
    // './index.html',
    // './images/ghost_animation_by_volorf.jpg',
    // './images/download.png',
    // './script.js',
    // './sw.js'
    'https://abidu1.github.io/pushNotification/',
    'https://abidu1.github.io/pushNotification/index.html',
    'https://abidu1.github.io/pushNotification/sw.js',
    'https://abidu1.github.io/pushNotification/script.js',
    'https://abidu1.github.io/pushNotification/images/download.png',
    'https://abidu1.github.io/pushNotification/images/ghost_animation_by_volorf.jpg'
]

// Install event
self.addEventListener('install', function(event) {
    console.log("SW installed");
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache){
            console.log('SW caching cachefiles');
            return cache.addAll(cacheFiles);
        })
    )
});

// Activate event
self.addEventListener('activate', function(event) {
    console.log("SW activated");
    event.waitUntil(
        caches.keys()
        .then(function(cacheNames){
            return Promise.all(cacheNames.map(function(thisCacheName){
                if(thisCacheName !== cacheName){
                    console.log('SW Removing cached files from', thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
});

// Fetch event
self.addEventListener('fetch', function(event) {
    console.log("SW fetching", event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            console.log('Fetching new files');
            return response || fetch(event.request);
        })
    );
})