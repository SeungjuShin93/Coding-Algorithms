var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = input[0];
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);
let sum = 0;
let acc = 0;

for (let i = 0; i < N; i++) {
  sum += arr[i];
  acc += sum;
}
console.log(acc);