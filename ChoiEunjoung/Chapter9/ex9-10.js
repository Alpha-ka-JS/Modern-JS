// 9.6 프로퍼티 열거
// -> 객체 안의 모든 프로퍼티를 대상으로 작업을 수행할 수 있고 프로퍼티 목록도 가져올 수 있음

//9.6.1 for/in문
var person1 = { name: 'EUNJOUNG', age: 25 };
var person2 = Object.create(person1);
person2.name = 'Choi';
for (var p in person2) console.log(p);
//person2가 접근할 수 있는거는 객체가 소유한 프로퍼티인 name,;person1에서 상속받은 name,age
//Object.prototype에서 상속받은 toString같은것도 있는데 for/in 으로 열거를 할 수는 없음
var a = [0, 2, 4, 6, 8];
a.name = 'evens';
for (var i in a) console.log(i); //0,1,2,3,4 ???
/*자바스크립트의 배열은  Array타입이고 Array 객체의 각 요소는 프로퍼티 
Array.prototype에서 상속받는 length는 object.prototype에서 상속받는 프로퍼티 사용가능
하지만 둘 다 프로퍼티 열거는 안됨 for/in 으로 못찾아냄

일부 자스 라이브러리가 object.prototype에 새로운 메서드를 추가하기도 하는데 그거는 메서드를 열거할수도있음
*/
//사용자의 의도와 다르게 라이브러리가 추가한 메서드가 나열되는 경우를 방지하기 위해서는
// for (var p in obj) {
//   if (!obj.hasOwnProperty(p)) continue; // 소유한 프로퍼티가 아니라면! 지나감
//   if (typeof p === 'function') continue;
// }

//9.6.2 Object.keys 메서드
// 지정한 객체가 소유한 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름만 배열로 만들어서 반환
var group = { groupName: 'Tennis circle' };
var person = Object.create(group);
person.name = 'Tom';
person.age = 14;
person.sayHello = function () {
  console.log('hello ' + this.name);
};
Object.defineProperty(person, 'sayHello', { enumerable: false });
console.log(Object.keys(person)); //[ 'name', 'age' ]
// 해당 객체가 소유한 프로퍼티이면서 열거할 수 있는 name,age만 뱉어줌
//해당 객체가 소유한 프로퍼티 이름만 조회하는 용도로는 object.key가 적합
var obj = {};
var p = Object.keys(obj);
for (var i = 0; i < p.length; i++) {
  console.log(obj[p[i]]);
}
//<- 이부분 obj가 뭐야

//9.6.3 Object.getOwnPropertyNames
//인수로 지정한 객체가 소유한 프로퍼티 이름을 배열로 만들어서 반환
//열거할 수 있는 프로퍼티랑 없는 프로퍼티를 모두 배열로 만드는것이 특징
console.log(Object.getOwnPropertyNames(person)); //[ 'name', 'age', 'sayHello' ]
