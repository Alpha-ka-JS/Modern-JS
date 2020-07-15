var s = 'ABC';
console.log(typeof s);
console.log(typeof s);
console.log(typeof 12);
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof 'ABC');
console.log(typeof 'a');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol('heart'));
console.log(typeof [1, 2, 3]);
console.log(typeof String('a'));
console.log(typeof Number(1));
console.log(typeof { x: 2 });
console.log(
  typeof function (x) {
    return ++x;
  }
);

var a = 3;
var parity = a % 2 == 0 ? '짝수' : '홀수';
console.log(parity);

var a = 2;
var parity = a % 2 == 0 ? '짝수' : '홀수';
console.log(parity);

var i = 0,
  sum = 0,
  product = 1;
console.log(i, sum, product);
console.log((i = 0), (sum = 0), (product = 1));

var x = 1;
eval('x++');
console.log(x);

var formula = 'x*x';
eval('function f(x) { return ' + formula + '; }');
console.log(f(5));
