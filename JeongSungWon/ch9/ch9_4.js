//9.4.1 프로퍼티의 속성
/*
데이터 프로퍼티 : 값, 쓰기 가능, 열거 가능, 재정의 가능
접근자 프로퍼티 : 읽기(getter), 쓰기(setter), 열거 가능, 재정의 가능
*/

const { check } = require('prettier');

//9.4.2 프로퍼티 디스크립터와 프로퍼티를 읽고 쓰는 메서드
/*
프로퍼티 디스크립터 : 프로퍼티의 속성 값을 뜻하는 객체

데이터 프로퍼티의 프로퍼티 디스크립터{
    value: 프로퍼티의 값,
    writable: 논리값,
    enumerable: 논리값,
    configurable: 논리값
}
접근자 프로퍼티의 프로퍼티 디스크립터{
    get: getter함수값,
    set: setter함수값,
    enumerable: 논리값,
    configurable: 논리값
}
*/

//프로퍼티 디스크립터 가져오기
//첫번째 인수: 객체의 참조, 두번째 인수: 프로퍼티 이름
var tom = { name: 'Tom' };
Object.getOwnPropertyDescriptor(tom, 'name'); //{value: 'Tom', writalbe: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor({}, 'name');
Object.getOwnPropertyDescriptor(tom, 'toString');

//객체의 프로퍼티 설정하기
//첫번째 인수: 객체의 참조, 두번째 인수: 프로퍼티 이름을 뜻하는 문자열, 세번째 인수: 프로퍼티 디스크립터의 참조
var obj = {};
Object.defineProperty(obj, 'name', {
  value: 'Tom',
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.getOwnPropertyDescriptor(obj, 'name');

//프로퍼티의 쓰기 가능 속성 바꾸기
var person = { name: 'Tom' };
Object.defineProperty(person, 'name', {
  writable: false,
});
Object.getOwnPropertyDescriptor(person, 'name');
person.name = 'Huck';
console.log(person.name);

//프로퍼티의 열거 가능 속성 바꾸기
var person = {
  name: 'Tom',
  age: 17,
  sayHello: function () {
    console.log('Hello! ' + this.name);
  },
};
Object.defineProperty(person, 'sayHello', { enumerable: false });
for (var p in person) console.log(p);

//프로퍼티의 재정의 가능 속성 바꾸기
var person = { name: 'Tom', age: 17, sex: '남' };
Object.defineProperty(person, 'age', { configurable: false });
delete person.age;
console.log(person.age);
//Object.defineProperty(person, 'age', { enumerable: false }); //재정의 불가
Object.defineProperty(person, 'age', { writable: false });
// Q. configurable이 false일 때, 왜 writable만 속성 값이 true일 때 false로 바꿀수 있나?

//객체의 프로퍼티 속성 여러 개를 한꺼번에 설정하기
var person = Object.defineProperties(
  {},
  {
    _name: {
      value: 'Tom',
      writable: true,
      enumerable: true,
      configurable: true,
    },
    name: {
      get: function () {
        return this._name;
      },
      set: function (value) {
        var str = value.charAt(0).toUpperCase() + value.substring(1);
        this._name = str;
      },
      enumerable: true,
      configurable: true,
    },
  }
);
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

//9.4.3 Object.create의 두 번째 인수
var group = {
  groupName: 'Tennis circle',
  sayGroupName: function () {
    console.log('belong to ' + this.groupName);
  },
};
var person = Object.create(group, {
  name: {
    value: 'Tom',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 18,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  sayName: {
    value: function () {
      console.log("I'm " + this.name);
    },
    writable: true,
    enumerable: false,
    configurable: true,
  },
});
console.log(person);
console.log(person.groupName);
person.sayGroupName();
person.sayName();
