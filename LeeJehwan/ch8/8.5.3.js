var tom = {
  name: "Tom",
  sayHello: function () {
    console.log("hello! " + this.name);
  },
};
tom.sayHello();

var huck = { name: "huck" };
huck.sayHello = tom.sayHello;
huck.sayHello();
console.log(huck);

var hwan = { name: "hwan" };
tom.sayHello.apply(hwan);
tom.sayHello.call(hwan);

function f() {
  console.log(this);
}
f();

var a = {
  f: function () {
    console.log(this);
  },
};
a.f();
