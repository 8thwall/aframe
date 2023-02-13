var execSync = require('child_process').execSync;
var pkg = require('../package.json');

var name = process.argv[2] || '8frame-master';

console.log('Building 8frame as:', name);

const distMin = pkg.scripts['dist:min'] + ` --output-filename ${name}.min.js`;
const distMax = pkg.scripts['dist:max'] + ` --output-filename ${name}.js`;

console.log('>', distMin);
execSync(distMin, {stdio: 'inherit'});

console.log('>', distMax);
execSync(distMax, {stdio: 'inherit'});
