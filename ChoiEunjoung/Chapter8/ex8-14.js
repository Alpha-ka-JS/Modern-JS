//제너레이터에 값 넘기기
//제너레이터로 생성한 이터레이터의 next 메서드에 값을 대입하면 제너레이터에 값을 넘길 수 있다.
function* fibo() {
  var fn1 = 0,
    fn2 = 1;
  while (true) {
    var fnew = fn1 + fn2;
    fn1 = fn2;
    fn2 = fnew;
    reset = yield fn1;
    if (reset) {
      fn1 = 0;
      fn2 = 1;
    }
  }
}
var iter = fibo();
for (var i = 0; i < 10; i++) {
  console.log(iter.next().value);
}
console.log(iter.next().value);
console.log(iter.next(true).value); //여기서 리셋해주는거,,
console.log(iter.next().value);
console.log(iter.next().value);

//return 메서드로 제너레이터 종료하기
function* g() {
  yield 1;
  yield 2;
  yield 3;
}
var iter = g();
console.log(iter.next());
console.log(iter.return(10)); //return으로 종료하는데 { value: 10, done: true } 이렇게 끝남
console.log(iter.next());

//제너레이터 예외 던지기

function* idMaker() {
  var count = 0;
  while (true) {
    try {
      yield count++;
    } catch (e) {
      console.log("Error");
    }
  }
}

var iter = idMaker();
console.log(iter.next());
console.log(iter.next());
iter.throw(new Error("Error....."));

//반복가능한 객체에 위임하기 yield
function* f() {
  yield "X";
  yield "Y";
  yield "Z";
}
function* g() {
  yield 0;
  yield* [2, 4];
  yield* "AB";
  yield* f();
}
var iter = g();
for (var v of iter) console.log(v); //타입 상관없이 그냥 쭉 출력함

//8.11.5 템플릿 리터럴의 태그 함수
//func`${a} +${b} = ${a + b}`; //이렇게 func 하는 부분을 태그함수라고한다.
//템플릿 리터럴 ㄹ안의 문자열 ${...} 을 기준으로 분할한것...
function list() {
  return arguments;
}
var t = list`a${1}b${2}c${3}`;
console.log(t); //[Arguments] { '0': [ 'a', 'b', 'c', '' ], '1': 1, '2': 2, '3': 3 }

function htmlEscape(strings, ...values) {
  var result = strings[0];
  for (var i = 0; i < values.length; i++) {
    result += escape(values[i]) + strings[i + 1];
  }
  return result;
  function escape(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/`/g, "&#096;");
  }
}
var userinput = "<script>alert('test');</script>";
var msg = htmlEscape`<p>${userinput}</p>`;
console.log(msg); // <p>&lt;script&gt;alert(&#039;test&#039;);&lt;/script&gt;</p> 결과값...

/*태그함수의 첫번째 인수 : callSite객체라고 한다
1. 동결되어있다. -> 읽기만 가능, 추가 삭제 변경 모두 불가
2. callSite 객체는 캐시된다 -> 태그함수는 이전에 처리했던 템플릿 리터럴 문자열을 만나면 캐시된 callSite 객체를 첫번째 인수로 넘긴다
3. raw 프로퍼티가 있다  -> callSite에는 raw 프로퍼티가 있다. 배열이고 첫번째 인수의 배열과 마찬가지로 템플릿 리터럴을 ${...} 로 분할한 문자열 
첫번째 인수의 배열에는 이스케이프 된 문자열이 들어오지만 raw 프로퍼티에는 이스케이프 되지 않은 문자열이 들어옴 
*/
function tag(strings, ...values) {
  console.log(strings); //[ 'a\n', 'b\n', 'c', '' ]
  console.log(strings.raw); //[ 'a\\n', 'b\\n', 'c', '' ]
}
tag`a\n${1}b\n${2}c${3}`;
