//4.2.2
function square(x) {
  return x * x;
}

//4.2.3
function saveImage(img) {}
function getMousePosition(event) {}
function load_file() {}

//4.2.4
console.log(square(3));

//4.2.5
function dist(p, q) {
  var dx = q.x - p.x;
  var dy = q.y - p.y;
  return Math.sqrt(dx * dx + dy * dy);
}

var p1 = { x: 1, y: 1 };
var p2 = { x: 4, y: 5 };
var d = dist(p1, p2);
console.log(d);

var bark = function () {
  console.log('Bow-wow');
};
bark();

//4.2.7
//함수 선언문의 끌어올림
console.log(square1(5));
function square1(x) {
  return x * x;
}

//4.2.8 , 4.2.9
console.log('값을 넘겼을 때');
function add1(x) {
  return (x = x + 1);
}
var a = 3;
var b = add1(a);
console.log('a = ' + a + ', b = ', b);

console.log('객체 넘겼을 때');
function add2(p) {
  p.x = p.x + 1;
  p.y = p.y + 1;
  return p;
}
var a = { x: 3, y: 4 };
var b = add2(a);
console.log(a, b);

function setBallProperties(x, y, vs, vy, radius) {}
setBallProperties(0, 0, 10, 15, 5);
var parameters = {
  x: 0,
  y: 0,
  vx: 10,
  vy: 15,
  radius: 5,
};
function setBallProperties1(params) {}
setBallProperties(parameters);

//4.2.10 변수의 유효 범위
console.log('4.2.10 변수의 유효 범위');
var a = 'global';
function f() {
  var a = 'local';
  console.log(a);
  return a;
}
f();
console.log(a);

function f1() {
  console.log(a);
  var a = 'local';
  console.log(a);
  return a;
}

function f2() {
  a = 'local';
  console.log(a);
  return a;
}
f2();
console.log(a);

//4.2.11
let x = 'outer x';
{
  let x = 'inner x';
  let y = 'inner y';
  console.log(x);
  console.log(y);
}
console.log(x); //console.log(y); y is not defined

const origin = { x: 1, y: 2 };
origin.x = 3;
console.log(origin);

//4.2.12
var square2 = function (x) {
  return x * x;
};
console.log(square2(3));
var square3 = function sq(x) {
  return x * x;
};

//4.2.13
console.log('객체');
var circle = {
  center: { x: 1.0, y: 2.0 },
  radius: 2.5,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};

circle.translate = function (a, b) {
  this.center.x = this.center.x + a;
  this.center.y = this.center.y + b;
};
