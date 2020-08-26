//12.5 정규표현식의 새로운 기능
//12.5.1 u플래그  : 분자열을 UTF-16으로 표시하는 16비트 문자열로 처리
console.log(/^.$/.exec('📖🤦‍♀'));
console.log('📖🤦‍♀ 어휴 '.match(/[\s\S]/g));
console.log(/^.$/u.exec('📖🤦‍♀'));
console.log('📖🤦‍♀ 어휴'.match(/[\s\S]/gu));
//하...

function stringToArr(s) {
  return s.match(/[\s\S]/gu) || [];
}
console.log(stringToArr('📖🤦‍♀ 어휴'));

//12.5.2 y플래그 : 시작 위치 고정 검색가능
//y플래그를 설정한 상태에서 일치하는 문자열이 발견되면 발견한 문자열 다음위치가 lastindex 프로퍼티에 저장됨
//찾지못한경우에는 0

var text = '1 little, 2 little, 3 little indian';
var reg = /\d+ little/y;
console.log(reg.sticky); // true
reg.lastIndex = 10;
console.log(reg.exec(text));
console.log(reg.lastIndex);
reg.lastIndex = 9;
console.log(reg.exec(text));
console.log(reg.lastIndex);

//자바스크립트 환경이 플래그를 지원하는지 확인하는 방법
function hasRegExpY() {
  try {
    new RegExp('.', 'y');
    return true;
  } catch (e) {
    return false;
  }
}

//12.5.3 flags 프로퍼티
var reg = /abc/gi;
console.log(reg.flags); //gi

//12.5.4 RegExp의 인수로 정규표현식을 넘겼을때의 동작
var reg = /우(\d{3})-(\d{3})/;
var copy = new RegExp(reg, 'gi');
console.log(copy);
//이렇게 복사 하더라도 객체가 별도의  lastindex를 가지게 되기때문에 다시 설정하지 않아도된다.
