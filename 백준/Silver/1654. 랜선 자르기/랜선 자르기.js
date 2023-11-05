var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [K, N] = input[0].split(' ').map(Number);
const arr = [];
for (i = 1; i <= K; i++) {
  arr.push(Number(input[i]));
}
let maxLength = 0;

let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b));

while (start <= end) {
  let cnt = 0;
  let mid = parseInt((start + end) / 2);
  for (x of arr) {
    cnt += parseInt(x / mid);
  }
  if (cnt < N) {
    end = mid - 1;
  } else {
    maxLength = mid;
    start = mid + 1;
  }
}
console.log(maxLength);