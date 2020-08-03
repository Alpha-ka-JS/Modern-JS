//9.7.1 확장 가능 속성
/*
객체의 확장 가능 속성 true - 새로운 프로퍼티 추가
                     false - 객체 추가 안됨
*/

const { check } = require('prettier');

//9.7.2 확장 방지 : Object.preventExtensions 메서드
//인수로 받은 객체를 확장 못하게 함.
var person = { name: 'Tom' };
Object.preventExtensions(person);
person.age = 17;
console.log('age' in person);
console.log(Object.isExtensible(person));

//9.7.3 밀봉 : Object.seal 메서드
//객체 프로퍼티 추가 막음, 재정의 금지
var person1 = { name: 'Tom' };
Object.seal(person1);
person1.age = 17;
delete person1.name;
//Object.defineProperty(person1, 'name', { enumerable: false }); -> strict 모드
console.log('name' in person1);
console.log('age' in person1);
console.log(Object.getOwnPropertyDescriptor(person1, 'name'));
person1.name = 'Huck';
console.log(person1);

//9.7.4 동결 : Object.freeze 메서드
//객체에 프로퍼티 추가 금지, 재정의 금지, 데이터 프로퍼티를 쓸 수 없게 함
//객체의 프러퍼티는 읽기만 가능
var person2 = { name: 'Tom' };
Object.freeze(person2);
console.log(Object.isFrozen(person2));
