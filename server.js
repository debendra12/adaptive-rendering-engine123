const http = require("http");
const url = require("url");
const router = require("./router");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    router.handleRoute(req, res, parsedUrl);
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});