function solution(a, b) {
  let max;
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }
  let cnt = min;
  while (!(max % cnt === 0 && min % cnt === 0)) {
    cnt--;
  }
  console.log(cnt);
  let check = b / cnt;
  while (check % 2 === 0) {
    check /= 2;
  }
  while (check % 5 === 0) {
    check /= 5;
  }
  if (check === 1) {
    return 1;
  }
  return 2;
}