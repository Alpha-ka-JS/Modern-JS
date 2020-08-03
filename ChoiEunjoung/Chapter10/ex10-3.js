//10.1.4 반복메서드
//반복메서드의 사용법은 전형적인 함수형 프로그래밍의 형태를 띤다.
/*
1. 반복 메서드의 인수로 전달한 함수는 배열의 요소마다 호출된다 
이때 반복하는 배열이 희소배열이면 없는 요소에 대해서는 호출되지 않는다. 
2. 반복 함수 대부분은 첫번째 인수로 함수를 받음
첫번째 인수는 현재 처리하는 배열 요소의 값
두번째는 현재 처리하고 있는 배열 요소의 인덱스
세번째는 메서드가 적용되는 배열의 참조  

*/

//forEach
var a = [1, 2, 3, 4, 5];
var sum = 0;
a.forEach(function (value) {
  sum += value;
});
console.log(sum); //15
a.forEach(function (v, i, a) {
  a[i] = v * v;
});
console.log(a); //[ 1, 4, 9, 16, 25 ]

//map  -> 인수로 받은 함수를 배여르이 요소별로 한번씩 실행하며 마지막에는 반환한 값으로 새로운 배열을 생성함
var a = [1, 2, 3, 4, 5];
var b = a.map(function (x) {
  return 2 * x;
});
console.log(b); //[ 2, 4, 6, 8, 10 ]
var a = [1, 4, 9, 16, 25];
var b = a.map(Math.sqrt);
var persons = [
  { name: 'dlwlrma', age: 28 },
  { name: 'eunjoung', age: 26 },
  { name: 'dumdidumdi', age: 25 },
];
var names = persons.map((person) => person.name);
var ages = persons.map((person) => person.age);
console.log(names); //[ 'dlwlrma', 'eunjoung', 'dumdidumdi' ]
console.log(ages); //[ 28, 26, 25 ]
console.log(persons.map((person) => person.name).map((name) => name.length));
//[ 7, 8, 10 ] 이름 길이

//reduce -> 배열의 첫번째 요소부터 마지막 요소까지 합성곱 처리... 합성곱... 오랜만..
//reduce 는  callback과 initial을 받음
//callback : prev 이전값, value 현재 처리하는 값, index  인덱스 ,array 메서드 적용중인 배열 참조
//initial 지정하면 초기값부터 시작 안하면 배열의 첫번째 요소부터
var a = [1, 2, 3, 4, 5];
var b = a.reduce(function (prev, value) {
  return prev + value;
}, 2);
var c = a.reduce(function (prev, value) {
  return prev + value;
});
console.log(b + ' : ' + c); //17 : 15
var a = [1, 2, 3, 4, 5];
var b = a.reduce(function (p, v) {
  return p * v;
}, 1);
var c = a.reduce(function (p, v) {
  return p > v ? p : v;
});
console.log(b + ' : ' + c); //120 : 5
//분자열에는 어케 적용되는 지 알아보자
var a = ['tom', 'huck', 'bbb'];
var b = a.reduce(function (p, v) {
  return p + ' ' + v;
});
console.log(b);
var a = ['tom', 'huck', 'bbb'];
var c = a.reduce(function (p, v) {
  p[v] = v.length;
  return p;
}, {});
console.log(c);
//permutation.....?
function permutation(a) {
  return a.reduce(
    function (list, element) {
      var newlist = []; //새로운 순열 저장
      list.forEach(function (seq) {
        //끝에서 두번재 요소부터 앞에서 두번째 요소에 이르기까지...?
        //element를 삽입하고 newlist에 각각추가
        for (var i = seq.length; i >= 0; i--) {
          var newseq = [].concat(seq); //seq복사본 저장
          newseq.splice(i, 0, element); //newseq i번째 요소 앞에 element삽입
          newlist.push(newseq); //newseq를 newlist 끝에 추가
        }
      });
      return newlist;
    },
    [[]]
  );
}
var a = [1, 2, 3];
permutation(a).forEach(function (v) {
  console.log(v);
});
