//8.11.1 화살표 함수 표현식으로 함수 정의하기
var square = function (x) {
  return x * x;
};
var square = (x) => {
  return x * x;
};

var f = (x, y, z) => {};
var square = (x) => {
  return x * x;
};
var f = () => {};

var f = (a, b) => ({ x: a, y: b });
console.log(((x) => x * x)(3));

//this의 값이 함수를 정의할때 결정
var obj = {
  say: function () {
    console.log(this);
    var f = function () {
      console.log(this);
    };
    f();
    var g = () => console.log(this);
    g();
  },
};
obj.say();

var f = function () {
  console.log(this.name);
};
var g = () => console.log(this.name);
var tom = { name: 'Tom' };
f.call(tom);
g.call(tom);

//arguments 변수가 없다.
var f = () => console.log(arguments);
f();

// 생성자 사용 X
// var Person = (name, age) => { this.name = name; this.age = age;};
// var tom = new Person("Tom",17);

function f(a, b, ...args) {
  console.log(a, b, args);
}
f(1, 2, 3, 4, 5, 6);

var sum1 = (...args1) => {
  for (var i = 0, s = 0; i < args1.length; i++) s += args1[i];
  return s;
};
sum1(1, 2, 3, 4, 5);

function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(3));
console.log(multiply(3, 2));

//8.11.3
var a = [5, 4, 3];
a.forEach(function (val) {
  console.log(val);
});

var a = [5, 4, 3];
var iter = a[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

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
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

var a = [5, 4, 3];
var iter = a[Symbol.iterator]();
while (true) {
  var iteratorResult = iter.next();
  if (iteratorResult.done == true) break;
  var v = iteratorResult.value;
  console.log(v);
}

console.log('of 실행');
for (var v of a) console.log(v);
console.log('in 실행');
for (var v in a) console.log(v);

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
  while (from <= to) yield from++;
}
var iter = createNumbers(10, 20);
for (var v of iter) console.log(v);

function* fibonacci1() {
  var fn1 = 0,
    fn2 = 1;
  while (true) {
    var fnew = fn1 + fn2;
    fn1 = fn2;
    fn2 = fnew;
    reset = yield fn1;
    if (reset) {
      fn1 = 0;
      fn2 = 1;
    }
  }
}
var iter = fibonacci1();
for (var i = 0; i < 10; i++) {
  console.log(iter.next().value);
}
console.log(iter.next().value);
console.log(iter.next(true).value);
console.log(iter.next().value);
console.log(iter.next().value);

function* g3() {
  yield 1;
  yield 2;
  yield 3;
}
var iter1 = g3();
console.log(iter1.next());
console.log(iter1.return(10));
console.log(iter1.next());

function* idMaker() {
  var count = 0;
  while (true) {
    try {
      yield count++;
    } catch (e) {
      console.log('오류가 발생');
    }
  }
}
var iter = idMaker();
console.log(iter.next());
console.log(iter.next());
iter.throw(new Error('오류'));

function* f1() {
  yield 'X';
  yield 'Y';
}
function* g1() {
  yield 0;
  yield* [2, 4];
  yield* 'AB';
  yield* f1();
}
var iter = g1();
for (var v of iter) console.log(v);

function htmlEscape(strings, ...values) {
  var result = strings[0];
  for (var i = 0; i < values.length; i++) {
    result += escape(values[i]) + strings[i + 1];
  }
  return result;
  function escape(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/'/g, '&#039;')
      .replace(/"/g, '&quot;')
      .replace(/`/g, '&#096;');
  }
}
var userinput = "<script>altert('test);</script>";
var message = htmlEscape`<p>${userinput}</p>`;
console.log(message);
