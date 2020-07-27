var tom = { name: 'tom' };
console.log(Object.getOwnPropertyDescriptor(tom, 'name'));
console.log(Object.getOwnPropertyDescriptor({}, 'name'));
console.log(Object.getOwnPropertyDescriptor(tom, 'toString'));

var obj = {};
Object.defineProperty(obj, 'name', {
  value: 'tom',
  writable: true,
  enumerable: false,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

var person = { name: 'tom' };
Object.defineProperty(person, 'name', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
person.name = 'Huck';
console.log(person.name);

var person = {
  name: 'tom',
  age: 17,
  sayHello: function () {
    console.log('hello! ' + this.name);
  },
};
Object.defineProperty(person, 'sayHello', {
  enumerable: false,
});
for (var p in person) console.log(p);

var person = {
  name: 'tom',
  age: 17,
  sex: '남',
};
Object.defineProperty(person, 'age', {
  configurable: false,
});
delete person.age;
console.log(person.age);
// Object.defineProperty(person, 'age', {   // TypeError: Cannot redefine property: age
//   enumerable: false,
// });
Object.defineProperty(person, 'age', {
  writable: false,
});

var person = Object.defineProperties(
  {},
  {
    _name: {
      value: 'tom',
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
console.log(Object.getOwnPropertyDescriptor(person, '_name'));

var group = {
  gruopName: 'Tennis circle',
  sayGroupName: function () {
    console.log('belong to ' + this.gruopName);
  },
};
var person = Object.create(group, {
  name: {
    value: 'tom',
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
console.log(person.gruopName);
person.sayGroupName();
person.sayName();
