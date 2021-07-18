self.addEventListener("install" , e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll[("/pushNotification/", "/pushNotification/index.html", "/pushNotification/script.js","/pushNotification/images/download.png", "/pushNotification/images/ghost_animation_by_volorf.jpg")]
        })
    )
})

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})