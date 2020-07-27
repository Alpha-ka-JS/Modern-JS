//9.2.5 프로토타입 객체의 프로퍼티
//constructor 프로퍼티
//function F() {}
//console.log(F.prototype.constructor);
//왜 F가.. 9-3에 이어서 쓸때는 안되는것..?
function F() {}
obj = new F();
console.log(obj.constructor);

//내부 프로퍼티
//함수 객체가 가진 프로토타입 객체의 내부 프로퍼티는 기본적으로 object와 prototype을 가리킨다.
//object.prototype
function F() {}
console.log(F.prototype.__proto__);

//프로토타입 객체의 교체 및 contructor 프로퍼티
function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}
Circle.prototype = {
  constructor: Circle,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};
var c = new Circle({ x: 0, y: 0 }, 2.0);
console.log(c.constructor);
console.log(c instanceof Circle); //생성자로 생성한것인지 확인

//인스턴스 생성 후 생성자의 프로토타입을 수정하거나 교체한 경우
function Circle2(center, radius) {
  this.center = center;
  this.radius = radius;
}
var C = new Circle2({ x: 0, y: 0 }, 2.0);
Circle2.prototype = {
  constructor: Circle2,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};
//console.log(C.area()); //TypeError: C.area is not a function
// 인스턴스의 프로퍼티틑 생성되는 시점에서 프로토타입을 상속받아서 생성된 후에는 프로토타입을 바꿔도 교체한 객체로부터 프로퍼티를 상속받지는 않음.
//하지만 기존 생성자가 가지고 있던 프로퍼티에 추가한 경우에는 연결고리가 안끊겨서 생성자에서 정의한 거 사용가능.
function Circle3(center, radius) {
  this.center = center;
  this.radius = radius;
}
var C3 = new Circle3({ x: 0, y: 0 }, 2.0);
Circle3.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

console.log(C3.area());

//9.2.6 프로토타입 확인
//instanceof 연산자 -> 지정한 객체의 프로토타입 체인이 지정한 생성자의 프로토타입 객체가 포함되어있는지 확인
function F() {}
var obj = new F();
console.log(obj instanceof F);
console.log(obj instanceof Object);
console.log(obj instanceof Date);

//isPrototypeOf 메서드 -> 특정 객체가 다른 객체의 프로토타입 체인에 포함되어 있는지 판정
function F() {}
var obj = new F();
console.log(F.prototype.isprototypeOf(obj));
console.log(Object.prototype.isprototypeOf(obj));
console.log(Date.prototype.isprototypeOf(obj));

//9.2.7 Object.prototype
//Object.prototype의 메서드는 모든 내장 객체로 전파되며 모든 인스턴스에 사용가능
//Object 생성자
var obj = new Object(); // var obj = {} 이거랑 완전 같음
var obj = new Object('ABC');
var obj = Object(); //  var obj = new Object() 와 같음...

//Object.prototype의 메서드
var day = new Date();
console.log(day.getMonth());
console.log(day.hasOwnProperty('length')); //false

//9.2.8 Object.create로 객체 생성하기  -> 명시적으로 프로토타입을 지정해 객체를 생성할 수 있고 이 메서드를 활용하면 가장 간단하게 상속 표현 가능!
var person1 = {
  name: 'eunjoung',
  sayHello: function () {
    console.log('hello ' + this.name);
  },
};
var person2 = Object.create(person1);
person2.name = 'choi';
console.log(person2.sayHello());
var blankObj = Object.create(null); //프로토타입 없는 객체 생성, 백지상태..
//이를 활용해 해시테이블 만들기 가능
var obj = Object.create(Object.prototype); //Object.prototype을 인수로 넘기면 빈 객체와 같은 객체를 생성할수있다
