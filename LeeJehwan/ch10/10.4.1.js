var [a, b] = [1, 2];
console.log(a, b);
[a, b] = [2 * a, 3 * b];
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

[a, b, c] = [1, 2];
console.log(a, b, c);
[a, b] = [1, 2, 3];
console.log(a, b);
[, a, , b] = [1, 2, 3, 4];
console.log(a, b);

var array, first, second;
array = [first, second] = [1, 2, 3, 4];
console.log(array, first, second);

[a, b, ...rest] = [1, 2, 3, 4];
console.log(a, b, rest);

[a = 0, b = 1, c = 2] = [1, 2];
console.log(a, b, c);

function rotation(x, y, theta) {
  var s = Math.sin(theta);
  var c = Math.cos(theta);
  console.log(s, c);
  return [c * x - s * y, s * y + c * y];
}

var [a, b] = rotation(1, 2, Math.PI / 3);
console.log(a, b);

var { a: x, b: y } = { a: 1, b: 2 };
console.log(x, y);

var obj = { a: y, b: x };
var { a: x, b: y } = obj;
console.log(x, y);

var obj = { a: 1, b: 2, c: 3 };
var { a: x, b: y } = obj;
console.log(x, y);

var { sin: sin, cos: cos, tan: tan, PI: PI } = Math;
console.log(sin, cos, tan, PI);

var { a: x = 1, b: y = 2, c: z = 3 } = { a: 2, b: 4 };
console.log(x, y, z);

var { a, b } = { a: 1, b: 2 };
console.log(a, b);
var { sin, cos, tan, PI } = Math;
console.log(sin, cos, tan, PI);

var { a = 1, b = 2, c = 3 } = { a: 2, b: 4 };
console.log(a, b, c);

var [a, b, c] = 'ABC';
console.log(a, b, c);
function* createNumbers(from, to) {
  while (from < to) yield from++;
}
var [a, b, c, d, e] = createNumbers(10, 15);
console.log(a, b, c, d, e);

var [a, [b, c]] = [1, [2, 3]];
console.log(a, b, c);
var {
  a: x,
  b: { c: y, d: z },
} = { a: 1, b: { c: 2, d: 3 } };
console.log(x, y, z);
var person = { name: 'tom', age: 17, hobby: ['tennis', 'music'] };
var {
  name,
  age,
  hobby: [hobby1],
} = person;
console.log(name, age, hobby1);

console.log([...'abc']);
console.log([1, ...[2, 3, 4], 5]);
console.log(...[1, 2, 3]);

function* createNumbers(from, to) {
  while (from < to) yield from++;
}
var iter = createNumbers(10, 15);
console.log(iter);
console.log([...iter]);

var a = ['a', 'b', 'c'];
a.push(...['d', 'e']);
console.log(a);

var a = [5, 2, 3, 7, 1];
console.log(Math.max(...a));

var buffer = new ArrayBuffer(1024);
console.log(buffer.byteLength);

var a = new Int8Array(10);
console.log(a.length);
console.log(a.BYTES_PER_ELEMENT);
console.log(a[0]);
console.log(a);

var buffer = new ArrayBuffer(100);
var a = new Int16Array(buffer);
console.log(a.length);

var a = new Int16Array(10);
for (var i = 0; i < 10; i++) a[i] = i;
var b = new Int16Array(a);
console.log(a);
console.log(a === b);
console.log(a == b);

var a = [1, 2, 3, 4, 5];
var b = new Float64Array(a);
console.log(b);

var a = new Uint8Array([0, 1, -1]);
for (var v of a) console.log(v);

var a = new Int8Array(10);
var buffer = a.buffer;
console.log(buffer.byteLength);

var buffer = new ArrayBuffer(16);
var a_unit8 = new Uint8Array(buffer);
var a_unit16 = new Uint16Array(buffer);
var a_unit32 = new Uint32Array(buffer);
var a_float64 = new Float64Array(buffer);

a_unit8[0] = 170;
a_unit8[1] = 204;
console.log(buffer);
console.log(a_unit16[0]);

var buffer = new ArrayBuffer(16);
var a = new Int8Array(buffer, 2, 5);
console.log(a.byteLength);

buffer = new ArrayBuffer(24);
var person = {
  id: new Uint32Array(buffer, 0, 1),
  name: new Uint8Array(buffer, 4, 16),
  weight: new Float32Array(buffer, 20, 1),
};
console.log(person);

var map = new Map();
console.log(map);

var zip = new Map([
  ['tom', '131-5555'],
  ['huck', '1234-242'],
]);
console.log(zip);

function* makeZip() {
  yield ['tom', '131-5555'];
  yield ['huck', '1234-242'];
}
var zips = makeZip();
zip = new Map(zips);
console.log(zip);

console.log(zip.size);

var zip = new Map();
zip.set('tom', '1234');
zip.set('huck', '5678');
console.log(zip);
zip.set('tom', '14');
console.log(zip);

console.log(zip.get('tom'));
console.log(zip.has('tom'));
console.log(zip.has('tom2'));
zip.delete('huck');
console.log(zip);
zip.clear();
console.log(zip);

var zip = new Map([
  ['tom', '131-5555'],
  ['huck', '1234-242'],
]);
zip.set('a', '123');
var iter = zip.keys();
console.log(iter);
for (var v of iter) console.log(v);

var iter = zip.values();
console.log(iter);
for (var v of iter) console.log(v);

var iter = zip.entries();
console.log(iter);
for (var v of iter) console.log(v);

for (var v of zip) console.log(v);
for (var [key, value] of zip) console.log(key, value);

zip.forEach((val, key, map) => {
  console.log(key + ' => ' + val);
});

var set = new Set();
console.log(set);

var zip = new Set(['131-5555', '1234-242']);
console.log(zip);
zpis = makeZip();
zip = new Set(zips);
console.log(zip);

var zip = new Set();
zip.add('1');
zip.add('2');
zip.add(2);
zip.add(2);
console.log(zip);

console.log(zip.has(2));
console.log(zip.has(3));
zip.delete(2);
console.log(zip);
zip.clear();
console.log(zip);

var zip = new Set([1, 2]);
var iter = zip.keys();
for (var v of iter) console.log(v);

var iter = zip.entries();
for (var v of iter) console.log(v);

var iter = zip.keys();
for (var v of zip) console.log(v);

zip.forEach((v1, v2, map) => {
  console.log(v1 + ' => ' + v2);
});
