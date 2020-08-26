// 리터럴 문자(일반 문자): 숫자(0~9), 알파벳(a~z, A~Z)
// 메타 문자(특수 문자): + .  -> 앞에 \ 를 붙여줘야 한다.
console.log('abcde');
var reg = /\d+/;
console.log(reg);
console.log(new RegExp('\\d+'));
console.log(new RegExp('\\\\'));

console.log(/[0123456789]/.test('10 littler indians'));
console.log(/[0123456789]/.exec('10 littler indians'));

// [ ] 문자 클래스: 단일 문자와 일치 시킨다.
// [a-z] 전체 소문자 중 문자 한 개
// [abcx-z] [a] [b] [c] [x] [y] [z] 중 문자 한 개
// [a-zA-Z0-9] 모든 알파벳과 숫자 중 문자 한 개
console.log(/[^0-9]/.test('137'));

// . 은 줄 바꿈 문자를 제외한 임의의 문자 한 개와 일치 시킨다.
console.log(/c.t/.test('cat'));
console.log(/c.t/.exec('cat'));
console.log(/c.t/.test('cute'));
console.log(/c.t/.exec('cute'));
console.log(/c.t/.test('acute'));
console.log(/c.t/.exec('acute'));
console.log(/c.t/.test('acu2te'));
console.log(/c.t/.exec('acu2te'));

// 숫자 : \d
// 숫자 이외의 문자: \D
var dateTime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
console.log(dateTime.test("It's 2016-08-27 10:15"));
console.log(dateTime.test('2016-aaa-27 10:15'));

// 단어: \w
// 단어 이외의 문자: \W
console.log(/\w/.test('A'));
console.log(/\w/.exec('A'));
console.log(/\w/.test('_'));
console.log(/\w/.exec('_'));
console.log(/\w/.test('!@#$%'));
console.log(/\w/.exec('!@#$%'));
console.log(/\W/.test('!@#$%'));
console.log(/\W/.exec('!@#$%'));
console.log(/\W/.test('ABDFDFD'));
console.log(/\W/.exec('ABDFDFD'));

// 공백: \s
// 공백 이외의 문자: \S
console.log(/\s\w\w/.exec('JAvascript RegExp'));
console.log(/\s\w\w/.exec('JAvascriptRegExp'));

// 문자 클래스 내에서 메타 문자를 사용하면 그 문자 자체의 의미를 갖음
console.log(/.[\s?\w]/.exec('?test'));

// {m,n}: 최소 m번 최대 n번 반복
// {n,}: 바로 앞의 요소를 최소 n번 반복
// {n}: 바로 앞의 요소를 n번 반복
// ?: {0,1} 바로 앞의 요소를 최소 0번 최대 1번 반복
// +: {1,} 바로 앞의 요소를 최소 1번 반복
// *: {0,} 바로 앞의 요소를 최소 0번 반복
console.log(/[a-z]{6,12}/.exec('abcdddd344'));
console.log(/[a-z]{6,}/.exec('abcdddd344'));
console.log(/[a-z]{2}/.exec('abcdddd344'));
var dateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;
console.log(dateTime.test("It's 2016-08-27 10:15"));
console.log(dateTime.test('2016-aaa-27 10:15'));

console.log(/[a-z]{4}\d?/.exec('acss'));
console.log(/[a-z]{4}\d?/.exec('acwess4'));
console.log(/[a-z]{4}\d?/.exec('acwe44ss'));
console.log(/\s+Tom\s+/.exec('this is Tom'));
console.log(/\s+Tom\s+/.exec('this is Tom and'));
console.log(/\s+Tom\s+/.exec('this is Tom                 and'));

console.log(/\s*Tom\s*/.exec('this is Tom'));
console.log(/\s*Tom\s*/.exec('this is Tom   '));
console.log(/\s*Tom\s*/.exec('thisisTom'));

console.log(/Java.*/.exec('I love Javascript'));

// 욕심 많은 반복 vs 욕심 없는 반복
// 아래와 무슨 차이일까 명확하게 구분해보기
console.log(/Java.*?/.exec('I love Javascript'));
console.log(/Java/.exec('I love Javascript'));
console.log(/0*?1/.exec('000012'));

