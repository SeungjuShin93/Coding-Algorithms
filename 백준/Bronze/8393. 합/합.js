var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let sum = 0;
for(let i=1; i<=n; i++){
  sum+=i;
}
console.log(sum)