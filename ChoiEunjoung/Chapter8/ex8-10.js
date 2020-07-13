//함수의 합성
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

var square = function (x) {
  return x * x;
};
var add1 = function (x) {
  return x + 1;
};
var h = compose(square, add1);
console.log(h(2));

function ompose(f, g) {
  return function () {
    return f.call(this, g.apply(this.arguments));
  };
}

//부분적용 -> 인수를 여러개 받는 함수의 몇몇 인수를 상수로 지정해서 새로운 함수를 생성하는 기법
function partial(f) {
  var args = arguments;
  return function () {
    var a = Array.prototype.slice.call(args, 1);
    for (var i = 0, j = 0; i < a.length; i++) {
      if (a[i] == undefined) a[i] = arguments[j++];
    }
    return f.apply(this, a);
  };
}

var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, 0.5);
var cubicroot = partial(Math.pow, undefined, 1 / 3);
var exp = partial(Math.pow, Math.E, undefined);

//커링  -> 인수를 두 개 이상 받는 함수를 분해하여 인수가 하나인 함수의 중첩함수로 변환하는 작업
var pow = function (exponent) {
  return function (base) {
    return Math.pow(base, exponent);
  };
};
//이렇게 하는거는 Math.pow를 커링한거
var square = pow(2);
var sqrt = pow(0.5);
var cubicroot = pow(1 / 3);
var sum = function (a, b) {
  return a + b;
};
var a = [1, 2, 3, 4];
var abs_a = pow(0.5)(a.map(pow(2)).reduce(sum));
console.log(abs_a); //5.477225575051661
