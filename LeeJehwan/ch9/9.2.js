var obj = {};
console.log(obj.__proto__);

var objA = {
  name: 'tom',
  sayHello: function () {
    console.log('hello!' + this.name);
  },
};
var objB = {
  name: 'huck',
};

objB.__proto__ = objA;
var objC = {};
objC.__proto__ = objB;
objC.sayHello();
objC.__proto__ = objA;
objC.sayHello();
objC.__proto__ = objB;

function F() {}
var obj = new F();
console.log(Object.getPrototypeOf(obj));

console.log(Object.getPrototypeOf(objA));
console.log(Object.getPrototypeOf(objB));
console.log(Object.getPrototypeOf(objC));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(objC)));

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}
Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

// new 연산자 과정
function newObject(obj, ...args) {
  var newObj = {};
  newObj.__proto__ = obj.prototype;
  obj.apply(newObj, args);
  return newObj;
}

var c1 = newObject(Circle, { x: 0, y: 0 }, 2.0);
console.log('넓이 = ' + c1.area());
console.log('넓이 = ' + c1);

function F() {}
console.log(F.prototype.constructor);
console.log(F.prototype);
console.log(F.prototype.constructor.prototype);
console.log(F.prototype.constructor.prototype.constructor);

// prototype.constructor가 아니라 constructor를 바로 사용하는 이유에 대하여 설명하기.
var obj = new F();
console.log(obj.constructor);
console.log(obj.__proto__);

function Circle2(center, radius) {
  this.center = center;
  this.radius = radius;
}
// constructor를 설정하지 않으면 어떤 일이 발생하는지 설명하기.
Circle2.prototype = {
  constructor: Circle2,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};

var c = new Circle2({ x: 0, y: 0 }, 2.0);
console.log(c.__proto__);
console.log(c.constructor);
console.log(c instanceof Circle2);

function Circle3(center, radius) {
  this.center = center;
  this.radius = radius;
}
var c3 = new Circle3({ x: 0, y: 0 }, 2.0);
Circle3.prototype = {
  constructor: Circle3,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};
// c3.area(); // TypeError: c3.area is not a function

function Circle4(center, radius) {
  this.center = center;
  this.radius = radius;
}
var c4 = new Circle4({ x: 0, y: 0 }, 2.0);
Circle4.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};
console.log(c4.area());
console.log(c4.constructor);

console.log(c4 instanceof Circle4);
console.log(c4 instanceof Object);
console.log(c4 instanceof Date);

console.log(Circle4.prototype.isPrototypeOf(c4));
console.log(Object.prototype.isPrototypeOf(c4));
console.log(Date.prototype.isPrototypeOf(c4));

var obj = new Object();
var obj = {};
var obj = Object();
var obj = new Object('ABC');
console.log(obj);

var person1 = {
  name: 'tom',
  sayHello: function () {
    console.log('hello! ' + this.name);
  },
};
var person2 = Object.create(person1);
person2.name = 'huck';
person2.sayHello();

console.log(person2.__proto__);

var blankObject = Object.create(null);
console.log(blankObject.__proto__);

var obj = Object.create(Object.prototype);
console.log(obj.__proto__);
