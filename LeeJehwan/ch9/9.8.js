function mixin(target, source) {
  for (var property in source) {
    if (source.hasOwnProperty(property)) {
      target[property] = source[property];
    }
  }
  return target;
}

var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var obj = mixin(obj1, obj2);
console.log(obj);
//check obj1
console.log(obj1);

var person1 = {
  _name: 'tom',
  get name() {
    return this._name;
  },
};

var person2 = {};
mixin(person2, person1);
person2.name = 'huck';
console.log(person2.name);
console.log(person2);
console.log(person1);

function mixin2(target, source) {
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    var descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
    Object.defineProperty(target, keys[i], descriptor);
  }
  return target;
}
var person3 = {};
mixin2(person3, person1);
person3.name = 'huck';
console.log(person3.name);
console.log(person3);

// check this example
var obj1 = {
  name: 1,
  arr: [1, 2, 3],
};
var obj2 = {};
mixin2(obj2, obj1);
console.log(obj2);
obj2.arr.push(4);
console.log(obj2);
console.log(obj1);
