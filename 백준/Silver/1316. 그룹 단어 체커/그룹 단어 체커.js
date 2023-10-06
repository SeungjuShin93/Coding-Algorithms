var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
let cnt = 0;
for (let i = 1; i <= N; i++) {
  let data = input[i];
  let arr = [data[0]];
  for (let j = 0; j < data.length - 1; j++) {
    if (data[j] !== data[j + 1]) {
      arr.push(data[j + 1]);
    }
  }

  if (arr.length === 1) {
    cnt++;
  } 
  else {
    const set = new Set(arr);
    const newArr = [...set];
    if (arr.length === newArr.length) {
      cnt++;
    }
  }
}

console.log(cnt);