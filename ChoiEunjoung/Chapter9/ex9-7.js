//데이터 캡슐화
// 즉시 실행함수로 클로저를 생성하면 데이터를 객체 외부에서 읽고 쓸 수 없도록 숨기고 접근자 프로퍼티로만 읽고 쓰도록 만든다
var person = function () {
  var _name = 'Hannah'; //private
  return {
    get name() {
      return _name;
    },
    set name(v) {
      var str = v.charAt(0).toUpperCase() + v.substring(1);
      _name = str;
    },
  };
};
console.log(person.name);
person.name = 'kate';
console.log(person.name);
