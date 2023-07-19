function solution(numlist, n) {
  const arr = [];
  for (let i = 0; i < numlist.length; i++) {
    const item = Number(numlist[i]);
    const obj = {};
    obj.value = item - n;
    obj.index = i;
    arr.push(obj);
  }
  let result = arr.sort(function (a, b) {
    const aNum = Math.abs(a.value);
    const bNum = Math.abs(b.value);
    if (aNum === bNum) {
      return b.value - a.value;
    }
    return aNum - bNum;
  });
  const answer = [];
  for (let i = 0; i < result.length; i++) {
    const item = result[i].index;
    answer.push(numlist[item]);
  }
  return answer;
}
// 30과의 차액과 index를 가진 오브젝트를 배열에 push
// 절대값이 가장 작은 수부터 push
// 만약 절대값의 값이 같다면 절대값을 하지 않은 b.value - a.value로 정렬
// 정렬된 배열의 index를 원래 numlist[index] 순서로 만든 배열을 생성
// 그 배열을 리턴
