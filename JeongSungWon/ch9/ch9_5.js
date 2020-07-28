//9.5.1 in 연산자
//검색 대상은 객체가 소유한 프로퍼티와 상속받은 프로퍼티
var person = { name: 'Tom' };
console.log('name' in person);
console.log('age' in person);
console.log('toString' in person);

//9.5.2 hasOwnProperty 메서드
//객체가 소유한 프로퍼티 true, 상속받으면 false
console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('toString'));

//9.5.3 propertyIsEnumerable 메서드
var person1 = { name: 'Tom', age: 17 };
var person2 = Object.create(person1);
person2.name = 'Huck';
console.log(person2.propertyIsEnumerable('name'));
console.log(person2.propertyIsEnumerable('age'));
console.log(Object.propertyIsEnumerable('toString'));
