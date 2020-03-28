// @ts-nocheck
/* eslint-disable no-undef */
import { name, version } from '../package.json';

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
);

if (workbox) {
  workbox.setConfig({
    debug: false,
  });

  workbox.core.setCacheNameDetails({
    prefix: name,
    suffix: version,
  }); // results in: {prefix}-precache-v2-{suffix} -> e.g.: react-starter-precache-v2-1.0.0

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
