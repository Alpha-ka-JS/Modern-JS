const { check } = require('prettier');

function F() {
  console.log(F.prototype.constructor);
}
F();

// constructor 프로퍼티
/* 
생성자의 프로퍼티 : prototype
prototype의 constructor : 생성자
*/
function Fun() {}
obj = new Fun();
console.log(obj.constructor);

function F1() {}
console.log(F.prototype.__proto__);

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}
Circle.prototype = {
  // prototype 값을 새로운 값으로 넣으려면
  // constructor에 프로퍼티를 정의해야함
  constrctor: Circle,
  area: function () {
    return Math.Pi * this.radius * this.radius;
  },
};
var c = new Circle({ x: 0, y: 0 }, 2.0);
console.log(c.constructor);
console.log(c instanceof Circle);

//instance 생성 후 prototype 수정한 경우
/*
prototype은 instance 생성 했을 때의 상속을 받아 결정됨
그 이후에 수정하여도 prototype이 수정되지 않음
*/
function Circle1(center, radius) {
  this.center = center;
  this.radius = radius;
}
//prototype 교체 하기 전에 instance 생성
var c1 = new Circle1({ x: 0, y: 0 }, 2.0);
Circle1.prototype = {
  constrctor: Circle1,
  area: function () {
    return Math.Pi * this.radius * this.radius;
  },
};
//console.log(c1.area());  // c1.area is not a function

function Circle2(center, radius) {
  this.center = center;
  this.radius = radius;
}
var c2 = new Circle2({ x: 0, y: 0 }, 2.0);
Circle2.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};
console.log(c2.area());

//9.2.6 프로토타입의 확인
console.log();
/*
instanceof 연산자 - 인스턴스가 생성자의 프로토타입 객체를 상속 받았는지 확인
*/
function F() {}
var obj = new F();
console.log(obj instanceof F);
console.log(obj instanceof Object);
console.log(obj instanceof Date);

//isPrototypeOf 메서드 사용
console.log(F.prototype.isPrototypeOf(obj));
console.log(Object.prototype.isPrototypeOf(obj));
console.log(Date.prototype.isPrototypeOf(obj));

//9.2.7 Object.prototype
/* 
Object 생성자는 내장 생성자로 일반적인 객체 생성 
인수없이 실행하면 빈 객체 생성
*/
var day = new Date();
console.log(day.getMonth());
console.log(day.getDay());
console.log(day.hasOwnProperty('length'));

//9.2.8 Object.create로 객체 생성
var person1 = {
  name: 'Tom',
  sayHello: function () {
    console.log('Hello! ' + this.name);
  },
};
var person2 = Object.create(person1);
person2.name = 'Huck';
person2.sayHello();
var blankObjcect = Object.create(null);
console.log(blankObjcect.prototype);
