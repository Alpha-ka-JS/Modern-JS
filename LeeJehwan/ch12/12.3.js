// 문자열 검색: search 메서드
// 일치하는 최초 문자열의 첫 번째 문자 index를 반환
// 찾지 못하면 -1을 반환한다.
// 원본 문자열을 수정하지 않는다.
// 전역 검색을 지원하지 않아서 g flag를 무시한다.

var s = '1 little,2 little indian';
console.log(s.search(/little/)); // 2
console.log(s.search(/\d/)); // 0
console.log(s.search(/\bindian/)); // 18
console.log(s.search(/3\s/)); // -1

// 문자열 치환: replace 메서드
// 첫 인수를 받아 두번째 인수로 치환하여 결과 반환
// g flag를 지원한다.

var s = '1 little,2 little indian';
console.log(s.replace(/indian/, 'boy'));
console.log(s.replace(/little/, 'big'));
console.log(s.replace(/little/g, 'big'));

// 특수 치환 패턴
// $n: 소괄호를 사용하여 그룹화한 n번째 정규표현식을 사용 가능 (0~9999)
// $&: 일치한 부분 문자열이 들어온다.

// Q: n은 0~9999인데 왜 $1부터일까
var person = 'Tom, tom@example.com, 010-1234-5678';
var result = person.replace(/0(\d{1,4}-\d{1,4}-\d{4})/g, '+82-$1');
console.log(result);

var date = '오늘은 2016년9월10일 입니다.';
var result = date.replace(/(\d+)년(\d+)월(\d+)일/, '$1/$2/$3');
console.log(result);

var name = 'Tom Sawyer';
var result = name.replace(/(\w+)\s(\w+)/, '$2 $1');
console.log(result);

var address = '121-842 서울특별시 마포구 월드컵로10길 56';
var result = address.replace(/\d{3}-\d{3}/, '우$&');
console.log(result);

// 함수를 이용하여 replace
// match: 일치한 부분 문자열 ($&)
// group1: $1
// group2: $2
// offset: 일치한 부분 분자열의 첫 번째 문자 위치
// inputStr: 원본 문자열
var text = '투명 드래곤이 [પ નુલુંગ લસશ] 하고 울부짖었다';
var new_text = text.replace(/[\u0A80-\u0AFF]+/g, function (match) {
  var s = '';
  for (var i = 1; i < match.length - 1; i++) {
    s += String.fromCodePoint(match.charCodeAt(i) + 0x1eb81);
  }
  return s;
});
console.log(new_text);

// 문자열 추출하기 match 메서드
// 첫 인수로 받은 정규표현식과 일치하는 문자열을 순서대로 저장해서 배열로 반환
// g flag지원
// 두번째 이후 요소는 소그룹 문자열이 들어온다.
// exec와 같은 결과

console.log('1 little,2 little indian'.match(/\d+/g));

var url = /\b(\w+):\/{2}([\w.]+)\/(\S*)\b/;
var text = 'Tom의 홈페이지 URL은 http://www.example.com/~tom 입니다.';
// 문자://문자.반복/공백말고
console.log(text.match(url));
var text = 'Tom의 홈페이지 URL은 g://z.z.z.z.........z/z 입니다.';
console.log(text.match(url));

// split 메서드
console.log('172.20.51.65'.split('.'));

var names = ' Tom Sawyer ; Huckleberry finn ;Becky Thatcher ';
var list = names.replace(/(^\s*|\s$)/g, ''); //앞뒤 공백 제거
console.log(list);
var list = list.split(/\s*;\s*/); //; 앞뒤에 공백이 있다면 그걸 구분자로 사용
console.log(list);

console.log('1 little,2 little indian'.split(/\s*(\d)\s*/));
// 반환 개수 제한
console.log('1, 2, 3, 4, 5'.split(/\s*, \s*/, 3)); // [1,2,3]
