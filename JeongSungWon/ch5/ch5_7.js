//5.7.1
console.log(typeof (100+""));
console.log(("0000" + 12).slice(-5));
console.log(typeof 0000);

var n = 26;
console.log(typeof n);
console.log(n.toString());
console.log(n.toString(2));
console.log(n.toString(16));
console.log((26).toString(16));

var x = 1234.567;
console.log(x.toString());
console.log(x.toString(16));
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toExponential(3));
console.log(x.toPrecision(3));
console.log(x.toPrecision(7));

console.log(String(26));
console.log(String(1234.567));
console.log(String(0x1a));
console.log(String("ABC"));
console.log(String(true));
console.log(String(false));
console.log(String(NaN));
console.log(String(null));
console.log(String(undefined));
console.log(String({x:1, y:2}));
console.log(String([1,2,3]));

//5.7.2
var s = "2";
console.log(typeof (s - 0));
console.log(typeof +s)
console.log(parseInt("3.14"));
console.log(parseFloat("3.14"));
console.log(parseInt("3.14meter"));
console.log(parseFloat("3.14meter"));
console.log(parseInt("0xFF"));
console.log(parseInt("0.5"));
console.log(parseInt(".5"));
console.log(parseInt("Abc"));
console.log(parseFloat("\100"));

console.log(parseInt("101",2));
console.log(parseInt("FF",16));

console.log(Number(NaN));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number({x:1, y:2}));
console.log(Number([1,2,3]));
