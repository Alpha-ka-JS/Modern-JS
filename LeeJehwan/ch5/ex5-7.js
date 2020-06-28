console.log(10 + "cookies");
console.log(100 + "");
console.log(("0000" + 12).slice(-4));

var n = 26;
console.log(n.toString() + 1);
console.log(n + 1);
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
console.log(x.toPrecision(6));

console.log(String(26));
console.log(String(1234.567));
console.log(String(0x1a));
console.log(String("ABC"));
console.log(String(true));
console.log(String(false));
console.log(String(NaN));
console.log(String(null));
console.log(String(undefined) + 123);
console.log(String({ x: 1, y: 2 }) + 123);
console.log(String([1, 2, 3]));

var s = "2";
console.log(typeof s);
console.log(typeof (s - 0));
console.log(typeof (s + 0));
console.log(typeof (s * 0));
console.log(s * 0);
console.log(typeof (s / 0));
console.log(s / 0);
console.log(typeof +s);

console.log(parseInt("3.14"));
console.log(parseFloat("3.14"));
console.log(parseInt("3.14 meters"));
console.log(parseFloat("3.14 meters"));
console.log(parseInt("0xFF"));
console.log(parseInt("0.5"));
console.log(parseInt(".5"));
console.log(parseInt("abc"));
console.log(parseFloat("\100"));
console.log(parseInt("ababa 3535 aaa"));
console.log(parseInt("ababa 35 35 aaa"));
console.log(parseInt("ababa3535aaa"));
console.log(parseInt("3333 aaaaff"));
console.log(parseInt("3333aaaaff"));
console.log(parseInt("33 33aaaaff"));
console.log(parseInt("aaaaff333"));
console.log(parseInt("aaaaff 333"));
console.log(parseInt("11 333"));
console.log(parseInt("11+333"));

console.log(Number("2.5555"));
console.log(Number(123));
console.log(Number(true));
console.log(Number(false));
console.log(Number(NaN));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number({ x: 1, y: 2 }));
console.log(Number([1, 2, 3]));

var toBoolean = function (x) {
  console.log(!!x);
};

toBoolean(1);
toBoolean(0);
toBoolean(true);
toBoolean(false);
toBoolean(null);
toBoolean(undefined);
toBoolean(NaN);
toBoolean("111");
toBoolean("0");
toBoolean({ x: 1, y: 2 });
toBoolean([1, 2, 3]);

console.log("5" - 3);
console.log("5" + 3);
console.log("5" - "4");
console.log("5" + +"5");
console.log("foo" + +"foo");
console.log("5" + -"2");
var x = 3;
console.log("5" + x - x);
console.log("5" - x + x);
console.log(("b" + "a" + +"a" + "a").toLowerCase());

console.log("" == "0"); // false
console.log(0 == ""); // true
console.log(0 == "0"); // true

console.log(false == "false"); // false
console.log(false == "0"); // true

console.log(false == undefined); // false
console.log(false == null); // false
console.log(null == undefined); // true

console.log("" === "0");
console.log(0 === "");
console.log(0 === "0");

console.log(false === "false");
console.log(false === "0");

console.log(false === undefined);
console.log(false === null);
console.log(null === undefined);
