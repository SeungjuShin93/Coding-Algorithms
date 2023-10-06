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
  let cnt = 0;
  for(let x = 1; x <=n; x++){
    if(data[x] > avg){
      cnt += 1;
    }
  }  
  console.log((cnt / n * 100).toFixed(3) + "%");
}