//12.3.1 문자열 검색하기 : search 메서드
var s = '1 little, 2 little indian';
console.log(s.search(/little/));
console.log(s.search(/\d/));
console.log(s.search(/\bindian/));
console.log(s.search(/3\s/));
console.log(s.search(/2\s/));

//12.3.2 문자열 치환하기 : replace 메서드
var s = '1 little,2 little indian';
console.log(s.replace(/indian/, 'boy'));
console.log(s.replace(/little/, 'big'));
console.log(s.replace(/little/g, 'big'));

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

var text = '투명 드래곤이 [પ નુલુંગ લસશ] 하고 울부짖었다';
var new_text = text.replace(/[\u0A80-\u0AFF]+/g, function (match) {
  var s = '';
  for (var i = 1; i < match.length - 1; i++) {
    s += String.fromCodePoint(match.charCodeAt(i) + 0x1eb81);
  }
  return s;
});
console.log(new_text);

//12.3.3 문자열 추출하기 : match 메서드
console.log('1 little, 2 little indian'.match(/\d+/g));

var url = /\b(\w+):\/{2}([\w.]+)\/(\S*)\b/;
//url 부분에서 두 번째 그룹화 ([\w.]+)이면 'a....' 다음과 같은 경우만 해당되는거 아닌가? (문자1개, .은 여러 개)
var text = 'Tom의 홈페이지 URL은 http://www.example.com/~tom 입니다.';
console.log(text.match(url));

//12.3.4 문자열 나누기 : split 메서드
console.log('172.20.51.65'.split('.'));

var names = ' Tom Sawyer ; Huckleberry Finn ;Becky Thatcher ';
var list = names.replace(/(^\s*|\s*$)/g, '').split(/\s*;\s*/);
console.log(list);

//[ '', '1', 'little,', '2', 'litlle indian' ] 나오는데 맨 처음이 ''인 이유?
console.log('1 little,2 litlle indian'.split(/\s*(\d)\s*/));
