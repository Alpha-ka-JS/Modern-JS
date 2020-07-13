function* fibo() {
  var fn1 = 0,
    fn2 = 1;
  while (true) {
    var fnew = fn1 + fn2;
    fn1 = fn2;
    fn2 = fnew;
    reset = yield fn1;
    if (reset) {
      (fn1 = 0), (fn2 = 1);
    }
  }
}

var iter = fibo();
for (var i = 0; i < 10; i++) {
  console.log(iter.next().value);
}
console.log(iter.next().value);
console.log(iter.next(true).value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.return(5));
console.log(iter.next());

function* idMaker() {
  var count = 0;
  while (true) {
    try {
      yield count++;
    } catch (e) {
      console.log("오류가 발생했습니다.");
    }
  }
}
var iter = idMaker();
console.log(iter.next());
console.log(iter.next());
iter.throw(new Error("오류"));

function* f() {
  yield "X";
  yield "Y";
}
function* g() {
  yield 0;
  yield* [2, 4];
  yield* "AB";
  yield* f();
}
var iter = g();
for (var v of iter) console.log(v);
