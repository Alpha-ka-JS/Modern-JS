//8.7 이름공간
/* 
8.7.1 전역 이름 공간의 오염 (문제)
전역변수왖 던역함수를 전역 객체에 선언하는 행위를 전역 유효 범위를 오염시킨다고함..
- 라이브러리 파일을 여러개 읽어 사용할때 / 규모가 큰 프로그램을 만들때 / 여러사람이 하나의 프로그램을 작성할때
전역 유효범위 안에서 이름이 같은 변수나 함수를 선언하면 자스 엔진이 그 프로그램의 첫머리로 끌어올려 변수 또는 함수를 하나만 생성하게 한다
다른 목적으로 사용하기 위해 생성한 변수의 이름이 같다면 문제가 생긴다. 

8.7.2 이름공간 활용하기 (해결책 1)
이름 공간(name space) : 변수 이름과 함수 이름을 한 곳에 모아두어 이름 충돌을 방지하고 변수 함수를 쉽게 가져다 쓰게 만든 메커니즘
자바랑 C++등은 기본제공함 자스는 제공하지 않지만 객체를 이름공간으로 활용 가능
*/
var myApp = myApp || {}; //정의되어 있으면 사용하고 아니면 빈 객체를 할당
myApp.name = 'EUNJOUNG';
myApp.showName = function () {
  console.log(this.name);
};
//부분이름공간
myApp.view = {};
myApp.controls = {};
myApp.view.draw = function () {
  console.log('object');
};
myApp.controls.timeInterval = 16;
/*
8.7.3 함수를 이름 공간으로 활용하기 (해결책 2)
함수에서 선언된 변수의 유효범위는 함수 내부이다. 따라서 그 변수를 함수 안에서는 읽거나 쓸 수 있지만 바깥에서는 읽거나 쓸 수 없다
이 성질을 활용하면 함수를 이름공간으로 활용할 수 있음
*/
var x = 'global x';
(function () {
  var x = 'local x';
  var y = 'local y';
})();
console.log(x);
//console.log(y); //error

//모듈패턴
/*
모듈은 함수 여러개를 하나로 묶은 것 모듈은 함수 여러개와 함수가 공유하는 데이터로 구성
모듈을 즉시 실행 함수 안에 작성하면 이름 충돌 상황을 피할 수 있다. 
*/
var Module = Module || {}; //모듈 있으면 쓰고 아님 빈객체
(function (_Module) {
  var name = 'noname'; //프라이빗
  function getName() {
    //프라이빗
    return name;
  }
  _Module.showName = function () {
    //퍼블릭
    console.log(getName());
  };
  _Module.setName = function (x) {
    //퍼블릭
    name = x;
  };
})(Module);
Module.setName('eun');
Module.showName();
