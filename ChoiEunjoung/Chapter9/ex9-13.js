//9.9 JSON :데이터 송수신 간편
/*9.9.1 JSON : 자바스크립트 객체를 문자열로 표현하는 데이터 포맷 -> 데이터 직렬화 가능

//9.9.2 표기방법
JSON 포맷은 자바스클비트의 리터럴 표기법에 기반을 둔다.
{name : "TOM", "age" : 17, "marriage : false", data:[2,4,null]}
JSON데이터 -> '{name : "TOM", "age" : 17, "marriage : false", data:[2,4,null]}'
작은 따옴표로 묶은 문자열, 프로퍼티는 큰 따옴표로 묶은 문자열 
//9.9.3 JSON 변환과 환원
//자바스크립트 객체를 JSON 문자열로 변환 : JSON.stringify
- Nan,Infinity,-Infinity는 null 
- Data 객체는 ISO 포맷 날짜 문자열로 직렬화 
- Function, RegExp, Error,undefined, 심벌은 직렬화 X
- 객체 자신이 가지고 있는 열거 가능한 프로퍼티만 직렬화된다
- 직렬화할 수 없는 프로퍼티는 문자열로 출력되지 않음
- 프로퍼티중 키가 심벌인 프로퍼티는 직렬화되지 않는다
*/

JSON.stringify({});
JSON.stringify(3.14);
JSON.stringify('abc');
JSON.stringify(true);
JSON.stringify([2, 4, null]);
console.log(JSON.stringify({ x: 1, y: 2 })); //{"x":1,"y":2}
console.log(JSON.stringify({ x: 1, y: 2, z: 3 }, ['x', 'z'])); //{"x":1,"z":3}
console.log(JSON.stringify({ x: 1, y: 2 }, null, '\t'));
/*{
    "x": 1,
    "y": 2
}*/

//JSON 문자열을 자바스크립트 객체로 환원하기 : JSON.parse
JSON.parse('{}');
JSON.parse('3.14');
JSON.parse('"abc"'); //
JSON.parse('true');
JSON.parse('[2, 4, null]');
JSON.parse('{ "x": 1, "y": 2 }');
var o = { name: 'TOM', age: 17, marriage: false, data: [2, 4, null] };
var s = JSON.stringify(o);
console.log(s);
var p = JSON.parse(s);

/* JSON 을 활용한 깊은 복사 
var copy = obj; 객체를 단순 대입하면 얕은 복사를 하지만 
var copy = JSON.parse(JSON.stringify(obj)); 하면 깊은 복사를 할 수 있다.  
중첩된 객체까지도 올바르게 복사가능
*/
var point = { x: 0, y: 0 };
var circle = { center: point, radius: 2 };
var copy = JSON.parse(JSON.stringify(circle));
copy.center.x = 7;
console.log(copy); //{ center: { x: 7, y: 0 }, radius: 2 }
console.log(circle); //{ center: { x: 0, y: 0 }, radius: 2 }
