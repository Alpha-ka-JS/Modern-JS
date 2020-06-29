//비트연산
//비트 논리 연산 - &,|,!,~
console.log(105 & -91); //33
console.log(105 | -91); //-19
console.log(105 ^ -91); //-52
console.log(~105); // -106

//비트 시프트 연산 - << ,>>, >>> (부호 있는, 부호 없는)
console.log(105 << 3); //840
console.log(-91 >> 3); //-12
console.log(-91 >>> 3); //536870900 -> >>>는 좌변 비트값을 우변에 지정된 수만큼 오른쪽으로 이동시킨다. 왼쪽 빈자리는 0으로 채워지고 넘치면 버려짐

//typeof 연산자
var s = "ABC";
console.log(typeof s);
a = 2;
//조건연산자
var parity = a % 2 == 0 ? "짝수" : "홀수";
// if (a % 2 == 0) {
//   parity = "짝수";
// } else {
//   parity = "홀수";
// }

//쉼표연산자
//eval 연산자
var x = 1;
eval("x++;"); //실제로 실행된거라고 보면됨.
console.log(x);
k = 4;
var formula = "k*k";
eval("function f(k) {return " + formula + "; }");
// function f(x) {
//   return x * x;
// } ->이것과 같음.
console.log(f(k));

//eval은 보안에 문제가 있을 수 있으므로 남용하지않는다.
