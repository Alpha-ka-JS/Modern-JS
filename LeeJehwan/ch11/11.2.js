function permutation(a) {
  if (!(a instanceof Array)) {
    throw new Error(a + ' is not an arrya');
  }
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
// permutation('ABC');

var error = new TypeError('배열이 아닙니다.');
console.log(error.message);
console.log(error.name);
console.log(error.toString());

try {
  var p = permutation(a);
  p.forEach(function (v) {
    console.log(v);
  });
} catch (e) {
  console.log(e);
}

try {
  f();
} catch (e) {
  console.log('예외를 캐치함 ->' + e);
}
function f() {
  g();
}
function g() {
  h();
}
function h() {
  throw new Error('오류');
}

// try {
//   setTimeout(() => {
//     throw new Error('오류');
//   }, 1000);
// } catch (e) {
//   console.log('예외를 캐치함 ->' + e);
// }

function sleepAndError(g, n) {
  setTimeout(function () {
    for (var i = 0; i < n; i++) console.log(i);
    g.throw(new Error('오류발생'));
  }, 1000);
}

function run(callback, ...arg) {
  var g = (function* (cb, args) {
    try {
      yield cb(g, ...args);
    } catch (e) {
      console.log('예외를 캐치함 ->' + e);
    }
  })(callback, arg);
  g.next();
}

run(sleepAndError, 10);

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
try {
  a.forEach((v, i, a) => {
    if (i > 5) {
      throw false;
    }
    return (a[i] = v * v);
  });
} catch (e) {
  if (e) throw e;
}
console.log(a);
