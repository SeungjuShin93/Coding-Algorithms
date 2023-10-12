var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(input[0]);

let index = 1;
for (let i = 0; i < T; i++) {
  let arr = [];
  let N = Number(input[index]);
  for (let j = index + 1; j <= N + index; j++) {
    arr.push(input[j].split(" ").map(Number));
  }
  index += N + 1; // 다음 케이스로 이동
  arr.sort((a, b) => a[0] - b[0]);
  let cnt = 1;
  let minValue = arr[0][1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (minValue > arr[i + 1][1]) {
      minValue = arr[i + 1][1];
      cnt++;
    }
  }
  console.log(cnt);
}