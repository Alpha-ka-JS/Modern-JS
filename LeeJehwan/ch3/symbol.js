var sym1 = Symbol();
var sym2 = Symbol();

console.log(sym1 == sym2);

var HEART = Symbol("하트");
console.log(HEART);
console.log(HEART.toString());

var NONE = Symbol("none");
var BLACK = Symbol("black");
var WHITE = Symbol("white");

var a = NONE;
console.log(a == NONE);

var sy1 = Symbol.for("club");
var sy2 = Symbol.for("club");
console.log(sy1);
console.log(sy1 == sy2);
console.log(sy1 === sy2);
console.log(sy1 == "club");
console.log(Symbol.keyFor(sy1));
console.log(Symbol.keyFor(sym1));

var sym1 = Symbol("club");
var sym2 = Symbol("club");
console.log(sym1 == sym2);
