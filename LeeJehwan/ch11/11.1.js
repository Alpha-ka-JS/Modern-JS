function f(x) {
  'use strict';
  //y = x; ReferenceError: y is not defined
}
f(2);

function f() {
  function g() {
    function h() {
      console.trace();
    }
    h();
  }
  g();
}
f();
