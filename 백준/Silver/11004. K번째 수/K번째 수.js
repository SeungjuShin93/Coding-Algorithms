var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const condition = input[0].split(' ').map(Number);
const N = condition[0];
const K = condition[1];
const arr = input[1].split(' ').map(Number);
arr.sort((a,b) => a-b);
console.log(arr[K-1]);