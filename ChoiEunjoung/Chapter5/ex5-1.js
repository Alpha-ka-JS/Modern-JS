//연산자
/*표현식이란 결과적으로 어떤 값으로 평가되는 것임. 
연산자를 사용하면 표현식을 조합하여 더 복잡한 표현식을 만들어낼 수 있다. 
연산자, 피연산자, 이항연산자, 삼항연산자 ,그룹연산자(), 우선순위
결합법칙, 부수효과
*/

/* 산술연산
1. 정수끼리 나누어도 결과가 부동소수점이된다. ex 7/2 = 3.5;
2. 나머지 연산자 %의 피연산자는 부동소수점이다.
ex 15 %4 = 3 , 5%1.5 = 0.5 
즉 부동소수점으로 a%b가 가능함. 
결과값은 a에서b의 배수를 뺀 절대밗이며 부호는 a와 같다. 
3. + 연산자는 피연산자 중 하나가 문자열이면 나머지 피연산자를 문자열로 만든다
4. 계산할 수 없는 경우에는 NaN, 피연산자가 true면 1, false나 null이면 0으로 판단
undefined면 NaN
*/
console.log(1 + "2month"); //12month
console.log(0 / 0); //NaN
console.log(true + true); //2
console.log("one" - 1); //NaN

a = 1;
b = ++a; //2
c = a++ + 2; //4 ,a=3
console.log(a + " " + b + " " + c); //3 2 4

//Math 객체의 프로퍼티
function polarToDescartes(r, theta) {
  var angle = (Math.PI * theta) / 180;
  return { x: r * Math.cos(angle), y: r * Math.sin(angle) };
}

//부동소수점과 정확도 문제
/* 산술연산 시 유효 자릿수를 고려해야하므로 오차가 발생한다.
자바스크립트의 숫자는 64비트 부동소수점이고 62자릿수의 2진수 부동 소수점을 표현
*/

//정확도 문제
console.log(Math.sqrt(100001)); //316.2293471517152
console.log(Math.sqrt(100000)); //316.22776601683796
console.log(Math.sqrt(100001) - Math.sqrt(100000)); //0.001581134877255863
//정확한 값이 아닌데, 일반적으로 값이 가까운 두 수를 뺄셈할 때 정확도 문제가 발생하고 이를 정밀도 손실이라고 함.
console.log(1 / (Math.sqrt(100001) + Math.sqrt(100000)));
//이렇게 계산하면 정밀도 손실을 피할 수 있다.
var x = 0.16;
var y = 0.2;
console.log(x / y); //0.7999999999999999 -> 오차가 있음을 고려해야한다.

console.log(x / y == 0.8); //false
console.log(Math.abs(x / y - 0.8) < 1e-10); //true
