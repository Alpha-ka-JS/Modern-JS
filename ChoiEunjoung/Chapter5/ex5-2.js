//문자열 제어하기

//문자열 연결
var str = "Hello " + "World";
console.log(str); //Hello World
//피연산자 중 문자열 또는 문자열로 변환할 수 있는 객체면 다른 피연산자의 타입을 문자열로 바꿔서 연결한다.
console.log(1 + {}); //1[object Object]
console.log(true + new Date()); //trueMon Jun 29 2020 14:24:38 GMT+0900 (GMT+09:00)

//래핑
var msgObj = new String("Everything is practice.");
console.log(msgObj.length); //23
console.log(msgObj.charAt(3));

/*문자열은 객체가 아니므로 프로퍼티를 가지지는 않는다. 
하지만 문자열에서 프로퍼티를 사용하려고 하면 문자열이 String객체로 변환되기 때문에 가능함
일시적으로 생성되는 String 객체이기때문에 사용자에게 보이지 않고 처리가 끝나면 곧바로 메모리에서 삭제된다.
*/
var msg = new String("Everything is practice.");
console.log(msg);
var msg = new String("Everything is practice.").valueOf();
console.log(msg);

console.log(msg.substring(7, 10));
console.log(msg.slice(7, 10)); //
console.log(msg.slice(-3));
console.log(msg.slice(-9, -6));
console.log(msg.indexOf("t"));
console.log(msg.indexOf("i", 10));
console.log(msg.lastIndexOf("t"));
console.log(msg.split(" "));
console.log(msg.replace("p", "P"));
console.log(msg.toUpperCase());
console.log(msg.endsWith("."));
console.log(msg.includes("things"));
console.log(msg.charCodeAt(0));
console.log(msg.codePointAt(0));

//자바스크립트의 문자열은 불변, replace와 toUpperCase의 경우에는 새로운 문자열을 반환하는 것.

//String 생성자의 메서드
//String.length
//String.fromCharCode() 인수로 넘긴 코드 목록을 문자열로 반환
//String.fromCodePoint() 인수로 넘긴 코드 포인트 목록으로 문자열을 만들어 반환

console.log(String.fromCharCode(0xae38));
console.log(String.fromCharCode(65, 66, 67));
console.log(String.fromCharCode(0xd83d, 0xdcd6));
console.log(String.fromCodePoint(0x1f4d6));

//문자열을 배열로 읽고 쓰기
msg[3] = "R"; //무시됨
console.log(msg);

//써로게이트 페어
function stringToArray(s) {
  return s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
} //[ '�',  ' ',  '모', '던', ' ',  '자', '바', '스','크', '립', '트', ' ','입', '문']
