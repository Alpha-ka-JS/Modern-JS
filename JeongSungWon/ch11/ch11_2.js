//11.2.2 throw 문
function permutation(a) {
  if (!(a instanceof Array)) {
    throw new Error(a + ' is not an array');
  }
  return a.reduce(
    function (list, element) {
      var newlist = [];
      list.forEach(function (seq) {
        for (var i = seq.length; i >= 0; i--) {
          var newseq = [].concat(seq);
          newseq.splice(i, 0, element);
          newlist.push(newseq);
        }
      });
      return newlist;
    },
    [[]]
  );
}
var a = [1, 2, 3];
permutation(a).forEach(function (v) {
  console.log(v);
});
//permutation('ABC');

//11.2.3 Error 객체
// x++;
// if (a > 0) {
//   a++;
//   var obj = {};
//   obj.join();
//   var pi = 3.141591;
//   pi.toFixed(100);
//   decodeURIComponent('%');
// }
var error = new TypeError('배열이 아닙니다');
console.log(error.message);
console.log(error.name);
console.log(error.toString());

//11.2.4 try/catch/finally 문
try {
  var p = permutation(a);
  p.forEach(function (v) {
    console.log(v);
  });
} catch (e) {
  alert(e);
}

try {
  // 오류 발생
} catch (e) {
  if (e instanceof TypeError) {
    //TypeError시 처리
  } else if (e instanceof ReferenceError) {
    //ReferenceError 발생시 처리
  } else {
    //그 외 처리
  }
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
  throw new Error('오류가 발생했습니다');
}

// try {
//   setTimeout(function throwError() {
//     throw new Error('오류가 발생했습니다');
//   }, 1000);
// } catch (e) {
//   console.log('예외를 캐치함 -> ' + e);
// }

function sleepAndError(g, n) {
  setTimeout(function () {
    for (var i = 0; i < n; i++) console.log(i);
    g.throw(new Error('오류가 발생했습니다'));
  }, 1000);
}
function run(callback, ...argsList) {
  var g = (function* (cb, args) {
    try {
      yield cb(g, ...args);
    } catch (e) {
      console.log('예외를 잡음 -> ' + e);
    }
  })(callback, argsList);
  g.next();
}
run(sleepAndError, 10);

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
