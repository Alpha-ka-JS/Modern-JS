//배열의 기초 - 배열요소, 요소번호, 인덱스
var evens = [2, 4, 6, 8];
var empty = [];
console.log(empty); // []
var a = [2, , 4];
console.log(a); //[ 2, <1 empty item>, 4 ]
var various = [3.14, 'pi', true, { x: 1, y: 1 }, evens];
console.log(various);
console.log(evens.length); //4
evens.length = 2;
console.log(evens); //[ 2, 4 ]
evens.length = 6;
console.log(evens); // [ 2, 4, <4 empty items> ]

//Array 생성자 활용하기
var evens = new Array(2, 4, 6, 8);
var empty = new Array();
var a = new Array(2, 4);
var various = new Array(3.14, 'pi', true, { x: 1, y: 1 }, evens);

var x = new Array(3);
console.log(x); //[ <3 empty items> ] 숫자라면 빈 배열만 생성
console.log(x.length); //3

console.log(various[1]); // pi ->이런식으로 참조가능

var a = ['A', 'B', 'C', 'D'];
console.log(a['2']); //C.. 문자열도 가능..
console.log(a['5']); //undefined
//객체에 업는 프로퍼티를 읽으려고 시도하면 undefined가 반환됨. 추가 삭제 희소배열도 객체라고 생각
//ECMAScript6부터는 TypedArray객체가 추가되어 메모리의 연속된 공간에 차례대로 배치됨.

//배열 요소 추가 삭제

a.push('E');
console.log(a); //[ 'A', 'B', 'C', 'D', 'E' ]

a[5] = 'F';
console.log(a); //[ 'A', 'B', 'C', 'D', 'E', 'F' ]

delete a[1];
console.log(a); //[ 'A', <1 empty item>, 'C', 'D', 'E', 'F' ]

//희소배열
a[7] = 'G';
console.log(a); //[ 'A', <1 empty item>, 'C', 'D', 'E', 'F', <1 empty item>, 'G' ]
a = ['A', 'B', 'C'];
console.log(a.length); //3
a[4] = 'E';
console.log(a.length); //5
// 희소 배열이란 배열에 속한 요소의 위치가 연속적이지 않은 배열을 의미한다.
//따라서 희소 배열의 경우 배열의 length 프로퍼티 값보다 배열 요소의 개수가 언제나 적다.
var arr = new Array();
arr[99] = 'JavaScript';
console.log('배열의 길이는 ' + arr.length + '이다.'); //100

//배열 요소 존재 확인
for (var i in a) {
  console.log(i);
}
console.log(a.hasOwnProperty('3')); //false
console.log(a.hasOwnProperty('2')); //true
