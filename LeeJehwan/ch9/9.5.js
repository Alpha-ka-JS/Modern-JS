var person = { name: 'tom' };
console.log('name' in person);
console.log('age' in person);
console.log('toString' in person);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('toString'));

var person1 = { name: 'tom', age: 17 };
var person2 = Object.create(person1);
person2.name = 'huck';
console.log(person2);
console.log(person2.propertyIsEnumerable('name'));
console.log(person2.propertyIsEnumerable('age'));
console.log(Object.prototype.propertyIsEnumerable('toString'));
console.log(Object.getOwnPropertyDescriptor(Object.__proto__, 'toString'));
