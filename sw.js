self.addEventListener("install" , e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll("/", "/script.js","./images/ghost_animation_by_volorf.jpg")
        })
    )
})

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})