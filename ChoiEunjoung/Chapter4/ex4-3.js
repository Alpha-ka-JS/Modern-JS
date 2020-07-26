//유효범위
// 어휘적범위 - 하나의 프로그램 구문만으로 유효범위를 정한다. (C,Java,JS)
// 동적범위 - 프로그램 실행 중 유효범위를 정한다.

var g = 'global'; //전역변수라서 가능
function f() {
  var l = 'local';
  console.log(g); //global
  return l;
}
f();
//console.log(l); //error, l is not defined 지역변수라서 유효범위를 벗어나서는 사용불가

//하나의 변수를 공유할때 유효범위에 따른 값 변화 확인
var g = 'global';
function f2() {
  var g = 'local';
  console.log(g); //local
  return g;
}
f2();
console.log(g); //global

//함수안에서도 변수끌어올림 가능
function f3() {
  console.log(h); //undefined
  var h = 'local';
  console.log(h); //local
  return h;
}
f3();
//함수안에서 변수 선언을 생략하게되면 전역변수로 선언된다.
function f4() {
  k = 'global';
  console.log(k); //global
  return k;
}
f4();
console.log('k : ' + k); //global

//let 과 const -> 블록 유효범위를 갖는 변수 선언 {} 중괄호 안에서만 유효함.
//let은 변수를 선언하고 const는 한번만 할당할 수 있는 상수 선언
//let으로 선언한 변수는 끌어올리지 않는다.
//let x;
let a, b, c;
//let x = 5, -> 같은 유효범위 안에서는 이미 선언되어 못씀
//  y = 7;

let x = 'outer x';
{
  let x = 'inner x';
  let y = 'inner y';
  console.log(x);
  console.log(y);
}
console.log(x);
//console.log(y); //error : y is not defined

//const
const d = 2;
//d = 5; // error :Assignment to constant variable.
//하지만 상수값이 객체나 배열일 경우에는 수정가능하다ㅏ..
const origin = { x: 1, y: 2 };
origin.x = 3;
console.log(origin); //x:3 , y:2

//함수리터럴 = 익명함수 = 무명함수 (끝에 반드시 세미콜론 필요)

//console.log(square(3)); //square is not a function
var square = function (x) {
  return x * x;
};
console.log(square(3));
var square = function sq(x) {
  return x * x;
};

console.log(square(4));

//객체의 매서드
var circle = {
  center: { x: 1.0, y: 2.0 },
  radius: 2.5,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.area());

circle.translate = function (a, b) {
  this.center.x = this.center.x + a;
  this.center.y = this.center.y + b;
};
circle.translate(1, 2);
console.log(circle.center);

//함수를 활용하면 얻을 수 있는 장점.
//1. 재사용 할 수 있다.같은 작업을 반복할 때 효율 상승
//2. 만든 프로그램을 이해하기 쉽다. 일정한 처리를 모아서 이름 붙이기 가능
// 함수 안에 상세 내용을 숨기는 효과
//3. 프로그램 수정이 간단해짐.
