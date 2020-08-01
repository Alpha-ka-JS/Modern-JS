//9.10.1 프로퍼티 이름으로 심벌 사용하기
var obj = {};
var s = Symbol('heart');
obj[s] = 3;
console.log(obj);

var obj = { [Symbol('heart')]: 'A' };

//내장 생성자 prototype의 안전한 확장
Array.prototype[Symbol.for('shuffle')] = function () {
  var a = this;
  var m = a.length,
    t,
    i;
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
//계산된 프로퍼티 이름
var prop = 'name',
  i = 1;
var obj = { [prop + i]: 'Tom' };
console.log(obj);
var obj = { [Symbol('heart')]: 'A' };
console.log(obj);

//프로퍼티 정의의 약식 표기
var prop = 2;
var obj = { prop };
console.log(obj);

//메서드 정의의 약식 표기
var person = {
  name: 'Tom',
  //생성자 X, prototype 가지지 않으므로 new 연산자로 인스턴스 생성 X
  //super 키워드 사용 X
  sayHello() {
    console.log('Hello! ' + this.name);
  },
};

person.sayHello();

var person = {
  name: 'Tom',
  sayHello: function () {
    console.log('Hello! ' + this.name);
  },
};

//제너레이터 정의의 약식 표기
var obj = {
  *range(n) {
    for (var i = 0; i < n; i++) yield i;
  },
};
var it = obj.range(10);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
