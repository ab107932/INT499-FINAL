// serviceWorkerRegistration.js

export function register() {
  if ('serviceWorker' in navigator) { // Check if the browser supports service workers
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`; // Path to the service worker

      navigator.serviceWorker
        .register(swUrl) // Register the service worker
        .then((registration) => {
          console.log('Service Worker registered:', registration); // Success
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error); // Failure
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister(); // Unregister the service worker if needed
      })
      .catch((error) => {
        console.log('Error during service worker unregister:', error);
      });
  }
}
