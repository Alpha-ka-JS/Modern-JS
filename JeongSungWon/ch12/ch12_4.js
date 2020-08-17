//12.4.2 RegExp의 메서드
var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/;
var text = 'Tom: 010-1234-5678';
var result = tel.exec(text);
console.log(result);

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = 'Tom: 010-1234-5678\nHuck: 020-550-7809\nBecky: 030-4321-9876';
// console.log(tel.lastIndex);
// console.log(tel.exec(text));
// console.log(tel.lastIndex);

// console.log(tel.exec(text));
// console.log(tel.lastIndex);

while ((result = tel.exec(text)) != null) {
  console.log(result[0], result[1], result[2], result[3]);
}
tel.lastIndex = 0;
result = tel.exec(text);
console.log(result[0]);
