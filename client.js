console.log("Client App Loaded");

// Example: dynamic rendering
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("app");

    if (root) {
        root.innerHTML += "<p>Hydrated by client JS</p>";
    }
});