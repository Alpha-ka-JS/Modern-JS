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
//중첩 반복문
var n = 20;
for (var a = 1; a <= n; a++) {
  for (var b = 1; b <= n; b++) {
    for (var c = 1; c <= n; c++) {
      if (a * a + b * b == c * c) {
        console.log(a + '^2 +' + b + '^2 ' + '= ' + c + '^2');
      }
    }
  }
}

//for/in 문
var obj = { a: 1, b: 2, c: 3 };
for (var p in obj) {
  //객체 표현식을 평가한다
  console.log('p = ' + p);
  console.log('obj.' + p + ' = ' + obj[p]); //값을 가져오려면 value가 아니고 [] 연산자를 사용해야한다.
}

//점프문
//라벨문 -> 다른 위치로 이동하는 제어구문
//break(switch문, 반복문 내에서)와 continue(반복문 내에서)에서만 점프할 수 있음.
//ex. break loop; 하면 loop 라는 이름을 가진 반복문에서 빠져나옴.  지정 라벨이 없다면 오류
//줄바꿈 문자를 넣으면 바스가 세미콜론을 추가하므로 라벨을 지정하지 않은 break문으로 해석함

var a = [2, 4, 6, 8, 10],
  b = [1, 3, 6, 7, 9, 11];
loop: for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {
    if (a[i] == b[j]) break loop;
  }
}
console.log('a[' + i + '] = b[' + j + ']'); //a[2] = b[2]

//continue문

var a = [2, 5, -1, 7, -3, 6, 9];
for (var i = 0, sum = 0; i < a.length; i++) {
  if (a[i] < 0) continue;
  sum += a[i];
}
console.log(sum);

var a = [
  [2, 4, 6, 8],
  [1, 5, 12, 3],
  [7, 6, 8, 5],
  [5, 15, 3, 4],
  [3, 2, 9, 4],
];
var max = Number.NEGATIVE_INFINITY;
mainloop: for (var i = 0; i < a.length; i++) {
  var average = 0;
  for (var j = 0; j < a[i].length; j++) {
    if (a[i][j] > 10) continue mainloop;
    average += a[i][j];
  }
  average /= a[i].length;
  console.log('i = ' + i + '평균값 = ' + average);
  if (max < average) max = average;
}
console.log('최대 평균값 = ' + max);
