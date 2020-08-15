// var str =
//   'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctu ary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescriba ble forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image';

// var arr = str.split(/[\s,.;]+/);
// console.log(arr);

// var dict = new Map();
// for (var i = 0; i < arr.length; i++) {
//   dict.set(arr[i], 0);
// }

// console.log(dict);

// arr.reduce(function (k, v) {
//   return dict[v]++;
// }, 0);
// console.log(dict);

// function makedic(arr, dict) {
//   for (var i = 0; i < arr.length; i++) {
//     dict.set(arr[i], 0);
//   }
//   return dict;
// }

var fs = require('fs');
fs.exists('simple.txt', function (exists) {
  console.log(exists ? "it's there" : 'no exists!');
});

fs.readFile('simple.txt', 'utf8', function (err, data) {
  // console.log(data);
  var arr = data.split(/[\s,.;:]+/);
  // console.log(arr);
  var dict = new Map();
  arr2 = [...new Set(arr)];
  for (var i = 0; i < arr.length; i++) {
    dict.set(arr[i], 0);
  }
  // console.log(dict);
  arr.reduce(function (data, v) {
    // console.log(v);
    dict.set(v, dict.get(v) + 1);
  }, 0);
  // console.log(dict);
  // for ((k, v) of dict) {
  //   console.log(word + '(은)/는 ' + time + '번 등장함');
  // }
  arr2.forEach(function (v) {
    console.log(v + '의 개수는 ' + dict.get(v) + '개');
  });
});

// let groupByAge = arr.reduce(
//   (dict, v) => ({ ...dict, [v]: (dict[v] || 0) + 1 }),
//   {}
// );
