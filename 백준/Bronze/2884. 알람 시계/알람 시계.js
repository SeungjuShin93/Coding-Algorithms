var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
let H = Number(input[0]);
let M = Number(input[1]);

if(M >= 45){
console.log(`${H} ${M-45}`);
} else if (H === 0){
console.log(`23 ${M+15}`);
} else {  
console.log(`${H-1} ${M+15}`);
}