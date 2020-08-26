// RegExp 객체의 프로퍼티
// source: 정규 표현식 패턴 문자열을 저장한다.
// global: g 플래그가 사용되고 있는지를 뜻하는 논리값, 읽기전용
// ignoreCase: i 플래그가 사용되고 있는지를 뜻하는 논리값, 읽기전용
// multiline: m 플래그가 사용되고 있는지를 뜻하는 논리값, 읽기전용

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/;
var text = 'Tom: 010-1234-5678';
var result = tel.exec(text);
console.log(result);

// RegExp 객체의 프로퍼티 이것도 해보기
console.log(tel.source);
console.log(tel.global);
console.log(tel.ignoreCase);
console.log(tel.multiline);
console.log(tel.lastIndex);

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = 'Tom: 010-1234-5678\nHuck: 020-550-7890\nBeckyL 030-4242-2222';
console.log(tel.lastIndex);
console.log(tel.exec(text));
console.log(tel.lastIndex);
console.log(tel.global);
console.log(tel.exec(text));
console.log(tel.lastIndex);

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = 'Tom: 010-1234-5678\nHuck: 020-550-7890\nBeckyL 030-4242-2222';
while ((result = tel.exec(text)) != null) {
  console.log(result[0], result[1], result[2], result[3]);
}
console.log(tel.lastIndex);

// 반드시 초기화 시켜줘야 한다.
result = tel.exec(text);
console.log(result[0]);
tel.lastIndex = 0;
result = tel.exec(text);
console.log(result[0]);
