// 9.2  프로토타입 상속
/* 9.2.1 상속
상속은 일반적으로 특정 객체가 다른 객체로부터 기능을 이어받는 것을 말한다. 
자바스크립트는 클래스가 아닌 객체를 상속한다. 
자바스크립트의 상속은 프로토타입 체인이라고 부르는 객체의 자료구조로 구현되어있다. -> 프로토타입 상속
생성자가 클래스의 역할을 하지만 생성자를 상속하기 위한 구문을 언어차원에서 제공하지않음 
흉내내기? 
 */

//9.2.2 상속을 하는 이유 : 상속을 사용하면 이미 정의된 프로퍼티와 메서드의 코드를 재사용할수있고, 새로운 기능을 추가해서 확장된 객체를 만들 수 있다.
// 중복 코드를 작성하게 되지 않으므로 유지보수성이 높은 프로그램을 만들 수 있다.

/*9.2.3 프로토타입 체인 
모든 객체는 내부 프로퍼티를 가지고있다 [[prototype]]
함수 객체의 prototype 프로퍼티와는 다른 객체!
__proto__로 값을 저장할 수 있음
*/
var obj = {};
console.log(obj.__proto__);

//프로퍼티 체인
var objA = {
  name: 'eunjoung',
  sayHello: function () {
    console.log('hello ' + this.name);
  },
};
var objB = { name: 'choi' };
objB.__proto__ = objA;
var objC = {};
objC.__proto__ = objB;
objC.sayHello();
console.log(objB); //C에는 sayhello.가 없지만 거슬러 올라가서 이 함수를 찾는다
//  객체의 __proto__ 프로퍼티가 가리키는 객체가 바로 상속을 해준 객체이며 이 객체를 그 객체의 프로토타입이라고 합니다.
// 객체는 자신이 가지고 있지 않은 특성(프로퍼티와 메서드)을 프로토타입 객체에 위임한다고 할 수 있다.
// 프로토타입 상속을 하는 객체 지향 언어를 가리켜 프로토타입 기반 객체 지향 언어
// 어이없지만 이런식으로 상속을 하지는 않고, prototype 프로퍼티에 추가하거나 object.create로 상속받을 프로토타입을 지정해 객체 생성

//프로토타입 가져오기
function F() {}
var obj = new F();
console.log(object);

//9.2.4 new 연산자의 역할
function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}
Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};
var c = new Circle({ x: 0, y: 0 }, 2.0);

//1.빈 객체를 생성한다
var newObj = {};
// 2.Circle.prototype을 생성된 객체의 프로토타입으로 설정한다.
newObj.__proto__ = Circle.prototype;
//3.Circle 생성자를 실행하고 newobj를 초기화한다 이때 this는 1로 생성한 객체로 설정
//인수는 new  연산자와 함께 사용한 인수를 그대로 사용
Circle.apply(newObj, arguments);
//4. 완성된 객체를 결과값으로 반환한다.
return newObj;
