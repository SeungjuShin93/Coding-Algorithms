var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const data = [...input[0]];
data.unshift("(");
data.push(")");
for (let i = 0; i < data.length; i++) {
  if (data[i] === "-") {
    data[i] = ")-(";
  }
}
const arr = data.join("").split("-");
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  let number = "";
  for (let j = 1; j < arr[i].length - 1; j++) {
    number += arr[i][j];
  }
  newArr.push(number);
}
const resultArr = [];
for (let i = 0; i < arr.length; i++) {
  resultArr.push(
    newArr[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b)
  );
}

console.log(resultArr.reduce((a, b) => a - b));