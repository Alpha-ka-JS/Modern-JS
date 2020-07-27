//제어구문
/*문장이 위에서부터 아래 방향으로 작성한 순서대로 실행되는데 이를 순차적 실행이라고 함 
이런 순차적 실행의 흐름을 변화시키는 문장이 제어 구문임. 
try~ catch, if/else, for등등
*/

//조건문
var name = null;
if (!name) {
  name = '';
  message = '이름을 입력하세요. ';
}
//else
var x = 7;
if (x >= 0) console.log('Positive or Zero');
else console.log('Negative');

//괄호로 안묶어준다니..!
var y = 2;
var z = 3;
if (x > y)
  if (x > z)
    //undefined라면 실행되지않는다~
    console.log('x가 제일 큼');
  else console.log('x는 y보다 작다 ');
//잘못 해석되는것을 막으려면 블록으로 채워줘야함 어쨌든 이렇게 해도 실행은 됨
var num = 1;
if (num == 1) {
  console.log('1');
} else {
  if (num == 2) {
    console.log('2');
  } else {
    console.log('other');
  }
}

function isLeapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }
  return false;
}

//switch문
var n = 2;
switch (n) {
  case 1:
    console.log('1');
    break;
  case 2:
    console.log('2');
    break;
  default:
    console.log('other');
    break;
}

// break 또는 return을 해줘야함
function binaryOperation(a, b, op) {
  switch (op) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    case '^':
      return Math.pow(a, b);
  }
}

console.log(binaryOperation(2, 3, '+'));
console.log(binaryOperation(2, 3, '-'));
console.log(binaryOperation(2, 3, '*'));
console.log(binaryOperation(2, 3, '/'));
console.log(binaryOperation(2, 3, '%'));
console.log(binaryOperation(2, 3, '^'));
console.log(binaryOperation(2, 3, 'A')); // undefined
//return 이나 break를 만나기 전까지 발견한 모든 문장을 실행하는 것 폴 스루
//default의 위치도 상관은 없으나 로직이 헷갈리므로 마지막에 써주자

//반복문
function fact(n) {
  var k = 1,
    i = 1;
  while (i < n) {
    k *= ++i;
  }
  return k;
}
console.log(fact(5));

function linearSearch(x, a) {
  var i = 0;
  var n = a.length;
  while (i < n && x > a[i]) i++;
  if (x == a[i]) return i;
  return null;
}
var a = [2, 4, 7, 12, 15, 21, 31, 34, 45, 46, 34, 47, 89];
console.log(linearSearch(21, a)); //5
console.log(linearSearch(30, a)); // null

// 이진검색을 하는 경우에는 선형 검색과 마찬가지로 오름차순으로 정렬된 배열에 사용가능함.
//하지만 시간이 O(logn)이라서 순차검색보다 훨씬 빠르다
/* 이진 검색 알고리즘은 배열 중간 요소인 a[middle] 과x를 비교한다 
x가 작다면 왼쪽 절반에 , 크다면 오른쪽 절반에 포함되어있으므로 
영역을 다시 설정하고 값을 찾을때까지 검색을 진행한다 
 */

function binarySearch(x, a) {
  var n = a.length;
  var left = 0;
  right = n - 1;
  while (left < right) {
    var middle = Math.floor((left + right) / 2);
    if (x <= a[middle]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  if (x == a[right]) return right; //인덱스 리턴
  return null;
}

console.log(binarySearch(4, a));

//do while(); 문장을 먼저 실행하고 조건식을 판단함. 그래서 무조건 한번은 실행됨
function fact2(n) {
  var k = 1,
    i = n;
  do {
    k *= i--;
  } while (i > 0);
  return k;
}
console.log(fact2(5));
