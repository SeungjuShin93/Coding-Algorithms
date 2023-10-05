var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  console.log("");
};