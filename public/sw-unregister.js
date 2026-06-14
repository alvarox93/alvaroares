# Unregister any existing service workers and force cache clear
# Inject this script in the <head> of your main layout (before any other scripts)

# To use: Paste this into BaseLayout.astro inside the <head>, as the first <script>

<script is:inline>
  // Force unregister ALL service workers (past, present, zombie)
  (function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (var i = 0; i < registrations.length; i++) {
          registrations[i].unregister();
        }
      });
      // Also clear any caches that might exist
      if ('caches' in window) {
        caches.keys().then(function(cacheNames) {
          cacheNames.forEach(function(cacheName) {
            caches.delete(cacheName);
          });
        });
      }
    }
  })();
</script>
