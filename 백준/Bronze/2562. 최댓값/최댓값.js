var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let maxValue = -1;
let maxIndex = 0;
for(let i =0; i<input.length; i++){
    let data=Number(input[i]);
  if(data > maxValue){
    maxValue = data;
    maxIndex = i;
  }
}
console.log(maxValue);
console.log(maxIndex+1);