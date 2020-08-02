//9.10 ECMAScript 6부터 추가된 객체의 기능
//9.10.1 프로퍼티 이름으로 심벌 사용하기
var obj = {};
var s = Symbol('heart');
obj[s] = 3;
console.log(obj); //{ [Symbol(heart)]: 3 }

var obj = { [Symbol('heart')]: 'A' };
console.log(obj);

// 함수 안에 심벌을 생성하여 속성 이름으로 사용하고 프로퍼티에 값을 할당하면 함수 바깥에서 프로퍼티를 읽거나 쓸 수 없다.
// 명시적으로 객체의 프로퍼티를 숨기긱가 가능함 ->for/in, Object.keys, Object.getOwnPropertyNames 로 찾아낼 수 없음
// 단 Object.getOwnPropertySymbols메서드 사용하면 프로퍼티 이름 목록을 가져올수는 있어서 완전 숨김은 안됨

// 심벌과 하위 호환성

//내장 생성자 prototype의 안전한 확장
// 일반적으로 Array나 Data등 기본생성자 프로토타입에 메서드를 추가해서 확장하는 방법은 권장되지 않음, 미래 추가될 메서드 이름과 겹칠수도 있음

Array.prototype[Symbol.for('shuffle')] = function () {
  var a = this;
  var m = a.length,
    t,
    i;
  console.log(m, t, i);
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = a[m];
    a[m] = a[i];
    a[i] = t;
  }
  return this;
};
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[Symbol.for('shuffle')]());

//9.10.2 객체 리터럴에 추가된 기능
//1. 계산된 프로퍼티 이름
var prop = 'name ',
  i = 1;
var obj = { [prop + i]: 'TOM' };
console.log(obj); //{ 'name 1': 'TOM' }
var obj = { [Symbol('heart')]: 'A' };
console.log(obj); //{ [Symbol(heart)]: 'A' }

//2. 프로퍼티 정의의 약식 {prop}
var prop = 2;
var obj = { prop };
console.log(obj); //{ prop: 2 }

//3. 메서드 정의의 약식 표기
var person = {
  name: 'Tom',
  sayHello() {
    console.log('hello' + this.name);
  },
};
person.sayHello();
var person = {
  name: 'Tom',
  sayHello: function () {
    console.log('hello' + this.name);
  },
};
// {method() {}} :생성자로 사용할 수 없다. 프로퍼티를 가지지 않으므로 new로 인스턴스 생성불가
// {method() {}} super 키워드를 사용할 수 있다

//4. 제너레이터 정의의 약식 표기 {*generator () {}}
var obj = {
  *range(n) {
    for (var i = 0; i < n; i++) yield i;
  },
};
var it = obj.range(10);
console.log(it.next().value); //0
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //9
console.log(it.next().value); //undefined
console.log(it.next().value); //undefined
