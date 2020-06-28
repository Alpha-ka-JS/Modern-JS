console.log("Hello" + "World!");
console.log("1" + "2");
console.log(10 + " little indians");
console.log(1 + {});
console.log(true + new Date());

var a = 3;
console.log("a 값은 " + a + "입니다.");

var msgObj = new String("Everything is practice.");
console.log(msgObj);
console.log(msgObj.toString());
console.log(msgObj.valueOf());
console.log(msgObj.length);

var msg = "Everything is practice.";
console.log(msg);
var msg = new String("Everything is practice.");
console.log(msg);
var msg = new String("Everything is practice.").valueOf();
console.log(msg);

console.log(msg.substring(7, 10));
console.log(msg.slice(7, 10));
console.log(msg.slice(-3));
console.log(msg.slice(-9, -6));
console.log(msg.indexOf("t"));
console.log(msg.indexOf("i", 10));
console.log(msg.lastIndexOf("t"));
console.log(msg.split(" "));
console.log(msg.split());
console.log(msg.replace("p", "P"));
console.log(msg.toUpperCase());
console.log(msg.endsWith("."));
console.log(msg.includes("thing"));
console.log(msg.charCodeAt(0));
console.log(msg.codePointAt(0));

console.log("\u{1f4d6}".codePointAt(0));

console.log(String.fromCharCode(0xae38));
console.log(String.fromCharCode(65, 66, 67));
console.log(String.fromCharCode(0xd83d, 0xdcd6));
console.log(String.fromCharCode(0x1f4d6));
console.log(String.fromCodePoint(0x1f4d6));
console.log("\u{1f4d6}");

console.log(msg[3]);
console.log(msg[msg.length - 1]);
msg[3] = "R";
console.log(msg);

var s = "📖";
console.log(s.codePointAt(0).toString(16));
console.log(s[0].codePointAt(0).toString(16));
console.log(s[1].codePointAt(0).toString(16));
console.log(s[0] + s[1]);

function stringToArray(s) {
  return s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}
console.log(stringToArray("📖 모던 자바스크립트 입문"));
