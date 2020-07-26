//9.2.3 프로토타입 체인
/*
프로토타입 체인 : 
자신이 갖고 있지 않는 포로퍼티를 __proto__ 프로퍼티가 가르키는 객체로 올라가 검색하는데 
이 객체들의 연결고리를 프로토타입 체인이라한다.
*/

var obj = {};
console.log(obj.__proto__);

var objA = {
  name: 'Tom',
  sayHello: function () {
    console.log('Hello! ' + this.name);
  },
};
var objB = {
  name: 'Huck',
};
objB.__proto__ = objA;
var objC = {};
objC.__proto__ = objB;
objC.sayHello();

//프로토타입 가져오기
function F() {}
var obj = new F();
console.log(Object.getPrototypeOf(obj));

//9.2.4 new 연산자의 역할
function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}
Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

var c = new Circle({ x: 0, y: 0 }, 2.0);
/*
생성자 사용시 수행과정
1. 빈 객체가 생성한다. (newObj)
2. newObj.__proto__ = Circle.prototype (만약 Circle.prototype가 객체가 아니면 Object.prototype로 설정)
    -> 이로인해 프로토타입 체인이 완성
3. Circle 생성자를 실행하고 newObj를 초기화한다.
4. 완성된 객체 return
*/

//9.2.5 프로토타입 객체의 프로퍼티
