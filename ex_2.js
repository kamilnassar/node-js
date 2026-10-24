//kamil nassar
// mariam nbrawi

//check Prime Number function.
function isPrime(x) {
  if (x <= 1) return false;
  for (let i = 2; i < x; i++) {
    let tmp = x % i;
    if (tmp === 0) return false;
  }
  return true;
}

for (let k = 1; k < 237; k++) {
  if (isPrime(k)) console.log(k);
}
