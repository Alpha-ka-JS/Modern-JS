function square(x){
    return x * x;
}

function saveImage(img){}
function getMousePosition(event){}
function load_file(){}

console.log(square(3));

function dist(p,q){
    var dx = q.x - p.x;
    var dy = q.y - p.y;
    return Math.sqrt(dx*dx+dy*dy);
}

var p1 = {x:1, y:1};
var p2 = {x:4, y:5};
var d = dist(p1, p2);
console.log(d);

var bark =function(){console.log("Bow-wow");};
bark();

//함수 선언문의 끌어올림
console.log(square(5));
function square(x) {return x * x};

console.log("값을 넘겼을 때");
function add1(x) { return x = x + 1;}
var a = 3;
var b = add1(a);
console.log("a = "+a+ ", b = ", b);

console.log("객체 넘겼을 때");
function add1(p) { p.x = p.x + 1; p.y = p.y + 1; return p;}
var a = {x : 3, y : 4};
var b = add1(a);
console.log(a, b);

function setBallProperties(x, y, vs, vy, radius) {}
setBallProperties(0,0,10,15,5);
var parameters = {
    x: 0,
    y: 0,
    vx: 10,
    vy: 15,
    radius: 5
};
function setBallProperties1(params) {}
setBallProperties(parameters);

/*
4.2.10 변수의 유효 범위

*/
console.log("4.2.10 변수의 유효 범위")
var a = "global"
function f(){
    var a = "local";
    console.log(a);
    return a;
}
f();
console.log(a);

function f1(){
    console.log(a);
    var a = "local";
    console.log(a);
    return a;
}

function f2(){
    a = "local";
    console.log(a);
    return a;
}
f2();
console.log(a);

let x = "outer x";
{
    let x = "inner x";
    let y = "inner y";
    console.log(x);
    console.log(y);
}
console.log(x);
//console.log(y); y is not defined

const origin = {x:1, y:2};
origin.x = 3;
console.log(origin);

var square1 = function(x) {return x*x;};

console.log("객체");
var circle = {
    center: {x:1.0, y:2.0},
    radius: 2.5,
    area: function(){
        return Math.PI * this.radius * this.radius;
    }
};

circle.translate = function(a,b){
    this.center.x = this.center.x + a;
    this.center.y = this.center.y + b;
};
circle.translate(1,2);
console.log(circle.center);

/*
4.3 객체의 개초(생성자)
*/

function Card(suit, rank){
    this.suit = suit;
    this.rank = rank;
}
var card = new Card("하트", "A");
console.log(card);

var card1 = new Card("하트", "A");
var card2 = new Card("클럽", "K");
var card3 = new Card("스페이드", "2");

function Particle(x, y, vx, vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.velocity = Math.sqrt(vx*vx + vy*vy);
}
var p = new Particle(0,0,3,4);
console.log(p);

//4.4.2 Date 생성자
console.log("Date 생성자");

var now = new Date();
console.log(now);
var then = new Date(2008, 5, 10);
console.log(then);
var elapsed = now - then;
console.log(elapsed);

var start = new Date();
var end = new Date();
var lapsed = end - start;

console.log(now.get)

var square = new Function("X", "return x * x");

/*
4.5 배열의 기초
*/

var evens = [2,4,6,8];
var empty = [];
console.log(empty);
var aa = [2, ,4];
console.log(aa);
var various = [3.14, "pi", true, {x:1, y:2}, [2,4,6,]];
evens.length

var a = ["A", "B", "C", "D"];
a.length = 2;
console.log(a);

//4.5.3

var evens = new Array(2,4,6,8);
var empty = new Array();
var a = new Array(2,4);
var various = new Array(3.14, "pi", true, {x:1, y:2},[2,4,6,7]);

//4.5.6
var a = ["A", "B", "C"];
a[3] = "D";
a.push("E");
delete a[3];
console.log(a);
console.log(a.length);