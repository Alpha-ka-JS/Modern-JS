digits = '';
for (var i = 0; i < 10; i++) {
  digits += i;
}
console.log(digits);

randomChars = '';
for (var i = 0; i < 8; i++) {
  randomChars += String.fromCharCode(
    Math.floor(Math.random() * 26) + 'a'.charCodeAt(0)
  );
}
console.log(randomChars);

function joinStrings(n, f) {
  var s = '';
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
    Math.floor(Math.random() * 26) + 'a'.charCodeAt(0)
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
  if (isPrime_memo(i) && isPrime_memo(i + 2)) console.log(i + ',' + (i + 2));
}

var fibonacci = memorize(function (n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});
for (var i = 0; i <= 20; i++) {
  console.log((' ' + i).slice(-2) + ':' + fibonacci(i));
}

function memo2(f) {
  var cache = {};
  return function () {
    var key = '';
    for (var i = 0; i < arguments.length; i++) key += arguments[i] + ',';
    if (cache[key] == undefined) cache[key] = f.apply(null, arguments);
    return cache[key];
  };
}

var fibonacci2 = memo2(function (n) {
  if (n < 2) return n;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
});
for (var i = 0; i <= 20; i++) {
  console.log((' ' + i).slice(-2) + ':' + fibonacci2(i));
}

var isPrime_memo2 = memo2(isPrime);
var N = 1000;
for (var i = 2; i <= N; i++) isPrime_memo2(i);

for (var i = 2; i + 2 <= N; i++) {
  if (isPrime_memo2(i) && isPrime_memo2(i + 2)) console.log(i + ',' + (i + 2));
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
var add2 = function (x, y) {
  return x + y;
};
var h2 = compose2(square, add2);
console.log(h2(2, 3));

function product(x, y) {
  return x * y;
}

product2 = function (y) {
  return product(2, y);
};
console.log(product2(3));
product3 = product.bind(null, 2);
console.log(product3(3));

function partial(f) {
  var args = arguments;
  return function () {
    var a = Array.prototype.slice.call(args, 1);
    for (var i = 0, j = 0; i < a.length; i++) {
      if (a[i] == undefined) a[i] = arguments[j++];
    }
    return f.apply(this, a);
  };
}

var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, 0.5);
var cubicroot = partial(Math.pow, undefined, 1 / 3);
var exp = partial(Math.pow, Math.E, undefined);

console.log(square(3));
console.log(sqrt(4));
console.log(cubicroot(27));
console.log(exp(0));

var pow = function (exponent) {
  return function (base) {
    return Math.pow(base, exponent);
  };
};

var square = pow(2);
var sqrt = pow(0.5);
var cubicroot = pow(1 / 3);

console.log(square(3));
console.log(sqrt(4));
console.log(cubicroot(27));

// 배열 요소에 대한 제곱 합의 제곱근
var sum = function (a, b) {
  return a + b;
};
var a = [1, 2, 3, 4];
var abs_a = pow(0.5)(a.map(pow(2)).reduce(sum));
// (1^2 + 2^2 + 3^2 + 4^2)^1/2
console.log(abs_a);
