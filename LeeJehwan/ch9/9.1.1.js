var card1 = { suit: '하트', rank: 'A' };
console.log(card1);
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

var card2 = new Card('하트', 'A');
console.log(card2);

var card3 = Object.create(Object.prototype, {
  suit: {
    value: '하트',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  rank: {
    value: 'A',
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
console.log(card3);

function F() {}
console.log(F.prototype);
F.prototype.prop = 'prototype value';
var obj = new F();
console.log(obj.prop);

obj.prop = 'instance value';
console.log(obj.prop);
console.log(F.prototype.prop);
// F.prop.prop = 'new value';
// console.log(F.prototype.prop); // TypeError: Cannot set property 'prop' of undefined

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}

Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

var c1 = new Circle({ x: 0, y: 0 }, 2.0);
var c2 = new Circle({ x: 0, y: 1 }, 3.0);
var c3 = new Circle({ x: 1, y: 0 }, 1.0);
console.log('넓이 = ' + c1.area());
