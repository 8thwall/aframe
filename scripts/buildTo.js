var execSync = require('child_process').execSync;
var pkg = require('../package.json');

var name = process.argv[2] || '8frame-master.js';

console.log('Building 8frame as:', name);

const distMin = pkg.scripts['dist:min'] + ` --output-filename ${name}`;
const distMax = pkg.scripts['dist:max'] + ` --output-filename ${name}`;

console.log('>', distMin);
execSync(distMin, {stdio: 'inherit'});

console.log('>', distMax);
execSync(distMax, {stdio: 'inherit'});
