var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = input[1];
let A = a * parseInt(b[2]);
let B = a * parseInt(b[1]);
let C = a * parseInt(b[0]);
console.log(A);
console.log(B);
console.log(C);
console.log(A+B*10+C*100);