self.addEventListener("install",(e=>{console.log("[SW] Hello from service worker. (pssst you should sub to coder gautam on yt)")})),self.addEventListener("fetch",(function(e){e.respondWith(async function(){try{var t=await fetch(e.request);return(await caches.open("cache")).put(e.request.url,t.clone()),t}catch(t){return caches.match(e.request)}}())}));