var myApp = myApp || {};
myApp.name = 'Tom';
myApp.showName = function () {
  console.log(this.name);
};
myApp.view = {};
myApp.controls = {};
myApp.controls.timeInterval = 16;

myApp.view.draw = function () {
  console.log('draw');
  // console.log(this.name);
  // console.log(this.controls.timeInterval)
};

console.log(myApp);
myApp.showName();
myApp.view.draw();

var x = 'global x';
(function () {
  var x = 'local x';
  var y = 'local y';
  console.log(x);
  console.log(y);
})();
console.log(x);
// console.log(y); // y is not defined

var Module = Module || {};
(function (_Module) {
  var name = 'NoName';
  function getName() {
    return name;
  }
  _Module.showName = function () {
    console.log(getName());
  };
  _Module.setName = function (x) {
    name = x;
  };
})(Module);
Module.showName();
Module.setName('Tom');
Module.showName();
