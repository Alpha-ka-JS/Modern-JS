//4.5.1
var evens = [2, 4, 6, 8];
var empty = [];
console.log(empty);
var aa = [2, , 4];
console.log(aa);

//4.5.2
var various = [3.14, 'pi', true, { x: 1, y: 2 }, [2, 4, 6]];
evens.length;

var a = ['A', 'B', 'C', 'D'];
a.length = 2;
console.log(a);

//4.5.3
var evens = new Array(2, 4, 6, 8);
var empty = new Array();
var a = new Array(2, 4);
var various = new Array(3.14, 'pi', true, { x: 1, y: 2 }, [2, 4, 6, 7]);

//4.5.6
var c = ['A', 'B', 'C'];
c[3] = 'D';
c.push('E');
delete c[3];
console.log(c);
console.log(c.length);

//4.5.7
var b = ['A', 'B', 'C'];
b[4] = 'E';
console.log(b);
