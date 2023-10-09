var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = [];
for(let i=1; i<=n; i++){
  arr.push(Number(input[i]))
}
arr.sort((a,b) => a-b);
let result = "";
for (let i=0; i<arr.length; i++){
  result += arr[i] + "\n";
}
console.log(result);