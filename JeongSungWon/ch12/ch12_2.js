//12.2.1 리터럴 문자
/*
^ $ \ . * + ? ( ) [ ] { } |
와 같은 문자는 앞에 \를 붙여서 이스케이프 해야함.
*/

//12.2.2 문자 클래스
console.log(/[0123456789]/.test('10 little indians'));
console.log(/[a-z]/.test('안녕')); // 전체 소문자 중 문자 한개
console.log(/[abcx-z]/.test('zpoi')); //a, b, c, x, y, z 중 문자 한개
console.log(/[a-zA-Z0-9]/.test('023'));

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
console.log(surrogatePair.test('📖'));
console.log(surrogatePair.test('길벗'));

console.log(/[^0-9]/.test('137'));

console.log(/[\u3131-\u314E]/.test('137ㅂ'));
console.log(/[^\u3131-\u314E]/.test('ㅂ'));

//12.2.3 문자 클래스의 단축 표기
console.log('12.2.3');
console.log(/c.t/.test('cat'));
console.log(/c..l/.test('console'));

// 숫자
var dateTime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
console.log(dateTime.test("it's 2016-08-27 10:15"));
console.log(dateTime.test('2016-Aug-27 10:15'));

// 단어
console.log(/\w/.test('A'));
console.log(/\w/.test('!@#$'));

// 공백 문자와 공백 문자 외의 문자
console.log(/\s\w\w/.exec('JavaScript RegEXP'));
console.log(/\s\w\w/.test('JavaScript RegEXP'));
console.log(/\s\w\w/.exec('JavaScriptRegEXP'));

// 문자 클래스 안에서의 이스케이프
console.log(/\-/.test('-'));
console.log(/\?/.test('!'));

//12.2.4 반복 패턴
console.log('12.2.4 반복 패턴');
console.log(/[a-z]{6,12}/.test('wfoewifw'));
console.log(/[a-z]{6,}/.test('wfew'));

var dateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;
console.log(dateTime.test("it's 2016-08-27 10:15"));
console.log(dateTime.test('2016-Aug-27 10:15'));

console.log(/[a-z]{4}\d?/.test('dfew1'));
console.log(/[a-z]{4}\d?/.test('dfew'));
console.log(/[a-z]{4}\d?/.test('dfew3fewf2wefd421'));
console.log(/[a-z]{4}\d?/.test('dfw143'));
console.log(/\s+Tom\s+/.test(' Tom '));
console.log(/\s+Tom\s+/.test('  Tom '));
console.log(/[a-z]{4}\d*/.test('werw3'));

console.log(/Java.*/.exec('I love JavaScritpt'));
console.log(/Java.*?/.exec('I love JavaScritpt'));

//12.2.5 그룹화와 참조
var bark = /bow+(woo+f)+/;
//제일 마지막 +는 )를 최소 한 번 이상 반복으로 알고 있는데 왜 true?
console.log(bark.test('bowwoofwoofwooofwoooof'));
console.log(bark.test('bowwwooof)'));

var header = /<h[1-6]>.*<\/h[1-6]>/;
console.log(header.test('<h1>JavaScript</h1>'));
console.log(header.test('<h1>JavaScript</h2>'));

var header = /<(h[1-6])>.*<\/\1>/;
console.log(header.test('<h1>JavaScript</h1>'));
console.log(header.test('<h1>JavaScript</h2>'));
console.log(header.test('<h2>JavaScript</h2>'));
console.log(header.exec('<h1>JavaScript</h1>'));

var postalCode = /우(?:\d{3})-(?:\d{3})/;
console.log(postalCode.test('우463-803'));

//12.2.6 위치를 기준으로 매칭하기
console.log('12.2.6 위치를 기준으로 매칭');
//문자열의 시작 위치 : ^
var jsFirst = /^JavaScript/;
console.log(jsFirst.test('JavaScript is powerful'));
console.log(jsFirst.test('I love JavaScript'));

//문자열의 마지막 위치 : $
var jsFirst = /JavaScript$/;
console.log(jsFirst.test('JavaScript is powerful'));
console.log(jsFirst.test('I love JavaScript'));

//영어 단어의 경계 : \b
console.log(/\bcat\b/.test('cat을 좋아합니다.'));
console.log(/\bcat\b/.test('저는 cat을 좋아합니다.'));
console.log(/cat/.test('imcat을 좋아합니다.'));
console.log(/cat/.test('I like cat'));
console.log(/\bo.\b/.exec('Raindrops on roses, and whiskers on kittens.'));

//영어 단어의 경계 외의 위치 : \B
console.log(/\Bdog/.test('Bulldog'));
console.log(/\Bdog/.test('dog'));
console.log(/\Bdog/.test('I love dog'));
console.log(/\Bo.\B/.exec('Raindrops on roses, and whiskers on kittens.'));

//전방 탐색 :(?=pattern)
console.log(/Java(?=Script)/.exec('I like JavaScript'));
console.log(/Java(?=Script)/.exec('I like JavaCoffee'));

//전반 부정 탐색 : (?!pattern)
console.log(/Java(?!Script)/.exec('I like JavaScript'));
console.log(/Java(?!Script)/.exec('I like JavaCoffee'));

//12.2.7 선택 패턴
var animal = /apple|peach|orange/;
animal.test('2 apples');
animal.test('pea');

var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
var result = countFruits.exec('10 apples');
console.log(result);
console.log(result[1]);

//12.2.8 플래그
var reg = new RegExp('abc', 'g');
var reg = /abc/g;
var reg = /abc/gi;

// i 플래그
console.log(/\bcat\b/i.test('I like Cat'));
console.log(/\bcat\b/i.test('I like CAT'));

// m 플래그
var reg = /^cat/im;
console.log(reg.test('Dog\nCat\nMonkey'));
var reg = /at$/im;
console.log(reg.test('Dog\nCat\nMonkey'));
