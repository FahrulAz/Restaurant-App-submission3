/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { precacheAndRoute } from 'workbox-precaching';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      })],
  }),
);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed');

  const dataJson = event.data.json();
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  };

  event.waitUntil(self.registration.showNotification(notification.title, notification.options));
});

self.addEventListener('notificationclick', (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();

  const chainPromise = async () => {
    console.log('Notification has been clicked');
    await self.clients.openWindow('https://restaurant-api.dicoding.dev');
  };

  event.waitUntil(chainPromise());
});
