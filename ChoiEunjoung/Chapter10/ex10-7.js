//10.4.2 전개 연산자
//...은 전개 연산자라고 하고 반복 가능한 객체를 반환하는 표현식 앞에 씀
console.log([...'ABC']); //[ 'A', 'B', 'C' ]
//f(...'ABC'); -> 이런식으로 함수의 인수 목록도 펼치기 가능
console.log([1, ...[2, 3, 4], 5]);
// f(...[1, 2, 3])
function* createNumber(from, to) {
  while (from <= to) yield from++;
}
var iter = createNumber(10, 15);
console.log([...iter]); // 여기선 나오고
console.log([...iter]); // 여기서는 안나온다 한번 뱉고 없어지는건가..?
var a = [5, 2, 3, 7, 1];
console.log(Math.max(...a));

//10.4.3 ArrayBuffer와 형식화 배열
//ArrayBuffer, DataView, 형식화 배열은 연속된 데이터 영역(버퍼)를 조작하기 위해 만들어진 객체
//배열과 이미지 데이터를 빠르게 일곡 쓸 수 있다

//ArrayBuffer 생성자
//메모리에 고정 길이를 가진 인접한 영역을 확보한다.  영역만 확보할 뿐 버퍼를 조작하는 메서드는 제공하지않음
//버퍼를 조작하려면 TypedArray 객체나 DataView 객체를 사용해야한다.
//메모리에 1024바이트 버퍼를 만든다
var buffer = new ArrayBuffer(1024);
console.log(buffer.byteLength); //1024 읽기전용이고 수정할 수 없음
var copy = buffer.slice(3, 6);
//바이트단위로 구분해서 해당 범위에 속한 버퍼를 복사한 새로운 arraybuffer객체를 만든다
//3부터 5까지 일부를 복사한 새로운 arraybuffer생성 참조가 copy변수에 할당됨

/*
형식화 배열 
 ArrayBuffer가 확보한 버퍼를 데이터의 저장 장소로 이용하여 데이터의 빠른 읽기와 쓰기가 가능 
 
형식화 배열 요소의 개수는 제한적이다. 길이가 고정되어있고 요소를 추가하거나 삭제할 수 없다 
Array.prototype 메서드를 사용할 수 없다. 
하지만 TypedArray, prototype이 제공하는 메서드는 사용할 수 없다. 
형식화 배열을 생성하면 모든 요소가 0으로 초기화된다  */

var a = new Int8Array(10);
console.log(a.length);
//형식화 배열 요소의 데이터 길이는 BYTES_PER_ELEMENT 프로퍼티로 구할 수 있다.
console.log(a.BYTES_PER_ELEMENT); //1
console.log(a[0]); //0으로 초기화되니까
console.log(a);

var buffer = new ArrayBuffer(100);
var a = new Int16Array(buffer);
console.log(a.length); //50
//buffer 길이가 100바이트이고 Int16Array로 생성한 배열 요소 하나의 길이는 2바이트
//따라서 a의 길이는 100/2 =50 배열이 정수가 아니면 에러남
//ArrayBuffer 생성할대 객체의 데이터 길이가 정수여야함

var a = new Int16Array(10);
for (var i = 0; i < 10; i++) {
  a[i] = i;
}
var b = new Int16Array(a);
console.log(b);
console.log(a === b); //false

var a = [1, 2, 3, 4, 5];
var b = new Float64Array(a);
console.log(b); //Float64Array(5) [ 1, 2, 3, 4, 5 ]
//형식화 배열도 반복 가능한 이터레이터이다.
var a = new Uint8Array([0, -1, 1]);
for (var v of a) console.log(v); //0 255 1

//ArrayBuffer 객체의 뷰
//형식화 배열은 요소의 ArrayBufer 객체의 영역 안에 저장된다. 형식화 배열의 요소를 일곡 쓰는것이 이에 저장된 ArrayBuffer를 읽고 쓴느 것임
var a = new Int8Array(10);
var buffer = a.buffer;
console.log(buffer.byteLength);

var buffer = new ArrayBuffer(16);
var a_unit8 = new Uint8Array(buffer);
var a_unit16 = new Uint16Array(buffer);
var a_unit32 = new Uint32Array(buffer);
var a_float64 = new Float64Array(buffer);
//a_unit8과 16은 버퍼를 공유하고있어서 배열요소를 수정하면 16도 수정됨
a_unit8[0] = 170;
a_unit8[1] = 204;
console.log(a_unit16[0]); //52394 // 2진법..

//오프셋을 지정해서 형식화 배열 생성하기
var buffer = new ArrayBuffer(16);
var a = new Int8Array(buffer, 2, 5); //이런식으로 길이 지정 가능
//이러면 형식화 배열 a가 buffer의 2바이트 영역부터 요소 다섯개 분량의 영역을 차지한다는 것
//오프셋 배열 길이를 생략하면 배열이 모든 영역을 차지함

console.log(a.byteOffset);
//오프셋을 바꾸어 할당하면 ArrayBuffer 객체 하나로 복잡한 자료구조 활용 가능

buffer = new ArrayBuffer(24);
var person = {
  id: new Uint32Array(buffer, 0, 1),
  name: new Uint8Array(buffer, 4, 16),
  weight: new Float32Array(buffer, 20, 1),
}; //24바이트 Arraybuffer 객체 안에 person 객체의 프로퍼티값이 저장됨 오..
