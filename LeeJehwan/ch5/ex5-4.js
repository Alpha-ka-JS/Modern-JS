var a = [1, 2, 3];
var b = [1, 2, 3];
var c = a;
console.log(a == b);
console.log(a == c);

console.log(null == undefined);
console.log(1 == "1");
console.log("0xff" == 255);
console.log(true == 1);
console.log(true == "1");
console.log(new String("a") == "a");
console.log(new Number(2) == 2);
console.log([2] == 2);

console.log(NaN !== NaN);

console.log(null === undefined);
console.log(1 === "1");
console.log("0xff" === 255);
console.log(true === 1);
console.log(true === "1");
console.log(new String("a") === "a");
console.log(new Number(2) === 2);
console.log([2] === 2);

var a = undefined && 0;
var b = 3 && 2;
console.log(a, b);
console.log(3 && -5);

var p = null;
console.log(p && p.name);
