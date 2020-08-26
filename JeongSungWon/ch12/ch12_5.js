//12.5.1 u 플래그
console.log(/^.$/.exec('📖'));
console.log(/^.$/.exec('^'));
console.log('📖 모던 자바스크립트 입문'.match(/[\s\S]/g));

console.log(/^.$/u.exec('📖'));
console.log('📖 모던 자바스크립트 입문'.match(/[\s\S]/gu));

function stringToArray(s) {
  return s.match(/[\s\S]/gu) || [];
}
stringToArray('📖 모던 자바스크립트 입문');

//12.5.2 y 플래그
var text = '1 little, 2 little, 3 little indian';
var reg = /\d+ little/y;
console.log(reg.sticky);
reg.lastIndex = 10;
console.log(reg.exec(text));
console.log(reg.lastIndex);
reg.lastIndex = 9;
console.log(reg.exec(text));
console.log(reg.lastIndex);

function hasREgExpY() {
  try {
    new RegExp('.', 'y');
    return true;
  } catch (e) {
    return false;
  }
}

//12.5.3 flags 프로퍼티
var reg = /abc/gi;
console.log(reg.flags);

//12.5.4 RegExp의 인수로 정규 표현식을 넘겼을 떄의 동작
var reg = /우(\d{3})-(\d{3})/;
var copy = new RegExp(reg, 'gi');
