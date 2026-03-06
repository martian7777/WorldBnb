const fs = require('fs');
try {
    fs.renameSync('e:\\rental_app\\my-windbnb\\app\\(static)\\windbnb', 'e:\\rental_app\\my-windbnb\\app\\(static)\\rentora');
    console.log("Renamed successfully");
} catch (e) {
    console.error(e);
}
