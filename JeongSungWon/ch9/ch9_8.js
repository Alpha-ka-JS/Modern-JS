//9.8.1 Mixin 함수
//mixin 객체의 코드를 상속과는 다른 방식으로 재사용
//특정 객체에 다른 객체가 가지고 있는 프로퍼티를 붙여 넣어 뒤섞음
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

//얕은 복사 : 객체의 복사본을 만드는 대신 그 객체의 참조만 복사
//깊은 복사 : 객체의 사본을 만들어 다른 메모리 영역에 복사

var person1 = {
  _name: 'Tom',
  get name() {
    return this._name;
  },
};
var person2 = {};
mixin(person2, person1);
person2.name = 'Huck';
console.log(person2.name);
console.log(person2);

function minin(target, source) {
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    var descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
    Object.defineProperty(target, keys[i], descriptor);
  }
  return target;
}
var person1 = {
  _name: 'Tom',
  get name() {
    return this._name;
  },
};
var person2 = {};
mixin(person2, person1);
person2.name = 'Huck';
console.log(person2.name);
console.log(person2);
