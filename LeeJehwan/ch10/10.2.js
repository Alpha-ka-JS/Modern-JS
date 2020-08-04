var x = new Array(3);
for (var i = 0; i < 3; i++) {
  x[i] = new Array(3);
}

for (var count = 1, i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    x[i][j] = count++;
  }
}
console.log(x);

var N = 3;
for (var i = 1, a = []; i <= N * N; i++) a = a.concat(i);
var m = new Array(N);
for (var i = 0; i < N; i++) m[i] = new Array(N);

permutation(a).forEach((p) => {
  for (var i = 0, index = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
      m[i][j] = p[index++];
    }
  }
  if (isMagicSquare(m)) {
    m.forEach((v) => console.log(v));
    console.log('-----------');
  }
});

function permutation(a) {
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

console.log(x);
