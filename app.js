const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>Node.js CI/CD Demo</title>
            </head>
            <body>
                <h1>Hello from Node.js!</h1>
                <h2>CI/CD Pipeline using GitHub Actions</h2>
                <p>Docker + GitHub Actions + Docker Hub</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});