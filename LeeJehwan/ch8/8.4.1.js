function fact1(n) {
  if (n <= 1) return 1;
  return n * fact1(n - 1);
}
console.log(fact1(5));

var fact2 = function (n) {
  if (n <= 1) return 1;
  return n * fact2(n - 1);
};
console.log(fact2(5));

var fact3 = function f(n) {
  if (n <= 1) return 1;
  return n * f(n - 1);
};
console.log(fact3(5));

var fact4 = function (n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
};
console.log(fact4(5));

function hanoi(n, a, b, c) {
  if (n < 1) return;
  hanoi(n - 1, a, c, b);
  console.log(n + ' 번째 원판: ' + a + ' ->' + c);
  hanoi(n - 1, b, a, c);
}
hanoi(4, 'A', 'B', 'C');

function quicksort(x, first, last) {
  var p = x[Math.floor((first + last) / 2)];
  for (var i = first, j = last; ; i++, j--) {
    while (x[i] < p) i++;
    while (p < x[j]) j--;
    if (i >= j) break;
    var w = x[i];
    x[i] = x[j];
    x[j] = w;
  }
  if (first < i - 1) quicksort(x, first, i - 1);
  if (j + 1 < last) quicksort(x, j + 1, last);
}
var a = [7, 2, 5, 1, 8, 9, 3];
quicksort(a, 0, a.length - 1);
console.log(a);
