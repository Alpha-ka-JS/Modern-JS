/*팩토리얼 구하기*/

//n의 팩토리얼을 구하는 함수
function fact(n) {
  if (n <= 1) return n;
  return n * fact(n - 1);
}

for (var i = 1; i < 10; i++) {
  console.log(i + '! = ' + fact(i));
}
