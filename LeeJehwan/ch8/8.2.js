var x = (function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
})(5);
console.log(x);

+(function () {
  console.log('hi');
})();

(function () {
  console.log('hi2');
})();

(function () {
  console.log('hi3');
})();
