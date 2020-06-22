//변수를 선언하지 않은 상태에서
// console.log(x); //ReferenceError: x is not defined

x = 2; //하지만 따로 var로 선언하지 않고 써도 문제가 되지는 않음.
console.log(x); //2

/*
변수에 타입이 있는 언어 - 정적 타입 언어
변수에 저장된 데이터 타입을 동적으로 바꿀 수 있는 언어 - 동적 타입 언어
하지만 자바스크립트에는 변수에 타입이 없어 변수에는 모든 타입의 변수를 저장 가능함
*/

var pi = 3.14;
console.log(pi); //3.14

pi = "원주율";
console.log(pi); //원주율

//원시타입 - 숫자 문자열 논리값 undfined null symbol
//객체타입
