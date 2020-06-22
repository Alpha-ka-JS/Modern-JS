//Symbol - 자기 자신을 제외한 그 어떤값과도 다르 유일무이한 값

var sym1 = Symbol();
var sym2 = Symbol();
console.log(sym1 == sym2); // false
var HEART = Symbol("하트");
console.log(HEART.toString()); //Symbol(하트)

var NONE = Symbol("none"); //var none = 0;
var BLACK = Symbol("black"); //var black = 1;
var WHITE = Symbol("white"); //var white = 2;

var sym1 = Symbol.for("club"); //Symbol.for() 문자열과 연결된 심벌 생성
var sym2 = Symbol.for("club");
console.log(sym1 == sym2); //true

var sym1 = Symbol.for("club");
var sym2 = Symbol("club");
//Symbol.keyFor()는 연결된 문자열을 확인함.
console.log("Symbol.keyFor(sym1) : " + Symbol.keyFor(sym1)); //club
console.log("Symbol.keyFor(sym2) : " + Symbol.keyFor(sym2)); // undefined
