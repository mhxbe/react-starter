import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);

skipWaiting();
clientsClaim();

// Cache images with a cache first strategy.
registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new CacheFirst({
    cacheName: 'images-cache',
  })
);
