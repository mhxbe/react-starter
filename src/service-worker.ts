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

// Cache images with a cache first strategy.
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images-cache',
  })
);

// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the Google Fonts webfont files with a cache first strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
  })
);
