//Symbol - 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값
var sym1 = Symbol();
var sym2 = Symbol();

console.log(sym1 == sym2);

var HEART = Symbol('하트');
console.log(HEART.toString());

var NONE = Symbol('none');
var BLACK = Symbol('black');
var WHITE = Symbol('white');

//Symbol과 문자열 연결
var sym3 = Symbol.for('club');
var sym4 = Symbol.for('club');
console.log(sym3 == sym4);

var sym3 = Symbol.for('club');
var sym4 = Symbol('club');
console.log(sym3 == sym4);

//보간 표현식
var a = 2,
  b = 3;
console.log(`${a} + ${b} = ${a + b}`);
var now = new Date();
console.log(`오늘은 ${now.getMonth() + 1} 월 ${now.getDate()} 일 입니다.`);
