//12.1.2 정규 표현식의 생성
var reg = new RegExp('abc');
var reg = /abc/;

//12.1.3 패턴 매칭
var reg = /cat/;

//12.1.4 RegExp 객체의 메서드
console.log(reg.test('cats and dogs'));
console.log(reg.test('Cat'));

var reg = /Script/;
var result = reg.exec('JavaScript');
console.log(result[0]);
console.log(result.index);
console.log(result.input);
