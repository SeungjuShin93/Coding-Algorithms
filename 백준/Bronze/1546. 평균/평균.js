var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let data = input[1].split(' ').map(Number);
let max = Math.max(...data);
let sum = 0;

for ( let i = 0 ; i < N; i++){
  sum += data[i];
}
let result = sum/N/max*100;
console.log(result);