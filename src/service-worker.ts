// @ts-nocheck
/* eslint-disable no-undef */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
);

workbox.setConfig({
  debug: false,
});

workbox.core.setCacheNameDetails({
  prefix: 'my-app',
  suffix: '0.0.1',
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp(/\.(?:png|gif|jpg|jpeg|svg)$/),
  new workbox.strategies.CacheFirst({
    cacheName: 'images-cache',
  })
);
