//함수
function square(x) {
  return x * x;
}
//변수 이름과 마찬가지로 모든 식별자를 함수 이름으로 사용할 수 있다.
console.log(square(3));
//인수를 여러개 받을 수도 있다.
function dist(p, q) {
  var dx = q.x - p.x;
  var dy = q.y - p.y;
  return Math.sqrt(dx * dx + dy * dy);
}
var p1 = { x: 1, y: 1 };
var p2 = { x: 4, y: 5 };
var d = dist(p1, p2);
console.log(d); //5

//인수를 받지 않는 경우
var bark = function () {
  console.log('Bow-wow');
};
bark();
//함수의 끌어올림도 가능하다. 함수를 정의하기전에 실행하는 코드를 작성해도 문제없이 동작한다.

//함수의 원시 값을 인수로 넘겼을때와 객체를 인수로 넘겼을때 결과는 다르다.
function add1(x) {
  return (x = x + 1);
}
var a = 3;
var b = add1(a); // 인수로 넘긴 a 가 변하지 않음. -> 복사본이 전달되기때문
console.log(a + ' , ' + b);

//객체를 넘긴 경우에는 참조값을 넘긴다.
//참조전달 ->원래의 객체 값을 변경할 수 있다.
function add2(p) {
  p.x = p.x + 1;
  p.y = p.y + 1;
  return p;
}
var a = { x: 3, y: 4 };
var b = add2(a);
console.log(a.x + ' , ' + b.y); //4,5

//함수의 인수를 여러개를 전달하는 경우 순서를 착각할수있고,
// 인수 개수가 바뀌면 호출방법이 바뀌므로 프로그램 전체를 수정해야한다.

var parameters = {
  x: 0,
  y: 0,
  vx: 10,
  vy: 15,
  radius: 5,
};

function setParameters(p) {
  console.log('여러개의 값을 하나의 객체에 담아서 보냄.');
}

setParameters(parameters);
