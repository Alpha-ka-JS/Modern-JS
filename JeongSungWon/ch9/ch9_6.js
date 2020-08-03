//9.6.1 for/in 문
var person1 = { name: 'Tom', age: 17 };
var person2 = Object.create(person1);
person2.name = 'Huck';
for (var p in person2) console.log(p);

var a = [0, 2, 4, 6, 8];
a.name = 'evens';
for (var i in a) console.log(i);

//9.6.2 Object.keys 메서드
//프로퍼티 이름만 배열로 만듦
var group = { groupName: 'Tennis circle' };
var person = Object.create(group);
person.name = 'Tom';
person.age = 17;
person.sayHello = function () {
  console.log('Hello! ' + this.name);
};
Object.defineProperty(person, 'sayHello', { enumerable: false });
console.log(Object.keys(person));

//9.6.3 Object.getOwnPropertyNames 메서드
// 인수로 지정한 객체가 소유한 프로퍼티 이름을 배열로 만듦
console.log(Object.getOwnPropertyNames(person));
