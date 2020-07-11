//8.7.2 객체를 이름 공간으로 활용
var myApp = myApp || {};
/*
myApp이 정의되어 있으면 사용 아니면 빈 객체 할당
*/
myApp.name = "Tom"
myApp.showName = function(){};

//부분이름 공간
myApp.view = {};
myApp.controls = {};
myApp.view.draw = function(){};
myApp.controls.timeInterval = 16;

//8.7.3 함수를 이름 공간으로 활용하기
var x = "global x";
(function(){
    var x = "local x";
    var y = "local y";
})();
console.log(x);
//console.log(y); //ReferenceError: y is not defined

var Module = Module || {};
(function(_Module){
    var name = "NoName";
    function getName(){
        return name;
    }
    _Module.showName = function(){
        console.log(getName());
    }
    _Module.setName = function(x){
        name = x;
    }
})(Module);
Module.setName("Tom");
Module.showName();

