// 8.1.1 함수정의
//1. 선언문으로 정의
function square(x) {
  return x * x;
}
//2. 함수 리터럴로 정의
var square = function (x) {
  return x * x;
};
//3. Function 생성자로 정의
var square = new Function('x', 'return x*x');
//4. 화살표 함수 표현식으로 정의
var square = (x) => x * x;

console.log(square(2));
function square(x) {
  return x * x;
}

// 8.1.2 중첩 함수
//C, Java와는 달리 중첩 함수 사용 가능
function norm(x) {
  var sum2 = sumSquare();
  return Math.sqrt(sum2);
  function sumSquare() {
    sum = 0;
    for (var i = 0; i < x.length; i++) sum += x[i] * x[i];
    return sum;
  }
}

var a = [2, 1, 3, 5, 7];
var n = norm(a);
console.log(n);
