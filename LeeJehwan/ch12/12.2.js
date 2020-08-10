console.log('abcde');
var reg = /\d+/;
console.log(reg);
console.log(new RegExp('\\d+'));
console.log(new RegExp('\\\\'));

console.log(/[0123456789]/.test('10 littler indians'));
console.log(/[0123456789]/.exec('10 littler indians'));

// [a-z] 전체 소문자 중 문자 한 개
// [abcx-z] [a] [b] [c] [x] [y] [z] 중 문자 한 개
// [a-zA-Z0-9] 모든 알파벳과 숫자 중 문자 한 개

console.log(/[^0-9]/.test('137'));
console.log(/c.t/.test('cat'));
console.log(/c.t/.exec('cat'));
console.log(/c.t/.test('cute'));
console.log(/c.t/.exec('cute'));
console.log(/c.t/.test('acute'));
console.log(/c.t/.exec('acute'));
console.log(/c.t/.test('acu2te'));
console.log(/c.t/.exec('acu2te'));

var dateTime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
console.log(dateTime.test("It's 2016-08-27 10:15"));
console.log(dateTime.test('2016-aaa-27 10:15'));

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

console.log(/\s\w\w/.exec('JAvascript RegExp'));
console.log(/\s\w\w/.exec('JAvascriptRegExp'));

console.log(/.[\s?\w]/.exec('?test'));

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

// 욕심 없는 반복
// 아래와 무슨 차이일까 명확하게 구분해보기
console.log(/Java.*?/.exec('I love Javascript'));
console.log(/Java/.exec('I love Javascript'));
console.log(/0*?1/.exec('000012'));

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

var jsFirst = /^JavaScript/;
console.log(jsFirst.exec('JavaScript is powerful'));
console.log(jsFirst.exec('I love JavaScript'));

var jsLast = /JavaScript$/;
console.log(jsLast.exec('JavaScript is powerful'));
console.log(jsLast.exec('I love JavaScript'));

var onlyJS = /^JavaScript$/;
console.log(onlyJS.exec('JavaScript is powerful'));
console.log(onlyJS.exec('I love JavaScript'));
console.log(onlyJS.exec('JavaScript'));

console.log(/\bcat\b/.exec('저는 cat 을 좋아합니다.'));
console.log(/\bcat\b/.exec('저는 cat을 좋아합니다.'));
console.log(/\bcat\b/.exec('cat을 좋아합니다.'));
console.log(/\bcat\b/.exec('좋아합니다 cat'));

console.log(/\Bcat/.exec('I like cat.'));
console.log(/\Bcat/.exec('I cat like'));
console.log(/\Bcat/.exec('catttt'));
console.log(/\Bcat/.exec('likecat'));
console.log(/\Bcat/.exec('cat'));

console.log(/Java(?=Script)/.exec('I like JavaScript'));
console.log(/Java(?=Script)/.exec('I like Java and Script'));
console.log(/Java(?=Script)/.exec('I like JavaCoffee'));

console.log(/Java(?!Script)/.exec('I like JavaScript'));
console.log(/Java(?!Script)/.exec('I like Java and Script'));
console.log(/Java(?!Script)/.exec('I like JavaCoffee'));

var animal = /apple|peach|orange/;
console.log(animal.exec('2 apples'));
console.log(animal.exec('pea'));

var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
var result = countFruits.exec('10 apples');
console.log(result);

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
