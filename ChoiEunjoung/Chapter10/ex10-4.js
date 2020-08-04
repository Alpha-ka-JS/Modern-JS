//10.2 다차원 배열
//10.2.1 2차원 배열의 생성
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

function permutation(a) {
  return a.reduce(
    function (list, element) {
      var newlist = []; //새로운 순열 저장
      list.forEach(function (seq) {
        //끝에서 두번재 요소부터 앞에서 두번째 요소에 이르기까지...?
        //element를 삽입하고 newlist에 각각추가
        for (var i = seq.length; i >= 0; i--) {
          var newseq = [].concat(seq); //seq복사본 저장
          newseq.splice(i, 0, element); //newseq i번째 요소 앞에 element삽입
          newlist.push(newseq); //newseq를 newlist 끝에 추가
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
    console.log('-----------------');
  }
});
function isMagicSquare(m) {
  var n = m.length;
  var s = (n * (n * n + 1)) / 2;
  var sumDiagonalR = 0;
  var sumDiagonalL = 0;
  for (var i = 0; i < n; i++) {
    var sumRow = 0;
    var sumColum = 0;
    for (var j = 0; j < n; j++) {
      sumRow += m[i][j];
      sumColum += m[j][i];
    }
    if (sumRow != s || sumColum != s) return false;
    sumDiagonalR += m[i][i];
    sumDiagonalL += m[i][n - i - 1];
  }
  if (sumDiagonalL != s || sumDiagonalR != s) return false;
  return true;
}

//10.2.2 다차원 배열의 생성
//이렇게 3차원 배열도 생성할 수 있다.
var x = new Array(3);
for (var i = 0; i < 3; i++) {
  x[i] = new Array(3);
  for (var j = 0; j < 3; j++) {
    x[i][j] = new Array(3);
  }
}
for (var count = 1, i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    for (var k = 0; k < 3; k++) {
      x[i][j][k] = count++;
    }
  }
}
console.log(x);
