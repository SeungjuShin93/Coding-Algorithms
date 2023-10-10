var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const arr = [];
for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  arr.push({ x, y });
}

arr.sort((a, b) => {
  if (a.x === b.x) {
    return a.y - b.y;
  }
  return a.x - b.x;
});

let result = "";
for (let item of arr) {
  result += `${item.x} ${item.y}\n`;
}
console.log(result.trim());