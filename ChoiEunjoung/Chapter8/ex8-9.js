//8.9 고차함수
/* 
8.9.1 고차함수 
함수를 인수로 받는 함수 또는 함수를 반환하는 함수를 말한다. 
자바스크립트의 함수는 일급 객체이고, 인수로 함수를 넘길 수 있으며 함수를 반환할 수 있으므로 고차함수를 정의할 수 있다. 
(변수나 데이타에 할당 할 수 있어야 한다.객체의 인자로 넘길 수 있어야 한다. 객체의 리턴값으로 리턴 할수 있어야 한다.)

*/

digits = "";
for (var i = 0; i < 10; i++) {
  digits += i;
}
console.log(digits);

randomChars = "";
for (var i = 0; i < 8; i++) {
  randomChars += String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
}
console.log(randomChars);

function joinString(n, f) {
  var s = "";
  for (var i = 0; i < n; i++) {
    s += f(i);
  }
  return s;
}

var digits = joinString(10, function (i) {
  return i;
});
var rchar = joinString(8, function (i) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
});
console.log(digits);
console.log(rchar);

/*
8.9.3 메모이제이션
 */

function memorization(f) {
  var cache = {};
  return function (x) {
    if (cache[x] == undefined) cache[x] = f(x);
    return cache[x];
  };
}

function isPrime(n) {
  if (n < 2) return false;
  var m = Math.sqrt(n);
  for (var i = 2; i <= m; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
var isPrime_m = memorization(isPrime);
var N = 1000;
for (var i = 2; i <= N; i++) isPrime_m(i);
for (var i = 2; i + 2 <= N; i++) {
  if (isPrime_m(i) && isPrime_m(i + 2)) console.log(i + " " + (i + 2));
}

function memorize(f) {
  var c = {};
  return function (x) {
    if (c[x] == undefined) c[x] = f(x);
    return c[x];
  };
}
var fibo = memorize(function (n) {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
});
for (var i = 0; i <= 20; i++) {
  console.log((" " + i).slice(-2) + " : " + fibo(i));
}

function memorize(f) {
  var ca = {};
  return function () {
    var key = "";
    for (var i = 0; i < arguments.length; i++) key += arguments[i] + ",";
    if (ca[key] == undefined) ca[key] = f.apply(null, arguments);
    return ca[key];
  };
}
