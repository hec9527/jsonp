import http from 'http';

const app = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const params = {};
    url.search
        .replace('?', '')
        .split('&')
        .forEach(entry => {
            const [key, value] = entry.split('=');
            if (key) {
                params[key] = value;
            }
        });

    console.debug(params);

    if (url.pathname.startsWith('/api')) {
        const data = {
            name: 'saga',
            age: 45,
            addr: 'Beijing China',
            timestamp: new Date().toISOString(),
        };
        res.setHeader('Content-Type', 'text/javascript');
        res.end(params.callback ? wrapJsonp(params.callback, data) : JSON.stringify(data));
        return;
    }
    res.end('file not found!');
});

function wrapJsonp(callback, data) {
    return `${callback}(${JSON.stringify(data)})`;
}

app.listen('9096', () => {
    console.log('Your service run at: http://localhost:9096/search?name=saga');
});
