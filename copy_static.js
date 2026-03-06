const fs = require('fs');
try {
    fs.cpSync('e:\\rental_app\\my-windbnb\\app\\(static)\\windbnb', 'e:\\rental_app\\my-windbnb\\app\\(static)\\rentora', { recursive: true });
    fs.rmSync('e:\\rental_app\\my-windbnb\\app\\(static)\\windbnb', { recursive: true, force: true });
    console.log("Copied and deleted successfully");
} catch (e) {
    console.error(e);
}
