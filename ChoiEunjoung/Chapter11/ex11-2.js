function sleepAndError(g, n) {
  setTimeout(function () {
    for (var i = 0; i < n; i++) console.log(i);
    g.throw(new Error('오류가 발생했습니다'), 1000);
  });
}
function run(callback, ...argsList) {
  var g = (function* (cb, args) {
    try {
      yield cb(g, ...args);
    } catch (e) {
      console.log('예외잡음' + e);
    }
  })(callback, argsList);
  g.next();
}
run(sleepAndError, 10);

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8];
try {
  a.forEach(function (v, i, a) {
    if (i > 5) {
      throw false;
    }
    return (a[i] = v * v);
  });
} catch (e) {
  if (e) throw e;
}
console.log(a);
