const fs = require('fs');
const path = require('path');
var filepath =
  'C:\\Users\\정성원\\Desktop\\git\\Modern-JS\\JeongSungWon\\practice\\sample.txt';

fs.readFile(filepath, 'utf8', function (err, data) {
  var word = data.replace(/[,.;:]/gi, '');
  var word1 = word.split(' ');

  var map = new Map();
  for (var a of word1) {
    if (map.has(a)) {
      var num = map.get(a);
      map.delete(a);
      map.set(a, num + 1);
    } else {
      map.set(a, 1);
    }
  }
  for (var [key, value] of map) console.log(key + '의 갯수는 ' + value);

  //Q1
  console.log('existence의 갯수는 ' + map.get('existence'));
  //Q2
  console.log('and의 갯수는 ' + map.get('and'));
  //Q3
  console.log('a의 갯수는 ' + map.get('a'));
  //Q4
  console.log('two의 갯수는 ' + map.get('two'));
  //Q5
  var max_value = map.reduce(function (a, b) {
    return a > b ? a : b;
  });
  console.log(max_value);
});
