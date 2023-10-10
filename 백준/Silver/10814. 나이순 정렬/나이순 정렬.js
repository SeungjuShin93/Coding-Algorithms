var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const arr = [];
for (let i = 1; i <= N; i++) {
  const obj = {};
  obj.id = Number(i);
  obj.age = Number(input[i].split(' ')[0]);
  obj.name = input[i].split(' ')[1];
  arr.push(obj);
}

arr.sort((a, b) => {
  if (a.age === b.age) {
    return a.id - b.id;
  }
  return a.age - b.age;
});
let result = "";
for (let item of arr){
  result += `${item.age} ${item.name}\n`;;
}
console.log(result.trim());