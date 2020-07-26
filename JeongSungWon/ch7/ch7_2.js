var a = 1;
if (a > 0) a++;
console.log(a);

var name = 0;
if (!name) {
  name = '';
  message = '이름을 입력하세요';
}

var x = 0;
if (x >= 0) console.log('Positive or Zero');
else console.log('Negative');

var a = 3,
  b = 2,
  c = 1;
if (a > b)
  if (a > c) console.log('a가 가장 크다');
  else console.log('a는 b 이하');

var num = 1;
if (num == 1) {
  console.log('One');
} else {
  if (num == 2) {
    console.log('Two');
  } else {
    console.log('Other');
  }
}

//윤년인지를 확인하는 함수
function isLeapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }
  return false;
}

//switch 문
var n = 5;
switch (n) {
  case 1:
    console.log('One');
    break;
  case 2:
    console.log('Two');
    break;
  case 3:
    console.log('Three');
    break;
  default:
    console.log('Other');
}

function binaryOperation(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    case '^':
      return Math.pow(a, b);
    default:
      return NaN;
  }
}

console.log(binaryOperation(2, 3, '+'));
console.log(binaryOperation(2, 3, '-'));
console.log(binaryOperation(2, 3, '*'));
console.log(binaryOperation(2, 3, '^'));
console.log(binaryOperation(2, 3, 'A'));
