const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', '_redirects');
const dest = path.join(__dirname, 'build', '_redirects');

fs.copyFileSync(src, dest);
console.log('_redirects file copied to build directory');
