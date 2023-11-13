var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const M = Number(input[2]);
const query = input[3].split(' ').map(Number);

arr.sort((a,b)=>a-b);

let answer ='';
for(let i=0; i<M; i++){
  let cnt = countByRange(arr, query[i], query[i]);
  answer += cnt + " ";
}
console.log(answer);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  return rightIndex - leftIndex;
}