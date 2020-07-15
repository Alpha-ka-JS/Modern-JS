var t = `Man errs as long as
he strives.`;
console.log(t);

var t = 'Man errs as long as\nhe strives.';
console.log(t);

var t = String.raw`Man errs as long as\nhe strives.`;
console.log(t);

var t = 'Man errs as long as\\nhe strives.';
console.log(t);

var a = 2,
  b = 3;
console.log(`${a} + ${b} = ${a + b}`);
var now = new Date();
console.log(`오늘은 ${now.getMonth() + 1} 월 ${now.getDate()} 일입니다.`);
