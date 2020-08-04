//10.1 배열의 메서드
//10.1.2 수정 메서드
//push
var a = ['A', 'B', 'C'];
a.push('D');
console.log(a); //[ 'A', 'B', 'C', 'D' ]
a.push('E', 'F');
console.log(a); //[ 'A', 'B', 'C', 'D', 'E', 'F' ]
//pop
a.pop();
console.log(a); //[ 'A', 'B', 'C', 'D', 'E' ]
//shift
a.shift();
console.log(a); //[ 'B', 'C', 'D', 'E' ]
//unshift
a.unshift('X');
console.log(a); //[ 'X', 'B', 'C', 'D', 'E' ]
a.unshift('Y', 'Z');
console.log(a);
//splice
var a = ['A', 'B', 'C', 'D'];
a.splice(1, 2, 'X', 'Y', 'Z'); //어디서 시작해서 몇개를 지우고 뭘로 대체할것인지
//반환은 삭제된 부분 여기서는 B,C
console.log(a);
var a = ['A', 'B', 'C', 'D'];
a.splice(2); //2번부터 싹지움
var a = ['A', 'B', 'C', 'D'];
a.splice(-1); //뒤에서부터 지움
console.log(a);
var a = ['A', 'B', 'C', 'D'];
a.splice(1, 0, 'X', 'Y', 'Z'); // [ 'A', 'X', 'Y','Z', 'B', 'C', 'D' ]
console.log(a);

//sort 메서드
var a = [4, 6, 7, 1, 3, 2, 5, 9];
a.sort(function (a, b) {
  return a - b;
}); //오름차순
console.log(a);

function compaireFunc(key) {
  return function (a, b) {
    return a[key] - b[key];
  };
}
var persons = [
  { name: 'dlwlrma', age: 28 },
  { name: 'eunjoung', age: 26 },
  { name: 'dumdidumdi', age: 25 },
];
persons.sort(compaireFunc('age'));
console.log(persons);
