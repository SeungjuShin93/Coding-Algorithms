function solution(chicken) {
  let serviceChi = 0;
  let coupons = chicken;
  while (coupons >= 10) {
    serviceChi += parseInt(coupons / 10);
    coupons = parseInt(coupons % 10) + parseInt(coupons / 10);
  }
  return serviceChi;
}