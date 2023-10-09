var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

const arr = input.map(Number);
arr.sort((a,b) => a-b);
let result = "";
for (let i of arr){
  result += i + " ";
}
console.log(result);