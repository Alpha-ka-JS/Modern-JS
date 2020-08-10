/*

*/

function f(x) {
  'use strict';
  //  y = x;
}
f(2); //ReferenceError: y is not defined

//11.2.2 thorw 문
function permutation(a) {
  if (!(a instanceof Array)) {
    throw new Error(a + 'is not an array');
  } else console.log(a);
}
//);

//console.log(permutation('ABC'));

//에러
var err = new TypeError('배열이 아닙니다');
console.log(err.message);
console.log(err.name);
console.log(err.toString());

try {
  var p = permutation(a);
  p.forEach(function (v) {
    console.log(v);
  });
} catch {
  alert(e);
}

try {
  f();
} catch (e) {
  console.log('예외 캐치 ->' + e);
}
function f() {
  g();
}
function g() {
  h();
}
function h() {
  throw new Error('오류 발생..');
}

try {
  setTimeout(function throwError() {
    throw new Error('오류가 발생했습니다');
  }, 1000);
} catch (e) {
  console.log('예외를 캐치함 ->' + e);
}
