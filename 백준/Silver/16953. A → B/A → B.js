var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = input[0].split(" ").map(Number);
let cnt = 1;

while(B > A){
  cnt++;
  if(B % 10 === 1){
    B = parseInt(B / 10);
  } else if(B % 2 ===0){
    B /=2 ;
  }
  else break;
}
if (A === B) {
  console.log(cnt);
}
else{
  console.log(-1);
}