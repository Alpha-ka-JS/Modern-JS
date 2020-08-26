var reg = new RegExp('abc');
console.log(reg);
var reg = /abc/;
console.log(reg);

var reg = /cat/;
console.log(reg.test('cats and dogs'));
console.log(reg.test('Cat'));

var reg = /Script/;
var result = reg.exec('JavaScript');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

console.log(reg.exec('script'));
