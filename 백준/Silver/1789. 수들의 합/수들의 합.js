var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let S = input[0];

let sum = 0;
let cnt = 1;
while (sum <= S){
  sum += cnt++;
}
console.log(cnt-2);