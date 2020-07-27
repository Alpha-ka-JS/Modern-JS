//9.3  접근자 프로퍼티
/* 9.3.1 프로퍼티의 종류
데이터 프로퍼티 : 값을 저장하기 위한 프로퍼티 
접근자 프로퍼티 : 값이 없음, 프로퍼티를 읽거나 쓸 때 호출하는 함수를 값 대신에 지정할 수 있는 프로퍼티 

9.3.2 접근자 프로퍼티 
접근자 : 객체 지향 프로그래밍에서 객체가 가진 프로퍼티 값을 객체 바깥에서 읽거나 쓸 수 있도록 하는 메서드
유지보수성을 해치는 주요원인인 객체의 프로퍼티를 객체 바깥에서 직접 조작하는것
접근자 프로퍼틸글 사용해 데이터를 부적절하게 변경하는 것을 막고 숨기기 가능
*/
var person = {
  _name: 'eunjoung',
  get name() {
    return this._name;
  },
  set name(value) {
    var str = value.charAt(0).toUpperCase() + value.substring(1);
    this._name = str;
  },
};
console.log(person.name);
person.name = 'choi';
console.log(person.name);

//이렇게 get set을 사용한다
//접근자 프로퍼티 값 읽으려고하면 getter 쓰려면 setter가 호출됨
//안만들고 접근하면 undefined
//delete 연산자로 삭제 가능
delete person.name;
