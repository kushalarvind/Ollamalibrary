// index.js
// Simple Node.js server

const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Node.js World!\n');
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
