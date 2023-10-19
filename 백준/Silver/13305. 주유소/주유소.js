var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let km = input[1].split(" ").map(Number);
let price = input[2].split(" ").map(Number);
let sum = 0;
let sortedPrice = [price[0]];
for (let i = 1; i < price.length; i++) {
  if (price[i - 1] < price[i]) {
    price[i] = price[i - 1];
  }
  sortedPrice.push(price[i]);
}

for (let i = 0; i < n - 1; i++) {
  sum += km[i] * price[i];
}
console.log(sum);