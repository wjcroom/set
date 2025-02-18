self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('periodicSync', event => {
    if (event.tag === 'keep-alive') {
        event.waitUntil(() => {
            return new Promise(resolve => {
                setTimeout(resolve, 5000);
            });
        });
    }
});
