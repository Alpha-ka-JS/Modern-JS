//함수 정의하기
/*
1. 함수 선언문으로 정의하는 방법
function foo(x) {return x*x;}
2. 함수 리터럴로 정의하는 방법-> 변수에 할당한 후에 호출 가능
var foo = function(x) {return x*x;} 
3. Function 생성자로 정의하는 방법-> 변수에 할당한 후에 호출 가능
var foo = new Function("x", "return x*x") 
4. 화살표 함수 표현식으로 정의하는 방법 -> 참조를 변수에 할당한 후 호출가능
var foo = x =>x*x;
 */

function norm(x) {
  var sum2 = sumSquare();
  return Math.sqrt(sum2);
  //함수 내부에 선언된 중첩함수 (=내부함수)
  //외부함수의 최상위레벨에서만 중첩함수 작성 가능  if나 while 은 안됨
  function sumSquare() {
    sum = 0;
    for (var i = 0; i < x.length; i++) sum += x[i] * x[i];
    return sum;
  }
}
var a = [2, 1, 3, 5, 7];
var n = norm(a);
console.log(n);

//함수 호출
/*
1. 함수 호출
2. 메서드 호출
3. 생성자호출
4. call apply를 사용한 간접호출

익명으로 함수를 실행할 때는 익명함수의 참조를 변수에 할당하고 그룹연산자인()을 붙여서 실행한다.
var f = function() {...};
f(); 이런식인데 즉시실행함수는
(function() {...})(); 이렇게 또는 (function() {...}());

*/

//함수의 인수
function f(x, y) {
  console.log('x: ' + x + ' y: ' + y); //x:2 , y:undefined
}
f(2);
function multi(a, b) {
  b = b | 1; //undefined나 null이 들어오면 1로,,!
  return a * b;
}
console.log(multi(2, 3));
console.log(multi(2));

//가변길이 인수목록
/*Argument객체는 프로퍼티로 length(개수)와 callee(현재 실행되는 함수 참조)를 갖고있음. 
Arguments객체는 유사 배열 객체..
arguments[i] 값을 바꾸면 인자 값이 함께 바뀐다  <- 일반적 배열 성질과 다름
*/

function myConcat(separator) {
  var s = '';
  for (var i = 1; i < arguments.length; i++) {
    s += arguments[i];
    if (i < arguments.length - 1) s += separator;
  }
  return s;
}
console.log(myConcat('/', 'apple', 'orange', 'tomato'));
