const fs = require('fs');
const html = fs.readFileSync('c:/straight-th/index.html', 'utf8');

console.log(html.substring(69107, 71500));

