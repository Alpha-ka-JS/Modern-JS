//9.4 프로퍼티의 속성
/* 9.4.1 프로퍼티의 속성 
프로퍼티는 프로퍼티 이름과 값이 한쌍을 이루는 것이나 별개로 내부적 속성을 가지고 있다. 

쓰기 기능 writable : 쓰기 가능인지 true면 프로퍼티 수정 가능
열거가능 enumerable : 프로퍼티가 for/in문이나 object,keys등 반복문으로 찾을수 있는 대상인지
재정의 기능 configurable : 내부 속성을 수정할 수 있는지 treu면 delete연산자로 프로퍼티를 제거할 수 있고 
프로퍼티가 가진 내부 속성을 수정 가능하다. 
-> 내장 생성자가 가진 프로토타입 객체의 프로퍼티는 쓰기가능 열거불가능 재정의 가능임

9.4.2 프로퍼티 디스크립터와 프로퍼티를 읽고 쓰는 메서드 
프로퍼티 속성은 프로퍼티 디스크립터로 설정할 수 있다.
프로퍼티 디스크립터 : 플고퍼티의 속성값
-데이터 프로퍼티
{value : 값,
writable :논리값,
enumerable :논리값,
configurable : 논리값
}
-접근자 프로퍼티
{get :getter함수 값,
set :setter 함수논리값,
enumerable :논리값,
configurable : 논리값
} 
*/

//프로퍼티 디스크립터 가져오기 :Object.getOwnPropertyDescriptor
var tom = { name: 'Tom' };
console.log(Object.getOwnPropertyDescriptor(tom, 'name'));

//아래는 undefined -> 상속받은 프로퍼티나 없는 프로퍼티를 지정시
console.log(Object.getOwnPropertyDescriptor({}, 'name'));
console.log(Object.getOwnPropertyDescriptor(tom, 'toString'));

//객체 프로퍼티 설정하기 : Object.defineProperty
var obj = {};
Object.defineProperty(obj, 'name', {
  value: 'eunjoung',
  writable: true,
  enumerable: false,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

var person = { name: 'eunjoung' };
Object.defineProperty(person, 'name', {
  writable: false,
});
person.name = 'Choi';
console.log(person.name); //eunjoung

var person = {
  name: 'kate',
  age: 20,
  sayHello: function () {
    console.log('hello ' + this.name);
  },
};
Object.defineProperty(person, 'sayHello', { enumerable: true });
for (var p in person) console.log(p);

var person = { name: 'Tom', age: 20, sex: '남' };
//Object.defineProperty(person, 'age', { configurable: false });
//TypeError: Cannot redefine property: age
delete person.age;
console.log(person.ageobjec);
Object.defineProperty(person, 'age', { enumerable: false });
Object.defineProperty(person, 'age', { writable: false });

//객체의 프로퍼티 속성 여러개 한꺼번에 설정하기 :Object.defineProperties
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

//9.4.3 Object.create 두번째 인수
var group = {
  groupName: 'Tennis circle',
  sayGroupName: function () {
    console.log('beling to ' + this.groupName);
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
      console.log('Je suis ' + this.name);
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
