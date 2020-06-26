function square(x) {
  return x * x;
}
console.log(square(5));

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
  console.log("Bow-wow");
};
bark();
console.log(bark());

console.log(squareWithHoisting(5));
function squareWithHoisting(x) {
  return x * x;
}

var sq = square;
console.log(sq(5));
sq = function (x) {
  return x * x * x;
};
console.log(sq(5));
console.log(square(5));

function add1(x) {
  return (x = x + 1);
}
var a = 3;
var b = add1(a);
console.log("a = " + a + ", b = ", b);

function add1(p) {
  p.x += 1;
  p.y += 1;
  return p;
}
var a = { x: 3, y: 4 };
var b = add1(a);
console.log(a, b);

function setBallProperties(x, y, vx, vy, radius) {
  console.log(x, y, vx, vy, radius);
}
setBallProperties(0, 0, 10, 15, 5);

var parameters = {
  x: 0,
  y: 0,
  vx: 10,
  vy: 15,
  radius: 5,
};
function setBallProperties(parameters) {
  console.log(parameters);
}
setBallProperties(parameters);

var parameters = {
  x: 0,
  y: 0,
  vx: 10,
  vy: 15,
  radius: 5,
  color: "blue",
};
setBallProperties(parameters);

var a = "global";
function f() {
  var a = "local";
  console.log(a);
  return a;
}
f();
console.log(a);

function f2() {
  console.log(a);
  var a = "local";
  console.log(a);
  return a;
}
f2();

for (var j = 0; j < 10; j++) {}
console.log("after loop j is ", j);

for (let i = 0; i < 10; i++) {}
// error console.log('after loop j is ', i);

const c = 2;
// c =5;
const origin = { x: 1, y: 2 };
origin.x = 3;
console.log(origin);

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
