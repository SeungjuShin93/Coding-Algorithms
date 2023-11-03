var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ').map(Number);
const budget = Number(input[2]);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (item of arr) {
    total += Math.min(mid, item);
  }
  if (total <= budget) {
    result = mid;
    start = mid + 1;
  }
  else {
    end = mid - 1;
  }
}

console.log(result);