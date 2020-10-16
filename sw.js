const CACHE_VERSION='v1';
const CACHE_FILES=[
    'index.html',
    'css/style.css',
    'js/app.js',
    'images/512.png',
    'images/144.png',
    'favicon.ico',
    'logos',
    'projects',
    'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rust/rust.png',
    'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png',
    'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png',

]

// self.addEventListener('install',(e)=>{
//     e.waitUntil(caches.open(cacheName)
//         .then(cache=>{
//             cache.addAll(cacheAssets)
//         })
//         .then(()=>self.skipWaiting())
//     )
// })
// self.addEventListener('activate',(e)=>{

//     // Remove unwanted caches
//     e.waitUntil(
//         caches.keys().then(cacheNames=>{
//             return Promise.all(cacheNames.map(cache=>{
//                 if(cache!==cacheName){
//                     //clear caceh
//                     return caches.delete(cache)
//                 }
//             }
                
//             ))
//         })
//     )
// })

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             if(response){
//                 console.log("response from cahe",response)
//             }
//             console.log("fetching")
//             return response || fetch(event.request)
//           }).catch(res=>{
//               console.log("Not in cache")
//               fetch(event.request)
//           })
//     );
//   });
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(CACHE_FILES);
            })
    );
});

self.addEventListener('fetch', function (event) {
    let online = navigator.onLine
    if(!online){
        event.respondWith(
            caches.match(event.request).then(function(res){
                if(res){
                    return res;
                }
                requestBackend(event);
            })
        )
    }
});

function requestBackend(event){
    var url = event.request.clone();
    return fetch(url).then(function(res){
        //if not a valid response send the error
        if(!res || res.status !== 200 || res.type !== 'basic'){
            return res;
        }

        var response = res.clone();

        caches.open(CACHE_VERSION).then(function(cache){
            cache.put(event.request, response);
        });

        return res;
    })
}

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function(keys){
            return Promise.all(keys.map(function(key, i){
                if(key !== CACHE_VERSION){
                    return caches.delete(keys[i]);
                }
            }))
        })
    )
});