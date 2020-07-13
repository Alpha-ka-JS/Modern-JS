//8.10 콜백함수
/*
다른 함수에 인수로 넘겨지는 함수가 콜백 함수 
콜백함수는 함수를 호출할 때 새로운 일이 생기거나 그 함수의 실행이 끝나면 지정한 콜백 함수를 실행해 주도록 함수에 요청해야할 때 사용한다
콜백함수의 주체는 함수를 호출한 호출자이고, 호출자가 목적에 따라 어떤 콜백 함수를 사용할건지 정한다. 
호출된 함수는 콜백 함수를 실행하기는 하나 작업하는 내용에는 관여하지 않는다. 

8.9.2 이벤트 처리기 
특정 이벤트가 발생했을때 실행하도록 등록하는 함수 
button.onclick 같이 클릭했을때 ~ 하게 
이벤트처리기는 콜백함수 그 자체다,,!

8.10.3 타이머 
타이머 메서드 setTimeout, setInterval에 첫 번째 인수로 넘기는 함수가 콜백함수다

*/

//8.11 ECMAScript6로부터 추가된 함수의 기능
//화살표 함수

//인수가 하나일때는 괄호를 생략할 수 있다고 하지만 자동으로 프리티어가 만들어줌 ㅠ
var square = (x) => {
  return x * x;
};

//인수가 없으면 괄호 생략 안됨
var f = () => {
  console.log("hello");
};
// 함수 몸통 안에 문장이 return 뿐이면 return 키워드 생략가능
var square = (x) => x * x;
// 함수 몸통 안에 문장이 return 만 있더라도 함수의 반환값이 객체 리터럴이면 객체 리터럴을 그룹 연산자인 ()로 묶어야한다
var f = (a, b) => ({ x: a, y: b });
console.log(((x) => x * x)(3)); //즉시실행함수로 사용가능

//함수 리터럴과 화살표 함수의 차이점
// 1. this의 값이 함수를 정의할 때 결정된다
var obj = {
  say: function () {
    console.log(this); // function say
    var f = function () {
      console.log(this); //object (global)
    };
    f();
    var g = () => console.log(this); //function say
    g();
  },
};
obj.say();
var f = function () {
  console.log(this.name);
};
var g = () => console.log(this.name);
var tom = { name: "Tommm" };
f.call(tom); //Tommm
// g.call(tom); // undefined

//2. arguments 변수가 없다- 화살표 함수 안에는 arguments 변수가 정의되어있지 않아 사용 불가
var foo = () => console.log(arguments);
// foo(); //뭔가 나오긴 하는데...?
//3. 생성자로 사용할 수 없다 new  사용 x
var Person = (name, age) => {
  this.name;
  this.age = age;
};
//var tom = new Person("Tom", 12); //TypeError: Person is not a constructor
//4. yield 키워드를 사용할 수 없다.

//8.11.2 인수에 추가된 기능
/*
- 나머지 매개변수 함수의 인자가 들어가는 부분에 ...을 입력하면 그만큼의 인수를 배열로 받을 수 있다.. 
*/
function f2(a, b, ...args) {
  console.log(a, b, args);
}
f2(1, 2, 3, 4, 5, 6, 7); //undefined??

var sum = (...args) => {
  for (var i = 0, s = 0; i < args.length; i++) s += args[i];
  return s;
};
console.log(sum(1, 2, 3, 4, 5)); //15

//8.11.3 이터레이터와 for/of 문
//이터레이션 - 반복처리로 데이터안의 요소를 연속적으로 꺼내는 행위를 말한다. forEach같은거
var a = [5, 4, 3];
a.forEach(function (val) {
  console.log(val);
});
//이터레이터 - 반복 처리가 가능한 객체를 말함
//배열의 이터레이터 , 배열은 Symbol.iterator메서드를 가진다.
var a = [5, 4, 3];
var iter = a[Symbol.iterator]();
console.log(iter.next()); //{ value: 5, done: false }
console.log(iter.next()); //{ value: 4, done: false }
console.log(iter.next()); //{ value: 3, done: false }
console.log(iter.next()); //{ value: undefined, done: true }
console.log(iter.next()); //배열의 길이를 넘어가고 값이 undefined가 되어 끝을 확인하면 bool값으로 확인

function makeIterator(arr) {
  var idx = 0;
  return {
    next: function () {
      if (idx < arr.length) {
        return { value: arr[idx++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}
var iter = makeIterator(["A", "B", "C"]);
console.log(iter.next()); // {value: "A", done: false}
console.log(iter.next()); // {value: "B", done: false}
console.log(iter.next()); // {value: "C", done: false}
console.log(iter.next()); // {value: undefined, done: true}
