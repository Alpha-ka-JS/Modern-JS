//10.4.5 Set
//중복되지 않는 유일한 데이터를 수집하여 활용하기 위한 객체
//set 객체는 외부에서 키를 사용해 데이터 값을 추가/삭제/검색 할 수 있다.

var set = new Set();
console.log(set);

var zip = new Set(['122-2222', '3440-4444']);
console.log(zip);

function* makeZip() {
  yield '222-3234123';
  yield '222-22342';
}
var zips = makeZip();
zip = new Set(zips);
console.log(zip);

console.log(zip.size);

var zip = new Set();
zip.add('222-3333');
zip.add('3355-2555');
console.log(zip);

//데이터가 있는지 확인
console.log(zip.has('222-3333'));
console.log(zip.has('222-3335'));

//데이터 삭제
zip.delete('222-3333');
console.log(zip);
zip.clear();
console.log(zip);

//전체 데이터값의 열거
var zip = new Set(['222-3345', '333-4567']);
var iter = zip.keys();
for (var v of iter) console.log(v + ' keys');

var zip = new Set(['222-3339', '555-6666']);
var iter = zip.entries();
for (var v of iter) console.log(v + ' entries'); //[ '222-3339', '222-3339' ] [ '555-6666', '555-6666' ]

for (var v of zip) console.log(v); //222-3339 555-6666

//모든 데이터를 함수로 처리하기
var zip = new Set(['1222-2222', '4545-456']);
zip.forEach(function (v1, v2, m) {
  console.log(v1 + ' : ' + v2); // 1222-2222 : 1222-2222  4545-456 : 4545-456
});
