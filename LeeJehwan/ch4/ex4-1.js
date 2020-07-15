var card = { suit: '하트', rank: 'A' };
console.log(card);

var card2 = { suit: '하트', rank: 'A', '': 'blank' };
console.log(card2);

console.log(card.suit);
console.log(card['rank']);
console.log(card.color);

var obj = {};
console.log(obj);

card.value = 14;
console.log(card);

delete card.rank;
console.log(card);

var card = { suit: '하트', rank: 'A' };
console.log('suit' in card);
console.log('color' in card);
console.log('toString' in card);
console.log(card.toString());

var p = { x: 1.0, y: 2.5 };
var circle = {
  center: { x: 1.0, y: 2.0 },
  radius: 2.5,
};

console.log(circle);
console.log(circle.center.x);

var circle = {
  center: p,
  radius: 2.5,
};
console.log(circle);
console.log(circle.center.x);

var person = {
  name: '이정규',
  age: 18,
  sex: 'ska',
  married: false,
};

// reference
var a = card;
console.log(a.suit);
a.suit = '스페이드';
console.log(a.suit);
console.log(card.suit);
console.log(a === card);
console.log();

// further study shallow copcy vs deep copy
// shallow copy example using Spread
var card = {
  suit: '하트',
  rank: 'A',
  center: { x: 1.0, y: 2.0 },
  arr: [1, 2, 3],
};
var a = { ...card };
console.log('before a', a);
a.suit = '스페이드';
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log();

var a = { ...card };
console.log('before a', a);
a.center.x = 2;
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log(a.center === card.center);
console.log();

var a = { ...card };
console.log('before a', a);
a.arr[0] = 2;
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log(a.arr === card.arr);
console.log();

// shallow copy example using Object.assign()
var card = {
  suit: '하트',
  rank: 'A',
  center: { x: 1.0, y: 2.0 },
  arr: [1, 2, 3],
};
var a = Object.assign({}, card);
console.log('before a', a);
a.suit = '스페이드';
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log();

var a = Object.assign({}, card);
console.log('before a', a);
a.center.x = 2;
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log();

var a = Object.assign({}, card);
console.log('before a', a);
a.arr[0] = 2;
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log();

// deep copy using recursive
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  var copy = {};
  for (var key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

var card = {
  suit: '하트',
  rank: 'A',
  center: { x: 1.0, y: 2.0 },
  arr: [1, 2, 3],
};
var a = deepCopy(card);
console.log('before a', a);
a.suit = '스페이드';
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log();

var a = deepCopy(card);
console.log('before a', a);
a.center.x = 2;
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log(a.center === card.center);
console.log();

var a = deepCopy(card);
console.log('before a', a);
a.arr[0] = 2;
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log(a.arr === card.arr);
console.log();

// deep copy using JSON
// 시간이 오래걸리고 function 처리 불가
var card = {
  suit: '하트',
  rank: 'A',
  center: { x: 1.0, y: 2.0 },
  arr: [1, 2, 3],
};
var a = JSON.parse(JSON.stringify(card));
console.log('before a', a);
a.suit = '스페이드';
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log();

var a = JSON.parse(JSON.stringify(card));
console.log('before a', a);
a.center.x = 2;
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log(a.center === card.center);
console.log();

var a = JSON.parse(JSON.stringify(card));
console.log('before a', a);
a.arr[0] = 2;
console.log('after a', a);
console.log('after card', card);
console.log(a === card);
console.log(a.arr === card.arr);
console.log();
