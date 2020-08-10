//11.1.2 strict 모드 사용
/*
ECMAScript 5부터 추가된 strict모드는 버그를 일으키기 쉬운 부분을 제거
- 일부 기능을 사용할 수 없도록 제한(JS는 버그가 발생하기 쉬운 언어라)
- 최적화 처리에 장애되는 부분을 제거
- 몇몇 프로그램은 strict 모드로 실행시 더 빨리 실행됨
*/
function f(x) {
  'use strict';
  y = x;
}
//f(2);

/*
strict 모드 주요 제약 사항
 - 변수는 모두 선언
 - 함수 직접 호출시, 함수 안의 this 값이 undefined
   일반 모드에서는 this 값이 전역 객체
 - with문 사용 X
 - 함수 정의문에 같은 이름의 인수가 있으면 문법 오류
 - 객체에 같은 프로퍼티가 있을시 오류
 - NaN, Infinity, undefined 표기시 TypeError
 - arguments[i] 호출시 인수 값 유지
   일반 모드에서 arguments[i]가 인자의 별명
 - arguments.callee를 읽을 수 없다.
 - eval로 실행한 코드는 호출자의 유효 범위 안에 새로운 함수, 변수 선언 X
*/

//11.1.4 console 디버깅
// function f() {
//   function g() {
//     function h() {
//       console.trace();
//     }
//     h();
//   }
//   g();
// }
// f();
