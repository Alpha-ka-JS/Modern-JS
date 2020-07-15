var evens = [2, 4, 6, 8];

var empty = [];
console.log(empty);

var a = [2, , 4];
console.log(a);
console.log(a[1]);

var various = [3.14, 'pi', true, { x: 1, y: 2 }, [2, 4, 6, 8]];
console.log(various);

var evens = [2, 4, 6, 8];
console.log(evens.length);
evens.length = 2;
console.log(evens);
evens.length = 4;
console.log(evens);

var evens = new Array(2, 4, 6, 8);
var empty = new Array();
var a = new Array(2, 4);
var various = new Array(3.14, 'pi', true, { x: 1, y: 2 }, [2, 4, 6, 8]);
var x = new Array(3);

console.log(evens);
console.log(empty);
console.log(a);
console.log(various);
console.log(x);

console.log(various['2']);

var a = ['A', 'B', 'C'];
a[3] = 'D';
console.log(a);

var a = ['A', 'B', 'C'];
a.push('D');
console.log(a);

delete a[1];
console.log(a);

var a = ['A', 'B', 'C'];
a[4] = 'E';
console.log(a);

console.log(a.hasOwnProperty('3'));
console.log(a.hasOwnProperty('4'));
