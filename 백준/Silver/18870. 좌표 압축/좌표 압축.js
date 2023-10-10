var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const sortArr = [...new Set(arr)];
sortArr.sort((a, b) => a - b);

let map = new Map();
for (let i = 0; i < sortArr.length; i++) {
  map.set(sortArr[i], i);
}

let result = "";
for (let item of arr){
  result += map.get(item) + " ";
}
console.log(result);