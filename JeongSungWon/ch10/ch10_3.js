var a = {};
for (var i = 0; i < 10; i++) {
  a[i] = i;
}
a.length = 10;
for (var i = 0, sum = 0; i < a.length; i++) sum += a[i];
console.log(sum);

var a = { 0: 'A', 1: 'B', 2: 'C', length: 3 };
console.log(Array.prototype.join.call(a, ','));
console.log(Array.prototype.push.call(a, 'D'));
console.log(Array.prototype.slice.call(a, 0));
var a = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log(
  Array.prototype.map.call(a, function (v) {
    return v * v;
  })
);
var a = { 0: 'A', 1: 'B', 2: 'C', length: 3 };
console.log(Array.prototype.concat.call(a, ['D', 'E']));
