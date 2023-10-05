var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
let H = Number(input[0].split(' ')[0]);
let M = Number(input[0].split(' ')[1]);
let T = Number(input[1].split(' ')[0]);

H += parseInt((M+T) / 60);
M = (M+T) % 60;
if(H>=24){
  H -= 24;
}
console.log(`${H} ${M}`);