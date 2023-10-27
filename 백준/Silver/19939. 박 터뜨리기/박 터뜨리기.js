var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, K] = input[0].split(' ').map(Number);

let sum = 0;
for(let i=K; i>=1; i--){
  sum += i;
}
if(N < sum) {
  console.log(-1);
} else{
    N -= sum;
  if(N % K === 0){
    console.log(K-1);
  }else{
    console.log(K);
  }
}