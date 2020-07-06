console.log(square(2));
function square(x) {
  return x * x;
}

var sq1 = function (x) {
  return x * x;
};
console.log(sq1(2));

var sq2 = new Function("x", "return x*x");
console.log(sq2(2));

var sq3 = (x) => x * x;
console.log(sq3(2));

function norm(x) {
  var sum2 = sumSquare();
  return Math.sqrt(sum2);
  function sumSquare() {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
      sum += x[i] * x[i];
    }
    return sum;
  }
}
var a = [2, 1, 3, 5, 7];
var n = norm(a);
console.log(n);
