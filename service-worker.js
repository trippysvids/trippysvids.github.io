const blockedPatterns = [
    /scamsite\.com/,
    /ad\.domain\.com/,
    // Add other patterns here
  ];
  
  self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (blockedPatterns.some(pattern => pattern.test(url.hostname))) {
      console.log(`Blocked request to: ${url}`);
      event.respondWith(new Response('', { status: 204 }));
    } else {
      event.respondWith(fetch(event.request));
    }
  });
  