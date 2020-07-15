// 함수의 프로퍼티 테스트
function fn(name) {
  var name = name;
  console.log(fn.caller);
}

function fn2() {
  fn('test');
}

console.log(fn.caller);
console.log(fn.length);
console.log(fn.name);
console.log(fn.prototype);
fn2();

// Function.prototype의 프로퍼티
console.log(fn.toString());
function say(greetings, honorifics) {
  console.log(greetings + ' ' + honorifics + this.name);
}
var tom = { name: 'Tom Sawyer' };
var becky = { name: 'Becjky Thatcher' };
say.apply(tom, ['hello!', 'Mr.']);
say.apply(becky, ['hi', 'Ms.']);
say.call(tom, 'hello', 'mr.');
say.call(becky, 'Hi!', 'Ms.');

var sayToTom = say.bind(tom);
sayToTom('Hello2', 'Bind');

function fibo(n) {
  if (n < 2) return n;
  if (!(n in fibo)) {
    fibo[n] = fibo(n - 1) + fibo(n - 2);
  }
  return fibo[n];
}

for (var i = 0; i <= 20; i++) {
  console.log((' ' + i).slice(-2) + ':' + fibo(i));
}
