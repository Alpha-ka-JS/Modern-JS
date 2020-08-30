//12.1 정규 표현식의 기본

var reg = new RegExp('abc');
var reg = /abc/;

/* 
정규표현식은 RegExp 객체로 표현한다. RegExp 생성자 또는 정규 표현식 리터럴로 생성
패턴매칭은 정규 표현식과 문자열이 일치하는지 확인하는 작업을 말함
*/

var reg = /cat/;
console.log(reg.test('cats and dogs'));
console.log(reg.test('Cat')); //대소문자를 구분한다?

var reg = /Script/;
var result = reg.exec('JavaScript');
console.log(result[0]);

console.log(result.index); //4
console.log(result.input); //JavaScript
