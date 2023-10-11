var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}
let cnt = 0;
for (let i = N - 1; i >= 0; i--) {
  cnt += parseInt(K / arr[i]);
  K %= arr[i];
}
console.log(cnt);