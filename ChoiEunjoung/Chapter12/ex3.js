//12.3 패턴 매칭을 하는 문자열 메서드
//search
var s = '1 little, 2 little indian';
console.log(s.search(/little/));
console.log(s.search(/\d/));
console.log(s.search(/\bindian/));
console.log(s.search(/3\s/));
//문자열 찾으면 첫번째 문자열 위치를 반환 아니라면 -1
//폭발적인 매칭

//12.3.2 문자열 치환하기 :replace
var s = '1 little, 2little indian';
console.log(s.replace(/indian/, 'boy'));
console.log(s); //원본은 변하지않음
console.log(s.replace(/little/, 'big')); // 처음것만
console.log(s.replace(/little/g, 'big')); //다바꾸고

//치환패턴 : $n, $&
//$n에는 정규표현식 안에 소괄호를 사용해서 그룹화한 n번째 부분 정규 표현식과 일치한 문자열이 들어가고 0~999까지 가능
var person = 'Tom, tom@email.com, 010-1234-5678';
var result = person.replace(/0(\d{1,4}-\d{1,4}-\d{4})/g, '+82-$1');
console.log(result); //Tom, tom@email.com, +82-10-1234-5678

var date = '오늘은 2020년8월23일 입니다~~~!~!';
var result = date.replace(/(\d+)년(\d+)월(\d+)일/, '$1/$2/$3');
console.log(result); //아하 오늘은 2020/8/23 입니다~~~!~!

var name = 'Tome Sever';
var result = name.replace(/(\w+)\s(\w+)/, '$2 $1');
console.log(result);
//$&에는 일치한 부분 문자열이 들어온다
var address = '121-842 서울 특별시 마포구 월드컵로10길 56';
var result = address.replace(/\d{3}-\d{3}-\d{3}/, '우$&');
console.log(result);

//문자열 치환을 처리하는 함수
var text = '투명 드래곤이 [રલો]하고 울부짖었다... 이런걸 왜해...';
var new_text = text.replace(/[u0A80-\u0AFF]+/g, function (match) {
  var s = '';
  for (var i = 0; i < match.length - 1; i++) {
    s += String.fromCodePoint(match.charCodeAt(i) + 0x1eb81);
  }
  return s;
});
console.log(new_text);

//12.3.3 문자열 추출하기
console.log('1 little, 2 little indian'.match(/\d+/g));

var url = /\b(\w+):\/{2}([\w.]+)\/(\S*)\b/;
var text = 'Tom의 홈페이지 url은 http://www.example.com/tom 입니다';
console.log(text.match(url));

//12.3.4 문자열 나누기 split
console.log('172.20.51.65'.split('.'));
var names = 'Tome sawyer; huck finn; becky that';
var list = names.replace(/(^\s*|\s*$)/g, '').split(/\s*;\s*/);
console.log(list);
console.log('1 little,2 little indian'.split(/\s*(\d)\s*/));
//반환할 문자열 개수 제한하기
console.log('1,2,3,4,5'.split(/\s*,\s*/, 3));
