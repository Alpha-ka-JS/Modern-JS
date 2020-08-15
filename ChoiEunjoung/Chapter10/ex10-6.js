//10.4.1 비구조화 할당
// 비구조화 할당은 배열, 객체, 반복 가능 객체에서 값을 꺼내어 그 값을 별도로 변수에 대입하는 문장

//1. 기본적인 사용법
var [a, b] = [1, 2]; //배열에서 순차적으로 꺼내서 하나씩 할당함 -> 분할 할당
console.log(a + ' , ' + b);
[a, b] = [2 * a, 3 * b];
console.log(a + ' , ' + b);
[a, b] = [b, a];
console.log(a + ' , ' + b);
//좌변이 많으면 undefined가 할당되고 우변이 많으면 값이 무시됨
[a, b, c] = [1, 2];
console.log(a + ',' + b + ',' + c); //1,2,undefined
[a, b] = [1, 2, 3];
console.log(a + ' , ' + b);
[, a, b] = [1, 2, 3, 4];
console.log(a + ' , ' + b); //2 , 3
var array, first, second;
array = [first, second] = [1, 2, 3, 4];
console.log(first + ' ,' + second + ', ' + array);
//first 1 , seconde 2 Array 1,2,3,4
//2. 나머지 요소
//...을 사용해서 나머지 요소를 할당되지 않고 남은 것을 할당해줄 수 있다
[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a + ',' + b + ',' + rest);
//3.요소의 기본값
//비구조화 할당을 할때는 함수의 인수와 마찬가지로 기본값을 설정할 수 있음
[a = 0, b = 1, c = 2] = [1, 2];
console.log(a + ',' + b + ',' + c); //1, 2, 2;
//4. 함수가 배열로 반환한 값을 비구조화 할당받기
//함수가 값을 여러개 반환해야하면 그 값을 배열로 만든다.
function rotation(x, y, t) {
  var s = Math.sin(t),
    c = Math.cos(t);
  return [c * x - s * y, s * x + c * y];
}
var [a, b] = rotation(1, 2, Math.PI / 3);

//객체의 비구조화 할당
//1. 기본적인 사용법
var { a: x, b: y } = { a: 1, b: 2 };
console.log(x + ' ' + y); //x=1 y=2
var { a: x, b: y } = { a: y, b: x };
console.log(x + ' ' + y);
var { a: x, b: y } = { a: 1, c: 2 };
console.log(x + ' ' + y); //1 undefined 우변에는 값이 있지만 변수가 좌변에 없다면 무시됨
var { sin: sin, cos: cos, tan: tan, PI: PI } = Math;
//이렇게하면 Math.sin을 그냥 sin으로 쓸수있어서 코드가 간결해짐

//2. 프로퍼티 기본값
//기본값을 설정할 수 있다 배열과 마찬가지
var { a: x = 1, b: y = 2, c: z = 3 } = { a: 2, b: 4 };
console.log(x + ',' + y + ',' + z);

//프로퍼티 이름 생략하기
//변수 이름만 쉼표로 구분해서 작성가능
var { a, b } = { a: 1, b: 2 };
var { sin, cos, tha, PI } = Math;
var { a = 1, b = 2, c = 3 } = { a: 2, b: 4 }; //기본값을 주는 경우에도 마찬가지

//반복 가능한 객체의 비구조화 할당
var [a, b, c] = 'ABC';
console.log(a + ',' + b + ',' + c); //A,B,C 우와..
function* createNumbers(from, to) {
  while (from <= to) yield from++;
}
var [a, b, c, d, e] = createNumbers(10, 20);
console.log(a + ',' + b + ',' + c + ',' + d + ',' + e);
//중첩된 자료 구조의 비구조화 할당
var [a, b, c] = [1, [2, 3]];
console.log(a + ',' + b + ',' + c);
var {
  a: x,
  b: { c: y, d: z },
} = { a: 1, b: { c: 2, d: 3 } };
console.log(x + ',' + y + ',' + z);
var person = { name: 'eunjoung', age: 15, hobby: ['tennis', 'music'] };
var {
  name,
  age,
  hobby: [hobby, hobby], // hobby1 => not defined hobby => tennis hobby ,hobby => music
} = person;
console.log(name + ',' + age + ' , ' + hobby);
