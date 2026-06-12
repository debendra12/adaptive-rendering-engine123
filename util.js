function logPerformance(label, start) {
    const end = Date.now();
    console.log(`${label} took ${end - start}ms`);
}

module.exports = { logPerformance };