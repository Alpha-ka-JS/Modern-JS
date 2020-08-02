var obj = {};
var s = Symbol('heart');
obj[s] = 3;
console.log(obj);

var obj2 = { [Symbol('heart')]: 3 };
console.log(obj2);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

Array.prototype[Symbol.for('shuffle')] = function () {
  var a = this;
  var m = a.length;
  var i, t;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = a[m];
    a[m] = a[i];
    a[i] = t;
  }
  return this;
};

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[Symbol.for('shuffle')]());
console.log(array[Symbol.for('shuffle')]());
console.log(array[Symbol.for('shuffle')]());

var prop = 'name',
  i = 1;
var obj = { [prop + i]: 'Tom' };
console.log(obj);

var obj = { [Symbol('heart')]: 'A' };
console.log(obj);

var prop = 2;
var test = 't33';
var obj = { prop, test };
console.log(obj);

var person = {
  name: 'Tom',
  sayHello() {
    console.log('hello' + this.name);
  },
};
person.sayHello();

var obj = {
  *range(n) {
    for (var i = 0; i < n; i++) yield i;
  },
};
var it = obj.range(10);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
