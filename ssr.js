function renderHome(req, res) {
    const html = `
        <html>
        <head>
            <title>SSR Page</title>
        </head>
        <body>
            <h1>Server Side Rendered Page</h1>
            <p>This page was rendered on the server.</p>
        </body>
        </html>
    `;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
}

module.exports = { renderHome };