// 그룹화와 참조
// 소괄호로 묶어서 부분 정규 표현식으로 표현
// 캡처링이 되어 나중에 재사용이 가능하다.
// \1 \2 \3 으로 재사용
// ?: 를 앞에 붙이면 캡처링이 되지 않음
var bark = /bow+(woo+f)+/;
console.log(bark.exec('bowwoofwoofwooofwoooof'));
console.log(bark.exec('bowwwwwwwwwwwoooooooofwoofwoooooooof'));

var header = /<h[1-6]>.*<\/h[1-6]>/;
console.log(header.exec('<h1>javascript</h1>'));
console.log(header.exec('<h1>javascript</h2>'));

var header = /<(h[1-6])>.*<\/\1>/;
console.log(header.exec('<h1>javascript</h1>'));
console.log(header.exec('<h1>javascript</h2>'));

var postalCode = /우(?:\d{3})-(?:\d{3})/;
console.log(postalCode.exec('우463-803'));

// ^: 문자열의 시작에 고정
var jsFirst = /^JavaScript/;
console.log(jsFirst.exec('JavaScript is powerful'));
console.log(jsFirst.exec('I love JavaScript'));

// $: 문자열의 끝에 고정
var jsLast = /JavaScript$/;
console.log(jsLast.exec('JavaScript is powerful'));
console.log(jsLast.exec('I love JavaScript'));

// ^~~~$: 시작과 끝의 고정
var onlyJS = /^JavaScript$/;
console.log(onlyJS.exec('JavaScript is powerful'));
console.log(onlyJS.exec('I love JavaScript'));
console.log(onlyJS.exec('JavaScript'));

// \b: 영어 단어의 경계
console.log(/\bcat\b/.exec('저는 cat 을 좋아합니다.'));
console.log(/\bcat\b/.exec('저는 cat을 좋아합니다.'));
console.log(/\bcat\b/.exec('cat을 좋아합니다.'));
console.log(/\bcat\b/.exec('좋아합니다 cat'));

// \B: 영어 단어의 경계 외의 위치
console.log(/\Bcat/.exec('I like cat.'));
console.log(/\Bcat/.exec('I cat like'));
console.log(/\Bcat/.exec('catttt'));
console.log(/\Bcat/.exec('likecat'));
console.log(/\Bcat/.exec('cat'));

// (?=pattern): 전방 탐색 으로 앞의 단어 뒤에 이것이 나옴
console.log(/Java(?=Script)/.exec('I like JavaScript'));
console.log(/Java(?=Script)/.exec('I like Java and Script'));
console.log(/Java(?=Script)/.exec('I like JavaCoffee'));

// (?!pattern): 전방 부정 탐색
console.log(/Java(?!Script)/.exec('I like JavaScript'));
console.log(/Java(?!Script)/.exec('I like Java and Script'));
console.log(/Java(?!Script)/.exec('I like JavaCoffee'));

var animal = /apple|peach|orange/;
console.log(animal.exec('2 apples'));
console.log(animal.exec('pea'));

// |: 선택 패턴
var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
var result = countFruits.exec('10 apples');
console.log(result);

// 플래그
// i: 대소문자를 구분하지 않는다.
// g: 전역검사를한다.
// m: 여러줄 모드로 검색한다. (^와 $는 각 행의 시작과 끝으로 변한다.)
// y: 시작 위치 고정 검색을 한다.
// u: 정규 표현식 패턴을 내부적으로 유니코드 코드 포인트 열로 처리한다.
var reg = new RegExp('abc', 'g');
console.log(reg);
var reg = /abc/g;
console.log(reg);

console.log(/\bcat\b/i.test('I like Cat'));
console.log(/\bcat\b/i.test('I like cat'));
console.log(/\bcat\b/i.test('I like CAT'));

var reg = /^Cat/im;
console.log(reg.exec('Dog\nCat\nMonky'));
var reg = /at$/im;
console.log(reg.exec('Dog\nCat\nMonky'));
