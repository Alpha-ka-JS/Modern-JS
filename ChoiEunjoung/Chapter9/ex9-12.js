//9.8 Mixin : 객체의 코드를 상속과는 다른 방식으로 재사용
// 상속을 사용하지 않고 특정 객체의 프로퍼티를 동적으로 다른 객체에 추가한다.
//원본 객체가 소유하면서 열거할 수 있는 프로퍼티를 타겟 객체에 복사해 반환함.
function mixin(target, source) {
  for (var property in source) {
    if (source.hasOwnProperty(property)) {
      target[property] = source[property];
    }
  }
  return target;
}
var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var obj = mixin(obj1, obj2);
console.log(obj);

// mixin함수는 source 객체가 소유하고 있으며 열거할 수 있는 모든 프로퍼티를 target객체에 복사한다. 이미 있는 프로퍼티값은 덮어쓰고 없는 것은 추가한다.
// 덮어쓰거나 추가할때는 얕은 복사(객체의 참조만 복사함) <-> 깊은 복사(객체 사본을 만들어 다른 메모리 영역에 복사)

//9.8.2 좀 더 완전한 Mixin 함수
// 원본 객체가 접근자 프로퍼티를 가지고 있을때 접근자 프로퍼티도 데이터 프로퍼티로 바꾸어 복사하는 문제가 있다.
var person1 = {
  _name: 'EUNJOUNG',
  get name() {
    return this._name;
  },
};
var person2 = {};
mixin(person2, person1);
person2.name = 'Choi';
console.log(person2.name);
console.log(person2); //{ _name: 'EUNJOUNG', name: 'Choi' }

function mixin2(target, source) {
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    var descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
    Object.defineProperty(target, keys[i], descriptor);
  }
  return target;
}
//mixin2는 Object.keys 메서드를 사용해서 원본 객체가 소유하면서 열거 가능한 모든 프로퍼티의 이름을 배열로 만든다.
//getOwnPropertyDescriptor 로 메서드를 사용해서 각 프로퍼티의 프로퍼티 디스크립터를 구한다
//defineProperty 메서드를 사용해서 타깃 객체의 새로운 프로퍼티를 추가한다.

var person3 = {
  _name: 'dlwlrma',
  get name() {
    return this._name;
  },
};
var person4 = {};
mixin2(person4, person3);
person4.name = 'jieun';
console.log(person4.name); //dlwlrma
console.log(person4); //{ _name: 'dlwlrma', name: [Getter] }
