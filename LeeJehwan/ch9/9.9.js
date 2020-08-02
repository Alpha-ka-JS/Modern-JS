// JSON.stringify(value[, replacer[, space]])
console.log(JSON.stringify({}));
console.log(JSON.stringify(3.14));
console.log(JSON.stringify('abc'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([2, 4, null]));
console.log(JSON.stringify({ x: 1, y: 2 }));

console.log(JSON.stringify({ x: 1, y: 2, z: 3 }, ['x', 'z']));
console.log(JSON.stringify({ x: 1, y: 2 }, null, '\t'));

console.log(JSON.parse('{}'));
console.log(JSON.parse('3.14'));
console.log(JSON.parse('"abc"'));
console.log(JSON.parse('true'));
console.log(JSON.parse('[2, 4, null]'));
console.log(JSON.parse('{"x":1, "y":2}'));
var o = { name: 'TOM', age: 17, marriage: false, data: [2, 5, null] };
var s = JSON.stringify(o);
console.log(s);
var p = JSON.parse(s);
console.log(p);

var obj1 = {
  name: 1,
  arr: [1, 2, 3],
};
var copy = JSON.parse(JSON.stringify(obj1));
console.log(copy);
copy.arr.push(4);
console.log(copy);
console.log(obj1);
