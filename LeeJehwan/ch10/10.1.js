var a = ['A', 'B', 'C'];
a.push('D');
console.log(a);

a.push('E', 'F');
console.log(a);
a.pop();
console.log(a);

console.log(a.shift());
console.log(a);

console.log(a.unshift('X'));
console.log(a);

var a = ['A', 'B', 'C', 'D'];
a.splice(1, 2, 'X', 'Y', 'Z');
console.log(a);

var a = ['A', 'B', 'C', 'D'];
a.splice(2);
console.log(a);

var a = ['A', 'B', 'C', 'D'];
a.splice(-1);
console.log(a);

var a = ['A', 'B', 'C', 'D'];
a.splice(1, 0, 'X', 'Y');
console.log(a);

var a = [5, 2, 7, 1, 3, 9, 8];
a.sort(function (a, b) {
  return a - b;
});
console.log(a);

function compaireFunc(key) {
  return function (a, b) {
    return a[key] - b[key];
  };
}

var persons = [
  {
    name: 'Tom',
    age: 17,
  },
  {
    name: 'Huck',
    age: 18,
  },
  {
    name: 'Becky',
    age: 16,
  },
];
persons.sort(compaireFunc('age'));
console.log(persons);

var a = ['A', 'B', 'C'];
console.log(a.join('-'));
console.log(a.join(''));
// no param
console.log(a.join());

console.log(a.concat(['D', 'E']));
console.log(a.concat(['D', 'E'], ['F', 'G']));
console.log(a.concat(1, 'x', true));
console.log(a.concat('D', ['E', ['F', 'G']]));

var a = ['A', 'B', 'C', 'D', 'E'];
console.log(a.slice(1, 3));
console.log(a.slice(3));
console.log(a.slice(1, -1));
console.log(a.slice(-3, -2));

var a = ['A', 'B', 'C', 'C', 'D'];
console.log(a.indexOf('C'));
console.log(a.lastIndexOf('C'));
console.log(a.indexOf('C', 3));

var date = new Date();
console.log(['A', 'B', 'C', date].toString());
console.log(['A', 'B', 'C', date].toLocaleString());
console.log([1, 2, 3, date].toString());
console.log([1, [2, 3], date].toString());

// forEach
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

// forEach arrow function
var a = [1, 2, 3, 4, 5];
var sum = 0;
a.forEach((value) => {
  sum += value;
});
console.log(sum);
a.forEach((v, i, a) => {
  a[i] = v * v;
});
console.log(a);

// map
var a = [1, 2, 3, 4, 5];
var b = a.map(function (x) {
  return 2 * x;
});
console.log(b);
// map arrow
var b = a.map((x) => 2 * x);
console.log(b);

var a = [1, 4, 9, 16, 25];
console.log(a.map(Math.sqrt));

var persons = [
  { name: 'tom', age: 17 },
  { name: 'huck', age: 18 },
  { name: 'becky', age: 16 },
];
var names = persons.map((person) => person.name);
var ages = persons.map((person) => person.age);
console.log(names);
console.log(ages);

console.log(persons.map((x) => x.name).map((x) => x.length));

// reduce
var a = [1, 2, 3, 4, 5];
var ret = a.reduce((prev, val) => prev + val, 0);
console.log(ret);
var ret = a.reduce((prev, val) => prev + val);
console.log(ret);

var ret = a.reduce((prev, val) => prev * val, 1);
console.log(ret);

var ret = a.reduce((p, v) => (p > v ? p : v));
console.log(ret);

var a = ['tom', 'huck', 'becky'];
var ret = a.reduce((p, v) => p + ' ' + v);
console.log(ret);

var ret = a.reduce((p, v) => {
  p[v] = v.length;
  return p;
}, {});
console.log(ret);

function permutation(a) {
  return a.reduce(
    (list, element) => {
      console.log(list);
      var newList = [];
      list.forEach((seq) => {
        for (var i = seq.length; i >= 0; i--) {
          var newSeq = [].concat(seq);
          newSeq.splice(i, 0, element);
          newList.push(newSeq);
        }
      });
      return newList;
    },
    [[]]
  );
}

var a = [1, 2, 3];
console.log(permutation(a));
