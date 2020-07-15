var now = new Date();
console.log(now);

var then = new Date(2008, 5, 10);
console.log(then);

var elapsed = now - then;
console.log(elapsed);

var start = new Date();
var end = new Date();
var elapsed = end - start;
console.log(elapsed);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.toString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.getUTCHours());
console.log(now.toUTCString());

var square = new Function('x', 'return x * x');
console.log(square);
console.log(square(5));
