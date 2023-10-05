var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}