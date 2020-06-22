// (`) 사용하기
var t = `Man errs as long as\nhe strives.`;
console.log(t);

//String.raw 는 이스케이프 시퀀스 문자 그대로 출력해줌.
var t = String.raw`Man errs as long as\nhe strives.`;
console.log(t);

var a = 2,
  b = 3;
console.log(`${a} + ${b} = ${a + b}"`); // 2+3=5
var now = new Date();
console.log(`오늘은 ${now.getMonth() + 1} 월 ${now.getDate()} 일입니다.`); //6월 22일
