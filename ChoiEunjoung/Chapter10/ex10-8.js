/*10.4.4 Map
데이터를 수집하여 활용하기 위한 객체 
Map 객체에는 데이터를 수집하기 위한 다양한 메서드가 마련되어 있다. 
Object 객체는 키로 문자열만 사용할 수 있지만 Map 객체는 키 타입에 제한이 없다 
Map은 내부적으로 해시테이블을 활용하기 때문에 데이터 검색 속도가 빠르다 
Map 객체는 반복가능하며 for/of로 순회하면서 키와 값으로 구성된 배열을 반환한다 
Map 객체는 데이터의 개수를 size 프로퍼티로 구할 수 있다. 핮미ㅏㄴ Object는 수동으로 계산해야한다 

*/

//데이터 없는 빈 Map 객체를 생성한다
var map = new Map();
console.log(map);

var zip = new Map([
  ['tom', '222-2222'],
  ['huck', '222-3333'],
]);
console.log(zip); //Map { 'tom' => '222-2222', 'huck' => '222-3333' }

function* makeZip() {
  yield ['Tom', '123-2222'];
  yield ['huck', '22;3442'];
}
var zips = makeZip();
zip = new Map(zips);
console.log(zip); //Map { 'Tom' => '123-2222', 'huck' => '22;3442' }

console.log(zip.size); //2

//데이터 추가하기
var zip = new Map();
zip.set('Tom', '131-2222');
zip.set('asdf', '222-3523');
console.log(zip);
//값 읽기
console.log(zip.get('Tom')); //131-2222
console.log(zip.get('eunjoung')); //undefined

//데이터가 있는지 확인
console.log(zip.has('Tom')); //true
console.log(zip.has('eun')); //false

//데이터의 삭제
zip.delete('asdf');
console.log(zip); //Map { 'Tom' => '131-2222' }
zip.clear();
console.log(zip); //Map {}

//모든 키 값의 열어
var zip = new Map([
  ['Tom', '122-2222'],
  ['huck', '020-3939'],
]);
var iter = zip.keys();
for (var v of iter) console.log(v);
for (var v of zip) console.log(v);

//모든 값의 열거
var iter = zip.values();
for (var v of iter) console.log(v);

//모든 데이터의 열거
var iter = zip.entries();
for (var v of iter) console.log(v);

//모든 데이터를 함수로 처리하기
var zip = new Map([
  ['Tom', '122-2222'],
  ['huck', '020-3939'],
]);
zip.forEach(function (v, k, m) {
  console.log(k + ' : ' + v);
});
