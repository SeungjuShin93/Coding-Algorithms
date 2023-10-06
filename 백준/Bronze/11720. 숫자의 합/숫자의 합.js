var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let data = input[1];
let sum = 0;
for (let i = 0; i<N; i++){
  sum += Number(data[i]);
}
console.log(sum);