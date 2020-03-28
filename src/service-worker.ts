// @ts-nocheck
/* eslint-disable no-undef */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
);

if (workbox) {
  workbox.setConfig({
    debug: false,
  });

  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

  // Cache images with a cache first strategy.
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'images-cache',
    })
  );
}
