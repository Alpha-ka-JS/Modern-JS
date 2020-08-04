var person1 = { name: 'tom', age: 17 };
var person2 = Object.create(person1);
person2.name = 'Huck';
for (var p in person2) console.log(p);

var a = [0, 2, 4, 6, 8];
a.name = 'evens';
for (var i in a) console.log(i);

// 객체가 소유한 프로퍼티만 열거하는 방법
obj = person2;
for (var p in obj) {
  if (!obj.hasOwnProperty(p)) continue;
  console.log(p);
}

for (var p in obj) {
  if (typeof p === 'function') continue;
  console.log(p);
}

var group = { groupName: 'Tennis circle' };
var person = Object.create(group);
person.name = 'tom';
person.age = 17;
person.sayHello = function () {
  console.log('hello! ' + this.name);
};
Object.defineProperty(person, 'sayHello', { enumerable: false });
console.log(Object.keys(person));

var p = Object.keys(person);
for (var i = 0; i < p.length; i++) {
  console.log(p[i], person[p[i]]);
}

console.log(Object.getOwnPropertyNames(person));
