//4.3.1
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

function Circle(center, radius){
    this.center = center;
    this.radius = radius;
    this.area = function(){
        return Math.PI * this.radius * this.radius;
    };
}
var p ={x:0, y:0};
var c = new Circle(p, 2.0);
console.log("넓이 = " + c.area());
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
