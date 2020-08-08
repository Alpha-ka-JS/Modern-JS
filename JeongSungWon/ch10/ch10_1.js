//10.1.2 수정 메서드
var a = ['A', 'B', 'C'];
a.push('D');
a.push('E', 'F');
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift('X');
console.log(a);

a.splice(0, 0, 'Z', 'Y');
console.log(a);
a.splice(1, 2, 'H', 'I');
console.log(a);

var b = [5, 3, 7, 1, 3, 9, 8];
b.sort(function (a, b) {
  return a - b;
});
console.log(b);
function compaireFunc(key) {
  return function (a, b) {
    return a[key] - b[key];
  };
}
var persons = [
  { name: 'A', age: 17 },
  { name: 'C', age: 18 },
  { name: 'B', age: 16 },
];
persons.sort(compaireFunc('age'));
console.log(persons);
persons.sort(compaireFunc('name'));
console.log(persons);

//10.1.3 접근자 메서드
var a = ['A', 'B', 'C'];
console.log(a.join('-'));
console.log(a.join(''));

//concat을 새로운 배열을 생성하는 것(기존 배열 변화 없음)
console.log(a.concat(['D', 'E']));
console.log(a.concat(['F', 'G'], ['H']));
console.log(a.concat(1, true));

var a = ['A', 'B', 'C', 'D', 'E'];
console.log(a);
console.log(a.slice(1, 3));
console.log(a);
console.log(a.slice(3));
console.log(a.slice(1, -1));
console.log(a.slice(-4, -2));

var a = ['A', 'B', 'C', 'C', 'D'];
console.log(a.indexOf('C'));
console.log(a.lastIndexOf('C'));
console.log(a.indexOf('C', 3));

['A', 'B', 'C', date].toString();
[1, 2, 3, date].toString();
[1, [2, 3], date].toString();

var date = new Date();
console.log(['A', 'B', 'C', date].toString());
console.log(['A', 'B', 'C', date].toLocaleString());

//10.1.4 반복 메서드
//for-each 기본함수에 영향을 끼침
var a = [1, 2, 3, 4, 5];
var sum = 0;

a.forEach(function (value) {
  sum += value;
});
console.log(sum);
a.forEach(function (v, i, a) {
  a[i] = v * v;
});
console.log(a);

//map 메서드
//결과로 나온 객체와 이전 객체는 다른 객체

var a = [1, 2, 3, 4, 5];
var b = a.map(function (x) {
  return 2 * x;
});
console.log(b);

var a = [1, 4, 9, 16, 25];
var b = a.map(Math.sqrt);
var persons = [
  { name: 'Tom', age: 17 },
  { name: 'Huck', age: 18 },
  { name: 'Becky', age: 16 },
];
var names = persons.map((person) => person.name);
var ages = persons.map((person) => person.age);
console.log(names);
console.log(ages);
console.log(persons.map((persons) => persons.name).map((name) => name.length));

//reduce 메서드
var a = [1, 2, 3, 4, 5];
console.log(
  a.reduce(function (prev, value) {
    return prev + value;
  }, 0) //prev의 초기값이 0
);
console.log(
  a.reduce(function (prev, value) {
    return prev + value;
  })
);

console.log(
  a.reduce(function (p, v) {
    return p * v;
  }, 1)
);
console.log(
  a.reduce(function (p, v) {
    return p > v ? p : v;
  })
);

var a = ['Tom', 'Huck', 'Becky'];
console.log(
  a.reduce(function (p, v) {
    return p + ' ' + v;
  })
);

console.log(
  a.reduce(function (p, v) {
    p[v] = v.length;
    return p;
  }, {})
);

function permutation(a) {
  return a.reduce(
    function (list, element) {
      var newlist = [];
      list.forEach(function (seq) {
        for (var i = seq.length; i >= 0; i--) {
          var newseq = [].concat(seq);
          newseq.splice(i, 0, element);
          newlist.push(newseq);
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
