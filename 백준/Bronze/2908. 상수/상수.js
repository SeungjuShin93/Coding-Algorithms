var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let data = input[0].split(' ');
let arr = [];
for(let i=0; i<data.length; i++){
  arr.push([...data[i]].reverse().join(""));
}
arr = arr.map(Number);
let result = arr.reduce((a,b)=>Math.max(a,b));
console.log(result);