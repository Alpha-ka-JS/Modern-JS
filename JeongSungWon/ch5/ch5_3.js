//5.3.1
/*
다시 보기
 */
console.log(10 + " little indians");
console.log(1 + {}); // {} = [object Object] 출력 왜 ??
console.log(true + (new Date()));

//5.3.2
var msgObj = new String("Everything is practice.");
console.log(msgObj.length);
console.log(msgObj.charAt(3));

var msg = "Everything is practice.";
var c = msg.charAt(3);// 이걸 실행하면
/*
 밑과 같은 작업이 시행
var msgObj = new String(msg);
var c = msgObj.charAt(3);

일시적으로 msgObj 와 같은 객체가 생성되고 처리가 끝나면 바로 삭제
*/

console.log(msg);

var msg = new String("Everything is practice.");
console.log(msg);
var msg = new String("Everything is practice.").valueOf(); // String 객체를 문자열로 변환
console.log(msg);

console.log(msg.toUpperCase());// 문자가 바뀌지않음
console.log(msg);

//5.3.3
console.log(String.fromCharCode(0xAE38));
console.log(String.fromCharCode(65,66,67));
console.log(String.fromCharCode(0xd83d, 0xdcd6));
console.log(String.fromCodePoint(0x1f4d6));
console.log("\u{1f4d6}");

//5.3.4
console.log(msg[3]);
console.log(msg[msg.length-1]);

var s = "📖";
console.log(s.codePointAt(0).toString(16));
console.log(s[0].codePointAt(0).toString(16));
console.log(s[1].codePointAt(0).toString(16));

function stringToArray(s){
    return s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}
stringToArray("📖 모던 자바스크립트 입문");
