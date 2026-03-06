const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('e:/rental_app/my-windbnb/app');
let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Use Teal for secondary gradients or accents where pink was previously used
    content = content.replace(/pink-600/g, '[#14B8A6]');
    content = content.replace(/pink-500/g, '[#14B8A6]');
    content = content.replace(/pink-400/g, '[#2DD4BF]'); // Lighter Teal

    // Ensure Deep Blue is the exact hex for critical places
    content = content.replace(/bg-blue-900/g, 'bg-[#1E3A8A]');
    content = content.replace(/from-blue-900/g, 'from-[#1E3A8A]');
    content = content.replace(/via-blue-800/g, 'via-[#1E40AF]'); // lighter blue
    content = content.replace(/to-blue-900/g, 'to-[#1E3A8A]');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        count++;
    }
});
console.log('Total files updated with exact hex strings:', count);
