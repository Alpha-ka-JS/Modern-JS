//10.3 유사 배열 객체 Array Type 객체
/*
[Array Type의 성질]
1. 0 이상의 정수값을 프로퍼티 이름으로 갖는다 
2. length 프로퍼티가 있으며 요소를 추가하거나 삭제하면 length 값이 바뀜 
length 값을 줄이면 배열도 크기가 줄어든다. 
3. Array.prototype이므로 메서드를 상속받아 사용가능 instanceoof로 평가하면 Array생성자 함수로 생성된 객체로 표시됨 
예를들면
함수의 인수를 저장한 Arguments
DOM의 documentElementsByTagName 같은거
*/
var a = {};
for (var i = 0; i < 10; i++) {
  a[i] = i;
}
a.length = 10;
for (var i = 0, sum = 0; i < a.length; i++) sum += a[i];
console.log(sum);
//하지만 유사배열 객체는 Array.prototype 메서드 사용불가
//참조하거나 대입할수는 있고 반복처리도 가능

//10.3.2 Array.prototype의 매서들를 유사 배열 객체에서 사용하기
var a = { 0: 'A', 1: 'B', 2: 'C', length: 3 };
var b = Array.prototype.join.call(a, ',');
console.log(b);
console.log(Array.prototype.push.call(a, 'D')); //4?
var d = Array.prototype.slice.call(a, 0); //진짜 배열로 반환
console.log(d); //[ 'A', 'B', 'C', 'D' ]
var a = { 0: 1, 1: 2, 2: 3, length: 3 };

var e = Array.prototype.map.call(a, function (v) {
  return v * v;
});
console.log(e);
var a = { 0: 'A', 1: 'B', 2: 'C', length: 3 };
var f = Array.prototype.concat.call(a, ['D', 'E']);
console.log(f);
//[ { '0': 'A', '1': 'B', '2': 'C', length: 3 }, 'D', 'E' ]
