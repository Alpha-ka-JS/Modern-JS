function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

var card = new Card('하트', 'A');
console.log(card);

var card2 = {};
card2.suit = '하트';
card2.rank = 'A';
console.log(card2);

var card1 = new Card('하트', 'A');
var card2 = new Card('클럽', 'K');
var card3 = new Card('스페이드', '2');
console.log(card1, card2, card3);

card1.suit = '스페이드';
console.log(card1, card2, card3);

function Particle(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.velocity = Math.sqrt(vx * vx + vy * vy);
}
var p = new Particle(0, 0, 3, 4);
console.log(p);

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}
var p = { x: 0, y: 0 };
var c = new Circle(p, 2.0);
console.log(c);
console.log('넓이 = ' + c.area());
