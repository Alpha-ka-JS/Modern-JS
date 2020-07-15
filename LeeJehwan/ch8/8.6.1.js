function makeCounter() {
  var count = 0;
  return f;
  function f() {
    return count++;
  }
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
console.log(counter2());

function makeCounter2() {
  var count = 0;
  return function () {
    return count++;
  };
}

var counter3 = makeCounter2();
console.log(counter3());
console.log(counter3());
console.log(counter3());

function Person(name, age) {
  var _name = name;
  var _age = age;
  return {
    getName: function () {
      return _name;
    },
    getAge: function () {
      return _age;
    },
    setAge: function (x) {
      _age = x;
    },
  };
}

var person = Person('Tom', 18);
console.log(person.getName());
console.log(person.getAge());
person.setAge(19);
console.log(person.getAge());

function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

var multi2 = makeMultiplier(2);
var multi10 = makeMultiplier(10);
console.log(multi2(3));
console.log(multi10(3));

function Primes(n) {
  var p = [];
  for (var i = 2; i <= n; i++) p[i] = true;
  var max = Math.floor(Math.sqrt(n));
  var x = 2;
  while (x <= max) {
    for (var i = 2 * x; i <= n; i += x) p[i] = false;
    while (!p[++x]);
  }
  var primes = [];
  var nprimes = 0;
  for (var i = 2; i <= n; i++) {
    if (p[i]) primes[nprimes++] = i;
  }
  p = null;

  return function (m) {
    for (var i = 0, product = 1; i < m; i++) {
      product *= primes[Math.floor(Math.random() * nprimes)];
    }
    return product;
  };
}

var primeProduct = Primes(100000);
console.log(primeProduct(2));
console.log(primeProduct(2));
