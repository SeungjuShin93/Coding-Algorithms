function solution(score) {
  const avgArr = [];
  const answer = [];
  for (let i = 0; i < score.length; i++) {
    // 제일 밑에 avg라는 함수 만들어 놨음
    const item = avg(score[i]);
    avgArr.push({ value: item, index: i });
  }
  console.log(avgArr);
  // SortedArr은 평균값이 큰 순서대로 재배열
  const sortedArr = avgArr.sort((a, b) => b.value - a.value);
  // console.log(sortedArr);
  // console.log(sortedArr[0].value);
  // 가장 큰 숫자부터 value 값을 1, 2 ... 이렇게 바꿈
  let checkValue = sortedArr[0].value; // 첫번째 value 값을 checkValue에 저장해둠
  let fixedCnt = 1;
  for (let i = 1; i < sortedArr.length; i++) {
    let item = sortedArr[i];
    if (checkValue === item.value) {
      // 현재 value와 기존 value를 비교
      item.value = fixedCnt; // 같다면 고정된 숫자 fixedCnt 를 대입
    } else {
      // 다르다면
      checkValue = item.value; // 기존 value에 현재 value 대입
      fixedCnt = i + 1; // fixedCnt에 i + 1값을 증가해서 대입
      item.value = fixedCnt;
    }
  }
  sortedArr[0].value = 1; // 첫번째 value(제일 큰 숫자였던)에는 1넣어줌
  // console.log(sortedArr);
  // FinalArr은 최대값 기준으로 정렬된 배열을 index 순서로 재배열
  const finalArr = sortedArr.sort((a, b) => a.index - b.index);
  // console.log(finalArr);
  // 원래 주어진 값의 index에 맞는 value 값을 다시 넣어줌
  for (let i = 0; i < finalArr.length; i++) {
    answer.push(finalArr[i].value);
  }
  return answer;
}
function avg(score) {
  return (Number(score[0]) + Number(score[1])) / 2;
}