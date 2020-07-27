//8.6 클로저
/*
클로저 : 자기 자신이 정의된 환경에서 함수 안에 있는 자유 변수의 식별자 결정을 실행한다
함수 g의 함수 객체와 객체가 참조하는 렉시컬 환경 컴포넌트가 자유변수 a,b의 식별자 결정을 위한 자료구조
f가 호출되어 g를 평가하는 시점에 생성됨 
즉, 클로저는 함수 객체와 렉시컬 환경 컴포넌트의 집합!
함수g의 함수객체가 있는 동안 클로저 안의 모든 렉시컬 환경 컴포넌트를 함수 g의 함수 객체가 참조하므로 클로저는 가비지 컬렉션 대상이 되지 않음

*/
var a = 'A'; //자유변수
function f() {
  var b = 'B'; // 자유변수
  function g() {
    var c = 'C'; // 속박변수
    console.log(a + b + c);
  }
  g();
}
f(); //ABC

//8.6.2 클로저의 성질
function makeCounter() {
  //외부함수 makeCounter는 중첩 함수의 f의 참조를 반환
  var count = 0;
  return f;
  function f() {
    // 중첩함수 f는 외부함수 makeCounter의 지역변수 count를 참조
    return count++;
  }
}
//전역변수 counter가 f함수 객체를 간접적으로 참조하므로 가비지컬렉션 대상이 아님

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//클로저는 내부상태로 저장됨 -> 클로저는 캡슐화된 객체로 이해하면 된다!

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());

//익명함수버전
function makeCounter() {
  var count = 0;
  return function () {
    return count++;
  };
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

/* 클로저를 이해하기 위한 핵심 사항
1 외부함수를 호출하면 그 함수의 렉시컬 환경 컴포넌트가 생성됨 -> 그 안에 중첩된 함수의 객체를 생성해서 반환
-> 그 결과 외부 함수의 렉시컬 환경 컴포넌트를 참조하는 중첩함수가 정의한 클로저 생성
-> 외부 함수는 클로저를 생성하는 팩토리
2 외부함수가 속한 렉시컬 환경 컴포넌트는 클로저 내부 상태 자체 외부 함수 호출시 새롭게 생성
3 중첩함수의 함수객체가 있는 한 외부함수가 속한 렉시컬 환경 컴포넌트는 지워지지 않음 
외부함수의 객체가 사라져도 지워지지않는다
4 클로저 내부 상태는 외부로부터 은폐되어 있으며 중첩함수 안에서만 읽거나 쓸 수 있다. 
 */

//여러개의 내부 상태와 메서드를 가진 클로저
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

//함수팩토리 - 클로저를 활용해 다양한 매개변수를 받는 함수를 여러개 생성가능!
function makeMultiplier(x) {
  return function (y) {
    //중첨함수 참조
    return x * y;
  };
}

var multi2 = makeMultiplier(2);
var multi10 = makeMultiplier(10);
console.log(multi2(4)); //8
console.log(multi10(4)); //40

//초기화 기능이 추가된 함수 생성하기

//에라토스테네스의 체
function Primes(n) {
  var p = [];
  for (var i = 2; i <= n; i++) p[i] = true;
  var max = Math.floor(Math.sqrt(n));
  var x = 2;
  while (x <= max) {
    for (var i = 2 * x; i <= n; i += x) p[i] = false;
    while (!p[++x]);
  }
  //소수만 배열 primes에 저장
  var primes = [],
    nprimes = 0;
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
var primePdt = Primes(100000);
console.log(primePdt(2));
console.log(primePdt(2));
