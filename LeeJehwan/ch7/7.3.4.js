function fact(n) {
  var k = 1;
  var i = n;
  do {
    k *= i--;
  } while (i > 0);
  return k;
}
console.log(fact(5));
