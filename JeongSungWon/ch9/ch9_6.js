//9.6.1 for/in 문
var person1 = { name: 'Tom', age: 17 };
var person2 = Object.create(person1);
person2.name = 'Huck';
for (var p in person2) console.log(p);

var a = [0, 2, 4, 6, 8];
a.name = 'evens';
for (var i in a) console.log(i);

//9.6.2 Object.keys 메서드
var group = { groupName: 'Tennis circle' };
var person = Object.create(group);
person.name = 'Tom';
person.age = 17;
person.sayHello = function () {
  console.log('Hello! ' + this.name);
};
Object.defineProperty(person, 'sayHello', { enumerable: false });
console.log(Object.keys(person));

console.log(Object.getOwnPropertyNames(person));
