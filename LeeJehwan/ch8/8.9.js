digits = "";
for (var i = 0; i < 10; i++) {
  digits += i;
}
console.log(digits);

randomChars = "";
for (var i = 0; i < 8; i++) {
  randomChars += String.fromCharCode(
    Math.floor(Math.random() * 26) + "a".charCodeAt(0)
  );
}
console.log(randomChars);

function joinStrings(n, f) {
  var s = "";
  for (var i = 0; i < n; i++) {
    s += f(i);
  }
  return s;
}

var digits = joinStrings(10, function (i) {
  return i;
});
var randomChars = joinStrings(8, function (i) {
  return String.fromCharCode(
    Math.floor(Math.random() * 26) + "a".charCodeAt(0)
  );
});
console.log(digits);
console.log(randomChars);

function memorize(f) {
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
var isPrime_memo = memorize(isPrime);
var N = 1000;
for (var i = 2; i <= N; i++) isPrime_memo(i);

for (var i = 2; i + 2 <= N; i++) {
  if (isPrime_memo(i) && isPrime_memo(i + 2)) console.log(i + "," + (i + 2));
}

var fibonacci = memorize(function (n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});
for (var i = 0; i <= 20; i++) {
  console.log((" " + i).slice(-2) + ":" + fibonacci(i));
}

function memo2(f) {
  var cache = {};
  return function () {
    var key = "";
    for (var i = 0; i < arguments.length; i++) key += arguments[i] + ",";
    if (cache[key] == undefined) cache[key] = f.apply(null, arguments);
    return cache[key];
  };
}

var fibonacci2 = memo2(function (n) {
  if (n < 2) return n;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
});
for (var i = 0; i <= 20; i++) {
  console.log((" " + i).slice(-2) + ":" + fibonacci2(i));
}

var isPrime_memo2 = memo2(isPrime);
var N = 1000;
for (var i = 2; i <= N; i++) isPrime_memo2(i);

for (var i = 2; i + 2 <= N; i++) {
  if (isPrime_memo2(i) && isPrime_memo2(i + 2)) console.log(i + "," + (i + 2));
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

var square = function (x) {
  return x * x;
};
var add1 = function (x) {
  return x + 1;
};
var h = compose(square, add1);
console.log(h(2));

function compose2(f, g) {
  return function () {
    return f.call(this, g.apply(this, arguments));
  };
}
var h2 = compose2(square, add1);
console.log(h(2));
