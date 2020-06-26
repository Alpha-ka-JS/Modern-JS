//4.4.2 Date 생성자
console.log("Date 생성자");

var now = new Date();
console.log(now);
var then = new Date(2008, 5, 10);
console.log(then);
var elapsed = now - then;
console.log(elapsed);

var start = new Date();
var end = new Date();
var lapsed = end - start;

console.log(now.get)

var square = new Function("X", "return x * x");
