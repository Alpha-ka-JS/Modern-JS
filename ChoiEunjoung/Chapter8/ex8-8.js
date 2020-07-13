//8.8 객체로서의 함수

/*
8.8.1 함수는 객체
자바스크립트의 함수Function은 객체임. 그래서 

함수는 변수나 프로퍼티나 배열 요소에 대입할 수 있다. 
함수는 함수의 인수로 사용할 수 있다. 
함수는 함수의 반환값으로 사용할 수 있다. 
함수는 프로퍼티와 메소드를 가질 수 있다. 
함수는 이름없는 리터럴로 표현할 수 있다. 
함수는 동적으로 생성할 수 있다. 

-> 이런 작업이 가능한 객체가 일급 객체..! 일급 객체인 함수는 일급 함수라고 함
자바나 C에서 함수는 일급함수가 아님 근데 자스의 함수는 일급함수임
자바스크립트는 함수가 일급 객체라 함수형 언어처럼 함수형 프로그래밍이 가능

8.8.2 함수의 프로퍼티 ->caller/length/name/prototype
Function.prototype의 프로퍼티 -> apply(), bind(), call(), constructor,toString()

8.8.3 apply, call 메서드 - this 값과 함수의 인수를 사용해 함수를 실행하는 메서드 
차이는 함수에 인수를 넘기는 방법 
apply : 배열을 넘긴다 
call : 쉼표로 구분한 값의 목록

*/
function say(greeting, honorifics) {
  console.log(greeting + " " + honorifics + this.name);
}
var tom = { name: "Tom Sawyer" };
var becky = { name: "B" };
say.apply(tom, ["hello", "Mr."]);
say.apply(becky, ["hi", "Ms."]);
say.call(tom, "hello", "Mr.");
say.call(becky, "hi", "Ms.");

/*
8.8.4 bind 메서드
Function 객체의 bind 메서드는 객체에 함수를 바인드한다. 
*/
function say(greeting, honorifics) {
  console.log(greeting + " " + honorifics + this.name);
}

var tom = { name: "Tom" };
var sayToTom = say.bind(tom);
sayToTom("hello", "Mr."); // 이렇게 호출하면 this가 항상 Tom을 가리킨다. say.bind(tom)은 톰 객체를 함수 say의 this로 설정한 새로운 함수를 만들어반환

/*
8.8.5 함수에 프로퍼티 추가하기 
function f(x) {...}
f,p = a;
f.g = function(){...};
Function 객체에 추가된 프로퍼티는 함수를 실행하지 않아도 읽거나 쓸 수 있다. 
함수의 프로퍼티에 일반적으로 그 함수의 작업과 관련된 데이터와 메서드를 저장. 
전역변수에도 저장 가능하나 항상 충돌을 염두에 둬야한다. 프로퍼티로 작성시 함수 객체가 이름 공간의 역할을 하기 때문에 문제가 발생하지않음

-메모이제이션 : 함수를 호출했을때의 인수와 반환값ㅇ르 쌍으로 만들어 저장해두는 기법이다. 
함수에 메모이제이션을 적용해두면 한 번 건네받은 이력이 있는 인수의 결과값으로 저장해둔 결과를 반환하므로 계산을 생략할 수 있다. 
*/
function fibo(n) {
  if (n < 2) return n;
  if (!(n in fibo)) {
    fibo[n] = fibo(n - 1) + fibo(n - 2);
  }
  return fibo[n];
}
for (var i = 0; i <= 20; i++) {
  console.log((" " + i).slice(-2) + ":" + fibo(i));
}
