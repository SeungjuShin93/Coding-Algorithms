function solution(a, b) {
  const numA = Number(String(a) + String(b));
  const numB = Number(String(b) + String(a));
  return numA > numB ? numA : numB;
}