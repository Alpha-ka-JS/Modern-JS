//9.5 프로퍼티가 있는지 확인하기
// 자바스크립트는 객체를 생서한 후에 프로퍼티를 추가하거나 제거할 수 있으므로 객체에 포함된 프로퍼티가 동적으로 바뀐다.
// 실행하는 시점에 따라 객체에 원하는 프로퍼티가 있는지를확인해야할 수도 있음.

//9.5.1 in 연산자
var person = { name: 'eunjoung' };
console.log('name' in person); //T
console.log('age' in person); //F
console.log('toString' in person); //T

//9.5.2 hasOwnPropery 메서드
//객체가 소유한 프로퍼티면 true 상속받은 프로퍼티면 false
var person = { name: 'Tom' };
console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('toString'));

//9.5.3 propertylsEnumerable
//지정한 프로퍼티가 객체가 소유한 프로퍼티이며 열거할 수 있을때  true
var person1 = { name: 'Tom', age: 17 };
var person2 = Object.create(person1);
person2.name = 'Choi';
console.log(person2.propertyIsEnumerable('name')); //소유 ㅇ
console.log(person2.propertyIsEnumerable('age')); //상속 안됨
console.log(Object.prototype.propertyIsEnumerable('toString')); // 열거안되는 속성
