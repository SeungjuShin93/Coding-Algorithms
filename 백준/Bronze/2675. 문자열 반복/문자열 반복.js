var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let answer = "";
for(let i = 1 ; i<=N; i++){
  let data = input[i];
  let letter = data.split(' ');
  for(let j = 0; j<Number(letter[1].length); j++){
    for(let t = 0; t<Number(letter[0]); t++){
      answer += letter[1][j];
    }
  }
  answer+="\n";
}

console.log(answer);