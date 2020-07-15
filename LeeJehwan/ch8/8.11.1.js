var square = function (x) {
  return x * x;
};
console.log(square(3));

var square2 = (x) => {
  return x * x;
};
console.log(square2(3));

var square3 = (x) => {
  return x * x;
};
console.log(square3(3));

var square4 = (x) => x * x;
console.log(square4(3));

console.log(((x) => x * x)(3));

var obj = {
  say: function () {
    console.log(this);
    var f = function () {
      console.log(this);
    };
    var g = () => console.log(this);
    var h = function () {
      console.log(this);
    }.bind(this);

    f();
    g();
    h();
  },
};
obj.say();

var f = function () {
  console.log(this.name);
};
var g = () => console.log(this.name);
var tom = { name: 'tom' };
f.call(tom);
g.call(tom);

var f = () => console.log(arguments);
// f("te", "st");

var Person = (name, age) => {
  this.name = name;
  this.age = age;
};
// var tome = new Person("tom", 17); // TypeError: Person is not a constructor

function f2(a, b, ...args) {
  console.log(a, b, args);
}
f2(1, 2, 3, 4, 5, 6);

var sum = (...args) => {
  for (var i = 0, s = 0; i < args.length; i++) s += args[i];
  return s;
};
console.log(sum(1, 2, 3, 4, 5, 6));

function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(3));
console.log(multiply(3, 2));

var add = (a, b = a + 1) => a + b;
console.log(add(2));
console.log(add(2, 1));

var a = [5, 4, 3];
a.forEach(function (val) {
  console.log(val);
});
a.forEach((val) => {
  console.log(val);
});

var iter = a[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(typeof iter);

function makeIterator(array) {
  var index = 0;
  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

var iter = makeIterator(['A', 'B', 'C']);
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

var iter = a[Symbol.iterator]();
while (true) {
  var iteratorResult = iter.next();
  if (iteratorResult.done == true) break;
  var v = iteratorResult.value;
  console.log(v);
}

var a = [5, 4, 3];
for (var v of a) {
  console.log(v);
}

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var iter = gen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function* createNumbers(from, to) {
  while (from <= to) {
    yield from++;
  }
}
var iter = createNumbers(10, 20);
for (var v of iter) console.log(v);
