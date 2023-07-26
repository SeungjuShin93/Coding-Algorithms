function solution(before, after) {
  const sortB = [...before].sort().join('');
  const sortA = [...after].sort().join('');
  return sortA === sortB ? 1 : 0;
}