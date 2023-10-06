var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);

const arr = input[1].split(' ').map(Number);
console.log(`${Math.min.apply(null,arr)} ${Math.max.apply(null,arr)}`);