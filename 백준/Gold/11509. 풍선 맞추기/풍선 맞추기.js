var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let cnt = 0;
const arrow = new Array(1000001).fill(0);

for (let item of arr){
  if(arrow[item] > 0){
    arrow[item] -= 1;
    arrow[item - 1] += 1;
  }
  else{
    arrow[item - 1] += 1;
    cnt += 1;
  }
}
console.log(cnt)