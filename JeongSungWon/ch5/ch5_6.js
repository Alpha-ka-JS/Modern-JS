//5.6.1
var s = "ABC";
console.log(typeof s);

//5.6.2
var a = 5;
console.log((a%2==0)? "짝수" : "홀수");

//5.6.3
for(var i = 1, sum = 0; i <= 10; i++){
    sum += i;
}

//5.6.4
//eval은 함수! 하지만 연산자의 기능! 
//문자열을 코드로 바꿔줌! 
//script 태크에서 동적으로 실행을 가능하게 해줌
var x = 1;
eval("x++");
console.log(x);

var formula = "x*x";
eval("function f(x) { retrun " + formula + "; }");
