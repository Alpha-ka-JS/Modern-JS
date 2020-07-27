var person = {
  _name: 'Tom',
  get name() {
    return this._name;
  },
  set name(value) {
    var str = value.charAt(0).toUpperCase() + value.substring(1);
    this._name = str;
  },
};

console.log(person.name);
person.name = 'huck';
console.log(person.name);
person._name = 'a';
console.log(person._name);
console.log(person.name);
delete person.name;
console.log(person.name);

var point = {
  x: 1.0,
  y: 1.0,
  get r() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  get theta() {
    return Math.atan2(this.y, this.x);
  },
  set polarCoordinates(pc) {
    this.x = pc.r * Math.cos(pc.theta);
    this.y = pc.r * Math.sin(pc.theta);
  },
};
console.log(point.r);
console.log(point.theta);
point.polarCoordinates = { r: 2, theta: Math.PI / 4 };
console.log(point);

var person = (function () {
  var _name = 'tom';
  return {
    get name() {
      return _name;
    },
    set name(value) {
      var str = value.charAt(0).toUpperCase() + value.substring(1);
      _name = str;
    },
  };
})();
console.log(person.name);
person.name = 'huck';
console.log(person.name);
person._name = 'a';
console.log(person._name);
console.log(person.name);
