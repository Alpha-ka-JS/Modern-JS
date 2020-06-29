//명시적 타입 변환
//1. 숫자를 문자열로 변환하기 (숫자 +문자열)

console.log(10 + "cookies");
console.log(("0000" + 12).slice(-4));

var n = 26;
console.log(n.toString()); //10진수 문자열로 변환 (기본)
console.log(n.toString(2)); //2진수 문자열로 변환
console.log(n.toString(16)); //16진수 문자열로 변환
console.log((26).toString(16));
var x = 1234.567;
console.log(x.toString);
console.log(x.toString(16));
console.log(x.toFixed(0)); //1235
console.log(x.toFixed(2)); //1234.57 ->몇자리수까지 표현할것인지.
console.log(x.toExponential(3));
console.log(x.toPrecision(3)); // 1.23e+3

//String 함수 활용하기
console.log(String({ x: 0, y: 1 })); //[object Object]
console.log(String([1, 2, 3])); //1,2,3

//수식 안에서 묵시적으로 변환하기
var s = "2";
console.log(s - 1); //1

//parseInt, parseFloat 함수
console.log(parseInt("3.14"));
console.log(parseFloat("3.14"));
console.log(parseInt("3.14meters")); //문자열은 무시함
console.log(parseInt("0xFF")); //255 -> 16진수로 해석
console.log(parseInt(".5")); // NaN
console.log(parseInt("abc")); //NaN
console.log(parseFloat("\100")); // NaN

console.log(parseInt("101", 2)); // 101을 2진수로 해석해서 출력 ->5
console.log(parseInt("ff", 16)); // ff를 16진수로 변환해서 해석 -> 255

//Number함수 활용하기
console.log(Number(123));
console.log(Number(true));
console.log(Number(NaN)); //NaN
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(Number({ x: 1, y: 2 })); //NaN
console.log(Number([1, 2, 3])); //NaN

//논리값으로 변환하기
!!x;
console.log(Boolean(x)); //true
