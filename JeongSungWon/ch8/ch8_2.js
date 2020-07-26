//8.2.2 즉시 함수 실행
(function () {
  console.log('hi');
})();
(function () {
  console.log('hello');
})();

console.log(
  (function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
  })(5)
);

var x = (function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
})(7);
console.log(x);
