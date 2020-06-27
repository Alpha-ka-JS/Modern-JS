//5.4.1
var a = [1,2,3];
var b = [1,2,3];
var c = a;
console.log(a == b);
console.log(a == c);

console.log(null == undefined);
console.log(1 == "1");
console.log("0xff" == 255);
console.log(true == 1);
console.log(true == "1");
console.log((new String("a")) == "a");
console.log((new Number(2)) == 2);
console.log([2] == 2);

console.log(null === undefined);
console.log(1 === "1");
console.log("0xff" === 255);
console.log(true === 1);
console.log(true === "1");
console.log((new String("a")) === "a");
console.log((new Number(2)) === 2);
console.log([2] === 2);

//5.4.2
var p = null;
console.log(p && p.name);
p = {name:"Tom", age:18};
console.log(p && p.name);

function f(x){
    x = x || 100;
    console.log(x)
}
f();
f(2);
f(0);
f("");
