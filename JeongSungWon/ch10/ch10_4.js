//10.4.1 비구조화 할당
var [a, b] = [1, 2];
[a, b] = [2 * a, 3 * b];
console.log(a);
console.log(b);
[a, b] = [b, a];
[a, b, c] = [1, 2];
console.log(a, b);
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
  var s = Math.sin(theta),
    c = Math.cos(theta);
  return [c * x - s * y, s * x + c * y];
}
var [a, b] = rotation(1, 2, Math.PI / 3);
console.log(a, b);

var { a: x, b: y } = { a: 1, b: 2 };
console.log(x, y);
//{a:x, b:y} = {a:y, b:x}; // 왜 안돼?
//{a: x, b: y} = {a: y, b:x};
var { sin: sin, cos: cos, tan: tan, PI: PI } = Math;

var { a: x = 1, b: y = 2, c: z = 3 } = { a: 2, b: 4 };
var { a = 1, b = 2, c = 3 } = { a: 2, b: 4 };
var [a, b, c] = 'ABC';
console.log(a, b, c);
function* createNumbers(from, to) {
  while (from <= to) yield from++; // yield는 이터러블 객체를 반환
}
var [a, b, c, d, e] = createNumbers(10, 15);
var [a, [b, c]] = [1, [2, 3]];
var {
  a: x,
  b: { c: y, d: z },
} = { a: 1, b: { c: 2, d: 3 } };
console.log(x, y, z);
var person = { name: 'Tom', age: 17, hobby: ['Tennis', 'Music'] };
var {
  name,
  age,
  hobby: [hobby1],
} = person;

//10.4.2 전개 연산자
/* ...은 전개연산자로 반복 가능한(이터러블한) 객체를 반환하는 표현식 앞에 표기하며
함수의 인수목록으로 펼칠 수 있음
*/
var iter = createNumbers(10, 15);
console.log([...iter]);
var a = ['A', 'B', 'C'];
a.push(...['D', 'E']);

var a = [5, 2, 3, 7, 1];
console.log(Math.max(...a));
console.log(Math.max(a)); // NAN

//10.4.3 ArrayBuffer와 형식화 배열
/*
ArrayBuffer 생성자는 메모리에 고정 길이를 가진 인접한 영역을 확보함
*/
var buffer = new ArrayBuffer(1024);
console.log(buffer.byteLength);
var copy = buffer.slice(3, 6);

/*
형식화 배열 

자바스크립트 배열은 Array 객체
장점 - 배열 요소의 추가, 삭제를 동적으로 가능 
     - 다양한 메서드 이용
단점 - 배열 요소를 읽고 쓰는 속도가 느림

형식화 배열은 ArrayBuffer가 확보한 버퍼를 데이터의 저장 장소로
이용하여 데이터의 빠른 읽기와 쓰기를 구현한 객체

형식화 배열과 일반 배열의 차이점
- 형식화 배열 요소의 개수는 제한적
- 형식화 배열은 길이가 고정되어 있으며 요소 추가, 삭제 안됨
- 형식화 배열은 Array.prototype 메서드 사용 X
                TypedArray.prototype 은 사용가능
- 형식화 배열 생성시 모든요소가 0으로 초기화 됨
*/
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
console.log(b);
console.log(a === b);
var a = [1, 2, 3, 4, 5];
var b = new Float64Array(a);
console.log(b);
console.log(a === b);
var a = new Uint8Array([0, 1, -1]);
for (var v of a) console.log(v);

var test = new Int8Array(1000);
test[0] = 100;
console.log(test[0]);
var test = new Int8Array([0, 1, 2, 3]);
console.log(test);

var a = new Int8Array(10);
var buffer = a.buffer;
console.log(buffer.byteLength);

var buffer = new ArrayBuffer(16);
var a_uint8 = new Uint8Array(buffer);
var a_uint16 = new Uint16Array(buffer);
var a_uint32 = new Uint32Array(buffer);
var a_float64 = new Float64Array(buffer);
console.log(a_uint16[0]);

var buffer = new ArrayBuffer(16);
var a = new Int8Array(buffer, 2, 5);
console.log(a.byteOffset);
buffer = new ArrayBuffer(24);
var person = {
  id: new Uint32Array(buffer, 0, 1),
  name: new Uint8Array(buffer, 4, 16),
  weight: new Float32Array(buffer, 20, 1),
};

//10.4.4 Map
/*
map과 Object 객체의 차이
- Map은 데이터를 수집하기 위한 다양한 메서드 존재
- Object의 key 는 문자열 , Map은 제한 없음
- Map은 해시 테이블을 활용하기에 검색 속도 빠름
- Map은 iterable하며 for/of문으로 순회하면 키와 값으로 구성된 배열 반환
- Map은 데이터 개수 size 프로퍼티로 구함, Object는 수동 계산
*/
var map = new Map();
console.log(map);
var zip = new Map([
  ['Tom', '131-8634'],
  ['Huck', '556-0022'],
]);
console.log(zip);

function* makeZip() {
  yield ['Tom', '131-8364'];
  yield ['Huck', '556-0022'];
}
var zips = makeZip();
zip = new Map(zips);
console.log(zip);
console.log(zip == zips);
console.log(zip.size);

var zip = new Map();
zip.set('Tom', '131-8634');
zip.set('Huck', '556-0022');
console.log(zip);

console.log(zip.get('Tom'));
console.log(zip.has('Tom'));
console.log(zip.has('Becky'));
zip.delete('Huck');
console.log(zip);
zip.clear();
console.log(zip);
var zip = new Map([
  ['Tom', '131'],
  ['Huck', '556'],
]);
var iter = zip.keys();
for (var v of iter) console.log(v);
for (var v of zip) console.log(v);
var iter = zip.values();
for (var v of iter) console.log(v);
var iter = zip.entries();
for (var v of iter) console.log(v);
for (var [key, value] of zip) console.log(key, value);

zip.forEach(function (value, key) {
  // 굳이 map 안써도 될거 같은데 왜? (value, key, map)
  console.log(key + ' => ' + value);
});

//10.4.5 Set
/*
Set은 중복되지 않는 유일한 데이터 수집
*/
var set = new Set();
console.log(set);
var zip = new Set(['131-8634', '556-0022']);
function* makeZip1() {
  yield '131-8634';
  yield '556-0022';
}
var zips = makeZip1();
zip = new Set(zips);
console.log(zip);
console.log(zip.size);

var zip = new Set();
zip.add('131-8634');
zip.add('556-0002');
console.log(zip);
zip.delete('131-8634');
console.log(zip);

var zip = new Set(['131-8634', '556-0002']);
var iter = zip.keys();
for (var v of iter) console.log(v);
var iter = zip.entries();
for (var v of iter) console.log(v);
for (var v of zip) console.log(v);

zip.forEach(function (value1, value2, set) {
  console.log(value1 + ' => ' + value2);
});
