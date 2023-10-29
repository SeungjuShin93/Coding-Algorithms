var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = input[0];

function same(str) {
  return str === str.split('').reverse().join('');
}
let answer = '';
for (let i = 1; i <= N; i++) {
  const item = input[i];
  if (same(item)) {
    answer += 0 + '\n';
  } else {
    let found = false;
    let n = item.length;
    for (let j = 0; j < parseInt(n / 2); j++) {
      if (item[j] !== item[n - 1 - j]) {
        // 첫번째 글자와 마지막 글자를 비교
        // 일치하지 않은 앞의 글자를 없애서 회문 체크
        if (same(item.slice(0, j) + item.slice(j + 1, n))) {
          found = true;
        }
        // 일치하지 않은 뒤의 글자를 없애서 회문 체크
        if (same(item.slice(0, n - 1 - j) + item.slice(n - j, n))) {
          found = true;
        }
        break;
      }
    }
    if (found) answer += 1 + '\n';
    else answer += 2 + '\n';
  }
}

console.log(answer.trim());