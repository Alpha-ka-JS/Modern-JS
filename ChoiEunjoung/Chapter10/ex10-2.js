//10.1.3 접근자 메서드
//join -> 모든 요소값을 문자열로 바꿔서 인수로 받은 문자로 연결해서 반환
var a = ['A', 'B', 'C'];
console.log(a.join('-')); //A-B-C
console.log(a.join(''));
//concat -> 요소를 추가해서 새로운 배열 생성
//원래의 배열은 건드리지않음
var a = ['A', 'B', 'C'];
a.concat(['D', 'E']);
a.concat(['F', 'G'], ['A', 'B']);
console.log(a.concat(['D', 'E']));
a.concat(1, 'X', true);
console.log(a.concat(1, 'X', true)); //[ 'A', 'B', 'C', 1, 'X', true ]
console.log(a.concat('D', ['E', ['F', 'G']])); //[ 'A', 'B', 'C', 'D', 'E', [ 'F', 'G' ] ]
//slice -> 일부를 제거하고 배열을 반환한다
var arr = ['A', 'B', 'C', 'D', 'E'];
console.log(arr.slice(1, 3)); //[ 'B', 'C' ]
console.log(arr.slice(3)); //[ 'D', 'E' ]
console.log(arr.slice(1, -1)); //[ 'B', 'C', 'D' ]
console.log(arr.slice(-3, -2)); //[ 'C' ]

//indexOf 와 lastindexOf
//배열안에서 찾은 값 중 가장 먼저 찾은 값을 줄거냐 가장 나중에 찾은 값을 줄거냐임
var a = ['A', 'B', 'C', 'C', 'D'];
console.log(a.indexOf('C')); //2
console.log(a.lastIndexOf('C')); //3
console.log(a.indexOf('C', 3)); //3인덱스부터 검사를 시작할거라는 것

//toString과 toLocaleString
var date = new Date();
console.log(['A', 'B', 'C', date].toLocaleString());
console.log(['A', 'B', 'C', date].toString());
console.log([1, 2, 3, date].toString());
console.log([1, [2, 3], date].toString());
