//12.4 RegExp 객체
/*
RegExp객체는 RegExp.property 에서 프로퍼티와 메서드를 상속받는다 
exec 메서드의 반환값 : 정규 표현식와 일치하는 문자열을 검색해서 일치한 문자열과 부분 정규 표현식에서 일치한 문자열을 배열에 담아 반환한다.
일치하는 것을 못찾으면 null 
*/

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/;
var text = 'Tom: 010-2222-3333';
var result = tel.exec(text);
console.log(result);
console.log(result.index);
console.log(result.input);

//lastIndex  프로퍼티
var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = 'Tom: 010-2222-3333\nHuck: 020-3233-2222\nJelly: 0234-2242-3234';
console.log(tel.lastIndex);
console.log(tel.exec(text));
console.log(tel.lastIndex);
console.log(tel.exec(text)); //그 다음으로 옮겨간다

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = 'Tom: 010-2222-3333\nHuck: 020-3233-2222\nJelly: 0234-2242-3234';
while ((result = tel.exec(text)) != null) {
  console.log(result[0], result[1], result[2], result[3]);
}

tel.lastIndex = 0; //처음으로 다시 돌아가는 것
result = tel.exec(text);
console.log(result[0]);
