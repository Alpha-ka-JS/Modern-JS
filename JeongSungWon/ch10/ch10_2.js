var x = new Array(3);
for (var i = 0; i < 3; i++) {
  x[i] = new Array(3);
}
for (var count = 1, i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    x[i][j] = count++;
  }
}
var x1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function permutation(a) {
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

var N = 3;
for (var i = 1, a = []; i <= N * N; i++) a = a.concat(i);
var m = new Array(N);
for (var i = 0; i < N; i++) m[i] = new Array(N);
permutation(a).forEach(function (p) {
  for (var i = 0, index = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
      m[i][j] = p[index++];
    }
  }
  if (isMagicSquare(m)) {
    m.forEach(function (v) {
      console.log(v);
    });
    console.log('-----');
  }
});
function isMagicSquare(m) {
  var n = m.length;
  var s = (n * (n * n + 1)) / 2;
  var sumDiagonalR = 0;
  var sumDiagonalL = 0;
  for (var i = 0; i < n; i++) {
    var sumRow = 0;
    var sumColumn = 0;
    for (var j = 0; j < n; j++) {
      sumRow += m[i][j];
      sumColumn += m[j][i];
    }
    if (sumRow != s || sumColumn != s) return false;
    sumDiagonalR += m[i][i];
    sumDiagonalL += m[i][n - i - 1];
  }
  if (sumDiagonalR != s || sumDiagonalL != s) return false;
  return true;
}

//10.2.2 다차원 배열의 생성
var x = new Array(3);
for (var i = 0; i < 3; i++) {
  x[i] = new Array(3);
  for (var j = 0; j < 3; j++) {
    x[i][j] = new Array(3);
  }
}
for (var count = 1, i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    x[i][j] = count++;
  }
}
