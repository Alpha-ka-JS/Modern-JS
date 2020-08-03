//9.9.1 JSON
/*
JavaScript Object Notation - 자바스크립트 객체를 문자열로 표현하는 데이터 포맷
(객체의 직렬화 가능)
*/

//9.9.3 JSON의 변환과 환원
//자바스크립트 객체를 JSON 문자열로 변환하기 : JSON.stringify
JSON.stringify({});
JSON.stringify(3.14);
JSON.stringify('abc');
JSON.stringify(true);
JSON.stringify([2, 4, null]);
JSON.stringify({ x: 1, y: 2 });

console.log(JSON.stringify({ x: 1, y: 2, z: 3 }, ['x', 'z']));
console.log(JSON.stringify({ x: 1, y: 2 }, null, ' '));

//JSON 문자열을 자바스크립트 객체로 환원하기 : JSON.parse
// 인수로 받은 무자열을 자바스크립트 객체로 환원해서 반환
JSON.parse('{}');
JSON.parse('3.14');
JSON.parse('"abc"');
JSON.parse('true');
JSON.parse('[2, 4, null]');
JSON.parse('{"x":1, "y":2}');
var o = { name: 'Tom', age: 17, marriage: false, data: [2, 5, null] };
var s = JSON.stringify(o);
var p = JSON.parse(s);
console.log(s);
console.log(p);
