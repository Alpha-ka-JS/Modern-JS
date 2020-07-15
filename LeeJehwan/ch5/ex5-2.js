console.log(7 / 2);
console.log(15 % 4);
console.log(5 % 1.5);
console.log(1 + '2month');
console.log(0 / 0);
console.log('one * 1');
console.log(true + true);
console.log(1 + null);
console.log(1 + undefined);
console.log();

function polarToDescartes(r, theta) {
  var angle = (Math.PI * theta) / 180;
  return { x: r * Math.cos(angle), y: r * Math.sin(angle) };
}
var point = polarToDescartes(3, 60);
console.log(point);

console.log(Math.sqrt(100001) - Math.sqrt(100000));
console.log(1 / (Math.sqrt(100001) + Math.sqrt(100000)));

console.log(0.16 / 0.2 == 0.8);
console.log(Math.abs(0.16 / 0.2 - 0.8) < 1e-10);
