function solution(id_pw, db) {
  const obj = { ID: id_pw[0], PASSWORD: id_pw[1] };
  let pwCheck = false;
  for (let i = 0; i < db.length; i++) {
    if (obj.ID === db[i][0]) {
      if (obj.PASSWORD === db[i][1]) {
        return 'login';
      }
      pwCheck = true;
    }
    continue;
  }
  if (pwCheck) {
    return 'wrong pw';
  }
  return 'fail';
}