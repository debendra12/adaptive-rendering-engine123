adaptiveRendering.test.js

const request = require('supertest');
const app = require('../server');

describe('Adaptive Rendering Engine Tests', () => {

    test('SSR should return HTML page', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<html>');
    });

    test('SSR response should contain page content', async () => {
        const response = await request(app).get('/');

        expect(response.text).toContain('Adaptive Rendering Engine');
    });

    test('API should return rendering mode', async () => {
        const response = await request(app).get('/api/render-mode');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('mode');
    });

    test('Render mode should be CSR or SSR', async () => {
        const response = await request(app).get('/api/render-mode');

        expect(['CSR', 'SSR']).toContain(response.body.mode);
    });

});

server.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Adaptive Rendering Engine</title>
            </head>
            <body>
                <h1>Adaptive Rendering Engine</h1>
            </body>
        </html>
    `);
});

app.get('/api/render-mode', (req, res) => {
    const mode =
        Math.random() > 0.5 ? 'CSR' : 'SSR';

    res.json({ mode });
});

module.exports = app;

Install Dependencies

npm install jest supertest express

package.json

{
  "scripts": {
    "test": "jest"
  }
}

Run Tests

npm test