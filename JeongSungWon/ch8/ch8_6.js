//8.6.1 클로저
var a = 'A';
function f() {
  var b = 'B';
  function g() {
    var c = 'C';
    console.log(a + b + c);
  }
  /*
        함수 g()를 호출하면 렉시컬 환경 컴포넌트가 생성된다.
        g()의 렉시컬 환경 컴포넌트에는 
        함수 내부의 코드,
        f의 렉시컬 컴포넌트 참조, 
        전역객체의 참조가 저장된다
    */
  g();
}
f();

//8.6.2 클로저의 성질
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
/*
 디버깅을 하면 counter1 -> return f -> f() 로 실행 되는데
 왜 var count = 0은 실행이 안되는가?
*/
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());

//8.3.3 클로저를 이용한 예제
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
  //x : 2, 10의 배수
  return function (y) {
    // y : 입력
    return x * y;
  };
}
var multi2 = makeMultiplier(2);
var multi10 = makeMultiplier(10);
console.log(multi2(3));
console.log(multi10(3));
/*
출력할때의 인자가 어떻게 y로 되는지?
*/

function Primes(n) {
  var p = [];
  for (var i = 2; i <= n; i++) p[i] = true;
  var max = Math.floor(Math.sqrt(n));
  var x = 2;
  while (x <= max) {
    for (var i = 2 * x; i <= n; i += x) p[i] = false;
    while (!p[++x]);
  }

  var primes = [],
    nprimes = 0;
  for (var i = 2; i <= n; i++) if (p[i]) primes[nprimes++] = i;
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
