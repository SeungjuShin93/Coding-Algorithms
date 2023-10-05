var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let answer = '';
for (let i = 1; i <= T; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  answer += a + b + '\n';
}

console.log(answer);