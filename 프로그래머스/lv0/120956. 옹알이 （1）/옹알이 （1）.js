function solution(babbling) {
  let cnt = 0;
  for (let i = 0; i < babbling.length; i++) {
    const item = babbling[i].replace(/aya|ye|woo|ma/gi, '');
    if(item == ''){
      cnt++;
    }
  }
  return cnt;
}