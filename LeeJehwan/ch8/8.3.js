function f(x, y) {
  console.log(x, y);
}
f(2);

function mul(a, b) {
  b = b || 1;
  return a * b;
}
console.log(mul(2, 3));
console.log(mul(2));

// arguments 객체 이거진짜 신기한듯
function f(x, y) {
  arguments[1] = 3;
  console.log(x, y);
  arguments[1] = 5;
  arguments[0] = 0;
  console.log(x, y);
}
f(1, 2);
f(1, 100);

function myConcat(separator) {
  var s = '';
  for (var i = 1; i < arguments.length; i++) {
    s += arguments[i];
    if (i < arguments.length - 1) s += separator;
  }
  return s;
}
console.log(myConcat('/', 'apple', 'orange', 'peach'));
