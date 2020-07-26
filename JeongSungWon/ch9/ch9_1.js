//9.1.1 객체의 생성
// 객체 리터럴로 생성
var card = { suit: '하트', rank: 'A' };
// 생성자로 생성
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}
var card = new Card('하트', 'A');

//Object.create로 생성
var card = Object.create(Object.prototype, {
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

//9.1.2 프로토타입
/*
생성자 안에 메서드를 정의할 때의 문제점
생성된 모든 인스턴스에 같은 기능을 하는 메서드가 추가 되는데, 
인스턴스를 여러개 만들시 같은 기능이지만, 인스턴스만큼의 메모리를 소비
*/
function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}
var c1 = new Circle({ x: 0, y: 0 }, 2.0);
var c2 = new Circle({ x: 0, y: 1 }, 3.0);
var c3 = new Circle({ x: 1, y: 0 }, 1.0);

function F() {}
console.log(F.prototype);

F.prototype.prop = 'prototype value';
var obj = new F();
console.log(obj.prop);
/*
프로토타입 : 원래 원형, 인스턴스에 아무것도 정의 되지 않더라도 처음부터 사용 가능
*/
obj.prop = 'instance value';
console.log(obj.prop);
console.log(F.prototype.prop);

//circle 생성자의 prototype 프로퍼티에 area 메서드 추가
Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};
console.log('넓이 = ' + c1.area());
