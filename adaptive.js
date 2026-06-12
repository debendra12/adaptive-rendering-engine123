function getRenderMode(req) {
    const userAgent = req.headers["user-agent"] || "";

    // Simple logic for adaptive rendering
    if (userAgent.includes("Mobile")) {
        return "CSR"; // mobile → faster client rendering
    }

    if (req.headers["save-data"] === "on") {
        return "CSR"; // low bandwidth users
    }

    return "SSR"; // default desktop → server rendering
}

module.exports = { getRenderMode };