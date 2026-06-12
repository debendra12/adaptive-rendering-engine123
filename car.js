function renderHome(req, res) {
    const html = `
        <html>
        <head>
            <title>CSR Page</title>
        </head>
        <body>
            <div id="app">Loading...</div>

            <script>
                document.getElementById("app").innerHTML =
                    "<h1>Client Side Rendered Page</h1><p>Rendered in browser using JS.</p>";
            </script>
        </body>
        </html>
    `;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
}

module.exports = { renderHome };