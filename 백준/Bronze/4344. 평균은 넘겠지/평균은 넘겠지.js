var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
for ( let i = 1 ; i <= N; i++){
  let data = input[i].split(' ').map(Number);
  let n = data[0];
  let sum = 0;
  for( let j = 1 ; j<= n; j++){
   sum += data[j];
  }
  let avg = (sum / n);
  data.shift();
  let arr = data.filter((item) => item > avg);
  
  console.log(((arr.length / n) * 100).toFixed(3) + "%");
}