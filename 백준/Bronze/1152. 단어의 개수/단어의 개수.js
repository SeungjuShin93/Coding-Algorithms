var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
if (input == '') {
  console.log(0);
} else {
  console.log(input.length);
}