const ssr = require("./ssr");
const csr = require("./csr");
const adaptiveEngine = require("./adaptiveEngine");

function handleRoute(req, res, parsedUrl) {
    const path = parsedUrl.pathname;

    if (path === "/") {
        const mode = adaptiveEngine.getRenderMode(req);

        if (mode === "SSR") {
            ssr.renderHome(req, res);
        } else {
            csr.renderHome(req, res);
        }
    }

    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }
}

module.exports = { handleRoute };