const http = require('http');
const router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = 3000;

// Create a Server
let server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');
    let url = request.url;

    // Application Routing
    router.mapRoutes(url , response);
});

// Listen to Port
server.listen(port,hostname, () => {
    console.log(`Server Started at http://${hostname}:${port}`);
});