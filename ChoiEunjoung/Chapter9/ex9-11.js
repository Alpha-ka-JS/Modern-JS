//9.7 객체 잠그기 : 객체를 수정할 수 없게 만든다
// 객체를 잠글대는 객체의 확장 가능 속성, 재정의 가능, 속성 쓰기 가능 속성을 설정한다.
// 잠금 강도에 따라... 3단계 잠금도 가능
//extensible  속성은 새로운 프로퍼티를 추가 할 수 있는지를 결정

//9.7.2 Object.preventExtension 메서드 : 인수로 받은 객체를 확장할 수 없게한다.
var person = { name: 'Tom' };
Object.preventExtensions(person);
person.age = 17;
console.log('age ' in person); //false
console.log(Object.isExtensible(person)); //false

//9.7.3 Object.seal 메서드 : 인수로 받은 객체를 밀봉한다. 프로퍼티에 추가는 금지 기존 프러퍼티 재정의 불가
//프로퍼티 추가 삭제 수정을 할 수 없고 읽기와 쓰기만 가능해짐

var person2 = { name: 'EUNJOUNG' };
Object.seal(person2);
person2.age = 17;
delete person2.name;
// Object.defineProperty(person2, 'name', { enumerable: false }); // TypeError: Cannot redefine property: name
console.log('name' in person2); //true
console.log('age' in person2); //false
console.log(Object.getOwnPropertyDescriptor(person2, 'name'));
//{value: 'EUNJOUNG',writable: true,enumerable: true,configurable: false}
person2.name = 'Choi';
console.log(person2); //값의 쓰기는 가능
//밀봉된 객체를 대상으로 한 프로퍼티의 추가 삭제 명령은 무시됨
console.log(Object.isSealed(person2)); //true

//9.7.4 Object.freeze 메서드 : 인수로 받은 객체를 동결 -> 프로퍼티를 추가하는 것 금지, 재정의 X 데이터 프로퍼티 쓸 수 없음
// 즉, 읽기만 가능한 상태
var person3 = { name: 'dlwlrma' };
Object.freeze(person3);
console.log(Object.isFrozen(person3));
