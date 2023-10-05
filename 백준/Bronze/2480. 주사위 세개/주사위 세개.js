var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);
let sum = 0;
if (a === b && b === c) {
  sum = 10000 + a * 1000;
} else if (a === b && b !== c) {
  sum = 1000 + a * 100;
}
else if (b === c && c !== a) {
  sum = 1000 + b * 100;
}
else if (c === a && a !== b) {
  sum = 1000 + c * 100;
} else {
  sum = Math.max(a, b, c) * 100;
}
console.log(sum);