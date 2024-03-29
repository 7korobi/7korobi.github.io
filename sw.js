importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.0.0-0/workbox/workbox-sw.js', 'sample-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": true
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

workbox.precaching.precacheAndRoute([
  "icon.png"
], {
  "cacheId": "nuxt-ts-demo",
  "directoryIndex": "/"
})

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('/_nuxt/(?!.*(__webpack_hmr|hot-update))'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/(?!.*(__webpack_hmr|hot-update))'), new workbox.strategies.NetworkFirst ({}), 'GET')
