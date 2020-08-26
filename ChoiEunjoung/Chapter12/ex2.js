//12.2 기본적인 정규 표현식 패턴 작성하기
//12.2.2 문자 클래스 [...]
console.log(/[0123456789]/.test('10 little indians'));

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
console.log(surrogatePair.test('🎵'));
console.log(surrogatePair.test('길벗'));

//부정문자 클래스 [^...]
console.log(/[^0-9]/.test('137')); //false

//문자 클래스의 단축 표기 임의의 문자 1개
var reg = /c.t/;
console.log(reg.test('cats and dogs'));
console.log(reg.test('cool'));
//숫자와 숫자 외의 문자 \d \D
var dateTime = /\d\d\d\d-\d\d-\d\d-\d\d:\d\d/;
console.log(dateTime.test("it's 2016-08-27 10:15"));
console.log(dateTime.test('2016-AUG-27 10:15'));

//단어 문자와 단어 문자 외의 문자 \w \W
console.log(/\w/.test('A'));
console.log(/\w/.test('!~#$'));

//공백 문자와 공백 문자 외의 문자 \s \S : 공백문자 탭문자 개행문자등

console.log(/\s\w\w/.exec('JavaScript RegExp'));
console.log(/\s\w\w/.exec('JavaScriptRegExp'));

//문자 클래스 안에서의 이스케이프

//12.2.4 반복패턴
//최소 m번 최대 n번 :{m,n}
var reg = /[a-z]{6,12}/;
//바로 앞의 요소를 최소 n번 반복 { n,}
var reg = /[a-z]{6,}/;
//바로 앞의 요소를 n번 반복 :{n}
var reg = /[a-z]{4}\d{3}/;
var dateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;
console.log(dateTime.test("it's 2016-08-27 10:15"));
console.log(dateTime.test('2016-AUG-27 10:15'));

//최대 한번 반복 : ?
var reg = /[a-z]{4}\d?/;

//최소 한 번반복
var reg = /\s+Tom\s+/;

//최소 0번 반복
var reg = /[a-z]{4}\d*/;

console.log(/Java.*/.exec('I love JavaScript')); //가능한 최대 횟수만큼 반복해서 일치하는 결과 반환
console.log(/Java.*?/.exec('I love JavaScript')); //반복횟수 0

//12.2.5 그룹화와 참조
//그룹화 (...)
var bark = /bow+(woo+f)+/;
console.log(bark.test('bowwoofwoofwooofwoooof'));

var header = /<h[1-6]>.*<\/h[1-6]>/;
console.log(header.test('<h1>javascript</h1>'));
console.log(header.test('<h2>javascript</h2>')); //자동저장하면 알아서 바뀜 ㅠㅠ
var header = /<(h[1-6])>.*<\/\1>/;
console.log(header.test('<h1>javascript</h1>'));
console.log(header.test('<h2>javascript</h2>'));
var header = /<(h[1-6])>.*<\/\1>/;
console.log(header.exec('<h1>javascript</h1>'));

//캡쳐링 없는 그룹화
var postalcode = /우(?:\d{3})-(?:\d{3})/;
console.log(postalcode.test('우345-334'));
console.log(postalcode.test('오345-334'));

//12.2.6 위치를 기준으로 매칭하기 -> 앵커
//문자열 시작위치  :^
var jsFirst = /^JavaScript/;
console.log(jsFirst.test('JavaScript is powerful'));
console.log(jsFirst.test('I love JavaScript'));

//문자열의 마지막 위치 :$
var jsLast = /JavaScript$/;
console.log(jsFirst.test('JavaScript is powerful'));
console.log(jsFirst.test('I love JavaScript'));

//영어 단어의 경계 :\b
var reg = /\bcat\b/;
console.log(reg.test('저는 cat을 좋아합니다'));
console.log(reg.test('저는 cat 을 좋아합니다'));

//경계 외의 위치 :\B
var reg = /\Bdog/;
console.log(reg.test('저는 dog을 좋아합니다')); //f
console.log(reg.test('저는 Bulldog을 좋아합니다')); //t

//전방탐색 : (?:pattern)
console.log(/Java(?=Script)/.exec('I like JavaScript')); //Java
console.log(/Java(?=Script)/.exec('I like JavaCoffee')); //null

//전방 부정 탐색 :(?!pattern)
console.log(/Java(?!Script)/.exec('I like JavaScript')); //null
console.log(/Java(?!Script)/.exec('I like JavaCoffee')); //Java

//선택패턴
var animal = /apple|peach|ornage/;
console.log(animal.test('2 apples'));
console.log(animal.test('pea'));

var countFruits = /\b(\d+) (apple|peach|ornage)s?\b/;
var result = countFruits.exec('10 apples');
console.log(result);
console.log(result[0]);
console.log(result[1]);

//12.2.8 플래그
var reg = new RegExp('abc', 'g'); // 플래그 설정은 두번째 인수로
var reg = /abc/g; //플래그 하나설정
var reg = /abc/gi; // 두개설정 g는 글로벌
var reg = /\bcat\b/i; //대소문자 구분하지 않는 경우
console.log(reg.test('I like Cat'));
console.log(reg.test('I like CAT'));
//m 플래그 : 여러줄 모드로 패턴 매칭
var reg = /^cat/im;
console.log(reg.test('Dog\nCat\nMonkey'));
var reg = /at$/im;
console.log(reg.test('Dog\nCat\nMonkey'));

//12.2.9 매칭 매커니즘
var countFruits = /\b(\d+) (apple|peach|ornage)s?\b/;
var result = countFruits.exec('There are 10 apples');
