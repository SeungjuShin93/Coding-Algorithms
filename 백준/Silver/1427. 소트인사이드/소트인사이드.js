var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();
const arr = [];
for(let i=0; i<input.length; i++){
  arr.push(Number(input[i]));
}

arr.sort((a,b)=>b-a);
let result = "";
for(let i=0; i<arr.length; i++){
  result += arr[i];
}
console.log(result);