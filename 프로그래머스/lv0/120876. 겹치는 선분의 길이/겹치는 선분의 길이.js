function solution(lines) {
  const arr = [];
  for (let i = 0; i < lines.length; i++) {
    const item = lines[i];
    let check = item[1];
    for (let j = item[0]; j <= item[1]; j++) {
      if (j !== check) arr.push(j);
    }
  }
  const uniqueItems = new Set();
  const duplicates = new Set();
  arr.forEach((item) => {
    if (uniqueItems.has(item)) {
      duplicates.add(item);
    } else {
      uniqueItems.add(item);
    }
  });
  const result = Array.from(duplicates).length;
  return result === 0 ? 0 : result;
}