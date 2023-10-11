var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = input[0];
let cnt = 0;

while (n > 0) {
  if (n % 5 === 0) {
    cnt += parseInt(n / 5);
    n %= 5;
    continue;
  }
  n -= 3;
  cnt++;
}
if (n !== 0) {
  return console.log(-1);
}
console.log(cnt);