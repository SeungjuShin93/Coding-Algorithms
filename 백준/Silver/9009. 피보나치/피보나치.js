var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.shift();
let answer = "";
input.forEach((item) => answer += count(fibo(item), item) + "\n");
console.log(answer.trim());
function count(array, num) {
  const arr = array.reverse();
  const answer = [arr[0]];
  arr.reduce((acc, value) => {
    if (acc + value <= num) {
      answer.push(value);
      return (acc += value);
    }
    return acc;
  });
  answer.pop();
  return answer.reverse().join(' ');
}

function fibo(num) {
  if(num === 1){
    return [1];
  }
  const arr = [0, 1];
  let i = 0;
  while (num >= arr[arr.length - 1]) {
    arr[arr.length] = arr[i] + arr[i + 1];
    i++;
  }
  arr.pop();
  return arr;
}