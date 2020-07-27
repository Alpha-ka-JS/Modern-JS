//9장 객체
/* 9.1객체의 생성
자바스크립트의 객체는 이름과 값을 한 쌍으로 묶은 것
이름과 값이 한쌍을 이루는 것을 프로퍼티 , 프로퍼티의 이름을 프로퍼티 이름 또는 키라고 한다
모든 데이터 타입의 데이터를 저장할 수 있고 함수의 참조를 값으로 가지는 프로퍼티는 메서드 라고함
*/

//1. 객체를 리터럴로 생성하는 방법
var card = { suit: '하트', rank: 'A' };
//2. 생성자로 생성하는 방법
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}
var card = new Card('하트', 'A');
//3. object.create 로 생성하는 방법
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

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}
var c1 = new Circle({ x: 0, y: 0 }, 1.0);
var c2 = new Circle({ x: 0, y: 0 }, 2.0);
var c3 = new Circle({ x: 0, y: 0 }, 3.0);
//메서드를 포함한 생성자로 인스턴스를 여러개 생성하면 같은 작업을 하는 메서드를 인스턴스만큼 만들어서 메모리 낭비됨

function F() {}
console.log(F.prototype);
F.prototype.prop = 'prototype value';
var obj = new F();
console.log(obj.prop);
// 프로토타입 -> 인스턴스에 아무것도 정의하지 않더라도 처음부터 사용할 수 있는 것
obj.test = 'instance value';
console.log(obj.test);
console.log(F.prototype.prop);

function Circle2(center, radius) {
  this.center = center;
  this.radius = radius;
}
Circle2.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};
var c1 = new Circle2({ x: 0, y: 0 }, 1.0);
var c2 = new Circle2({ x: 0, y: 0 }, 2.0);
var c3 = new Circle2({ x: 0, y: 0 }, 3.0);
console.log('넓이 : ' + c1.area());
