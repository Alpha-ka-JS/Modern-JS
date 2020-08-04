var person = { name: 'tom' };
Object.preventExtensions(person);
person.age = 17;
console.log('age' in person);

console.log(Object.isExtensible(person));

var person2 = { name: 'tom' };
Object.seal(person2);
person2.age = 17;
delete person2.name;
// Object.defineProperty(person2, 'name', { enumerable: false });
console.log('name' in person2);
console.log('age' in person2);
console.log(Object.getOwnPropertyDescriptor(person2, 'name'));
person2.name = 'huck';
console.log(person2);
console.log(Object.isSealed(person2));

var person3 = { name: 'tom' };
Object.freeze(person3);

console.log(Object.isFrozen(person));
person3.name = 'huck';
person3.age = 17;
console.log(person3);
