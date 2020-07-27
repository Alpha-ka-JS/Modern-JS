//재귀함수 - 재귀호출을 수행하는 함수
//재귀호출 :함수가 자기 자신을 호출하는 행위
/* 1. 재귀호출은 반드시 멈춰야한다. 
2. 재귀호출로 문제를 간단하게 해결할 수 있을 때 사용 (메모리 고려) */
function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(5));

var fact2 = function (n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1); //arguments.callee가 현재 실행하는 함수를 의미하기때문에
};

//하노이 탑
function hanoi(n, a, b, c) {
  if (n < 1) {
    return;
  }
  hanoi(n - 1, a, c, b);
  console.log(n + '번째 원반 : ' + a + ' -> ' + c);
  hanoi(n - 1, b, a, c);
}
hanoi(4, 'a', 'b', 'c');

//퀵소트
//x: 정렬할 배열 , first : 정렬할 첫번째 요소의 위치 ,last : 정렬할 마지막 요소의 위치

function quicksort(x, first, last) {
  var p = x[Math.floor((first + last) / 2)];
  for (var i = first, j = last; ; i++, j--) {
    while (x[i] < p) i++; // 왼쪽부터 p이상의 요소를 검색
    while (p < x[j]) j--; // 오른쪽부터 p이하의 요소를 검색
    if (i >= j) break; // i와 j가 교차하면 다음으로 이동
    var w = x[i];
    x[i] = x[j];
    x[j] = w; // swap
  }
  if (first < i - 1) quicksort(x, first, i - 1);
  if (j + 1 < last) quicksort(x, j + 1, last);
}
var a = [7, 2, 5, 1, 8, 9, 3];
quicksort(a, 0, a.length - 1);
console.log(a);
