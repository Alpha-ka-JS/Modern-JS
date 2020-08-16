// ECMAScript 6 부터 추가된 정규표현식

// 정규 표현식은 UTF-16으로 표시하는 16비트 문자열로 처리
// 써로게이트 페어는 표현이 불가능
// uu flag
console.log(/^.$/.exec('📖'));

// 비정상적으로 나옴
var ret = '📖 모던 자바스크립트 입문'.match(/[\s\S]/g);
console.log(ret);

// 웹에서만 작동
console.log(/^.$/u.exec(''));
var ret = '📖 모던 자바스크립트 입문'.match(/[\s\S]/gu);
console.log(ret);

// 웹에서만 작동
function stringToArray(s) {
  return s.match(/[\s\S]/gu) || [];
}
console.log(stringToArray('📖 모던 자바스크립트 입문'));

// y flag: 시작 위치 고정 검색 가능
// sticky 프로퍼티(쓰기 가능)

//아래 세 예제를 비교해 보기
var text = '1 little, 2 little, 3 little indian';
var reg = /\d+ little/y;
console.log(reg.sticky);
reg.lastIndex = 10;
console.log(reg.exec(text));
console.log(reg.lastIndex);
reg.lastIndex = 9;
console.log(reg.exec(text));
console.log(reg.lastIndex);

var text = '1 little, 2 little, 3 little indian';
var reg = /\d+ little/;
console.log(reg.sticky);
reg.lastIndex = 10;
console.log(reg.lastIndex);
console.log(reg.exec(text));
console.log(reg.lastIndex);
reg.lastIndex = 9;
console.log(reg.exec(text));
console.log(reg.lastIndex);

var text = '1 little, 2 little, 3 little indian';
var reg = /\d+ little/g;
console.log(reg.sticky);
reg.lastIndex = 10;
console.log(reg.lastIndex);
console.log(reg.exec(text));
console.log(reg.lastIndex);
reg.lastIndex = 9;
console.log(reg.exec(text));
console.log(reg.lastIndex);

function hasRegExpUY() {
  try {
    new RegExp('.', 'y');
    new RegExp('.', 'u');
    return true;
  } catch (e) {
    return false;
  }
}

console.log(hasRegExpUY());

var reg = /abc/giuy;
console.log(reg.flags);

// deep copy가 됩니다.
var reg = /우(\d{3})-(\d{3})/;
var copy = new RegExp(reg, 'gi');
console.log(reg);
console.log(copy);
