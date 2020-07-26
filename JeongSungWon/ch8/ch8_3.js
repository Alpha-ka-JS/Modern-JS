//8.3.1 인수의 생략
function f(x, y) {
  console.log('x = ' + x + ', y = ' + y);
}
console.log(f(2));

function multiply(a, b) {
  b = b || 1;
  return a * b;
}
console.log(multiply(2, 3));
console.log(multiply(2));

//8.3.2 가변 길이 인수 목록
//Arguments 객체
function f(x, y) {
  arguments[1] = 3;
  console.log('x = ' + x + ', y = ' + y);
}
f(1, 2);

//separator 는  "/"만을 인자로 받음
//뒤의 나머지는 Arguments 객체로 받음
function myConcat(separator) {
  var s = '';
  for (var i = 1; i < arguments.length; i++) {
    s += arguments[i];
    if (i < arguments.length - 1) s += separator;
  }
  return s;
}
console.log(myConcat('/', 'apple', 'orange', 'peach'));
