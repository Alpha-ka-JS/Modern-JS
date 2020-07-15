var name = undefined;
if (!name) {
  name = '';
  console.log('이름을 입력하십시오');
}
var x = 10;
if (x >= 0) {
  console.log('positive or zero');
} else {
  console.log('Negative');
}

function isLeapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }
  return false;
}

console.log(isLeapYear(100));
console.log(isLeapYear(2020));
