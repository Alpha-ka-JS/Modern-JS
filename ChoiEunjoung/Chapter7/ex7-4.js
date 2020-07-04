//for (반복 조건의 초기화, 반복문 조건식, 조건갱신)

for (var i = 1, sum = 0; i <= 10; i++) {
  sum += i;
}

//무한 반복
// for (;;) {
//   if (confirm("종료하시겠습니까?")) break;
// }
//배열요소의 합계 구하기
function sumArray(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

var a = [1, 2, 3, 4, 5];
console.log(sumArray(a));
