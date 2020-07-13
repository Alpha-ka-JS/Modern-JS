//반복 가능한 객체와 for/of 문
var a = [5, 4, 3];
var iter = a[Symbol.iterator]();
while (true) {
  var iteratorResult = iter.next();
  if (iteratorResult.done == true) break;
  var v = iteratorResult.value;
  console.log(v);
}

var a = [5, 4, 3];
for (var v of a) console.log(v);

// symbol.iterator 메서드를 가진 객체는 반복가능한 객체 - Array,STring,TypedArray,Map,Set
for (var v of "EUN") console.log(v);
//for (var v of iter) console.log(v); //이런건 안됨
// var iterable = {};
// iterable[Symbol.iterator] = function () {
//   return iter;
// };
// for (var v of iterable) console.log(v);

//반복 가능한 내장객체의 이터레이터는 반복 가능
var arr = ["A", "B", "C"];
for (var v of arr) console.log(v);
var iter = arr[Symbol.iterator]();
for (var v of iter) console.log(v);
var iter_iter = iter[Symbol.iterator]();
console.log(iter_iter == iter);

/*
//8.11.4 제너레이터 
-반복 가능한 이터레이터 값으로 반환한다.
-작업의 일시정지와 재시작이 가능하며 자신의 상태를 관리한다.
function*문으로 정의한 함수이고 하나이상의 yield 표현식을 포함한다. 
*/
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var iter = gen();
console.log(iter.next()); //{ value: 1, done: false }
console.log(iter.next()); //{ value: 2, done: false }
console.log(iter.next()); //{ value: 3, done: false }
console.log(iter.next()); //{ value: undefined, done: true }

/*
제너레이터 함수인 gen은 호출해도 바로실행되는 것은 아니고 이터레이터를 반환한다
->next 메서드가 호출되면 첫번째 yield 연산자의 위치까지 실행하고 이터레이터 리절트를 반환함
->그리고 포인트 1에서 일시정지하게됨 
2,3반복 마지막 yield에 도착하면 value가 undefined이고, done 프로퍼티 값이 true인 이터레이트 리절트를 반환  
*/

function* createNumbers(from, to) {
  while (from <= to) yield from++;
}
var iter = createNumbers(10, 20); //10부터 20사이의 수 출력
for (var v of iter) console.log(v);
