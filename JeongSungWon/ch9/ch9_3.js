//9.3.1 프로퍼티의 종류
/*
객체의 프로퍼티는 두 가지로 나뉨
  - 데이터 프로퍼티 : 값을 저장하기 위한 프로퍼티
  - 접근자 프로퍼티 : 값 X, 프로퍼티를 읽거나 쓸 때 호출하는 함수를 값 대신에 지정
*/

//9.3.2 접근자 프로퍼티
/*
접근자 : 객체가 가진 프로퍼티 값을 객체 바깥에서도 쓰고나 읽을 수 있도록 제공하는 메서드
  getter 함수 : 접근자 프로퍼티 하나에 대해 프로퍼티를 읽을 때의 처리를 담당
  setter 함수 : 접근자 프로퍼티 하나에 대해 프로퍼티를 쓸 때의 처리를 담당
*/
var person = {
  _name: 'Tom',
  get name() {
    return this._name;
  },
  set name(value) {
    var str = value.charAt(0).toUpperCase() + value.substring(1);
    this._name = str;
  },
};
console.log(person.name);
person.name = 'huck';
console.log(person.name);

//strict 모드 - 엄격하게 문법을 검사함
/*
strict 모드에서는 setter가 없는 접근자 프로퍼티를 쓰려고 시도하면 오류 발생
*/
delete person.name;
console.log(person.name);

//극 좌표계의 입출력 인터페이스를 제공하는 데카르트 좌표계
var point = {
  x: 1.0,
  y: 1.0,
  get r() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  get theta() {
    return Math.atan2(this.y, this.x);
  },
  set polarCoordinates(pc) {
    this.x = pc.r * Math.cos(pc.theta);
    this.y = pc.r * Math.sin(pc.theta);
  },
};
console.log(point.r);
console.log(point.theta);
point.polarCoordinates = { r: 2, theta: Math.PI / 4 };
console.log(point);

//9.3.3 데이터의 캡슐화
var person = (function () {
  var _name = 'Tom';
  return {
    get name() {
      return _name;
    },
    set name(value) {
      var str = value.charAt(0).toUpperCase() + value.substring(1);
      _name = str;
    },
  };
})();
console.log(person.name);
person.name = 'huck';
console.log(person.name);
