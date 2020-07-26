//논리 연산자와 관계 연산자
//1. 좌우 피연산자의 타입이 같을 때, 같으면 true, 아니라면 false
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = a;
console.log(a == b); // false
//a,b에는 모두 배열의 참조가 저장되어있는데 각 배열에 같은 데이터가 담겨있지만 메모리에서 차지하는 위치가 다름.
console.log(c == a); // true

//2. 좌우 피연산자 타입이 다를 때
/*
-undefined,null은 같은것으로 본다. 
-한쪽이 숫자고 다른 한 쪽이 문자열이면 문자열을 숫자로 변환해 비교한다.
-둘 중에 한 쪽이 논리값이면 true는 1, false는 0으로 변환해서 비교한다. 
-한쪽이 객체고 다르한쪽이 숫자 또는 문자면 객체를 toString이나 ValueOf 메서드를 사용해서 원시타입으로 변환해 비교한다.
-위 규칙에 벗어난다면 모두 같지 않음
*/
console.log('동일 연산자 test');
console.log(null == undefined);
console.log(1 == '1');
console.log('0xff' == 255);
console.log(true == 1);
console.log(true == '1');
console.log(new String('a') == 'a');
console.log(new Number('1') == 1);
console.log([2] == 2);

//일치 연산자 - 피연산자를 평가한 후에 타입을 변환하지 않은 상태의 두 값을 엄격하게 비교함.
//타입과 값이 모두 같으면 같다 아니라면 같지 않다. NaN 만큼은 NaN을 포함한 모든 값과 같지 않다고 판단함.
console.log('일치 연산자 test');
console.log(NaN === NaN);
console.log(null === undefined);
console.log(1 === '1');
console.log('0xff' === 255);
console.log(true === 1);
console.log(true === '1');
console.log(new String('a') === 'a');
console.log(new Number('1') === 1);
console.log([2] === 2);

//논리연산자 - &&,||,!
var x = 1;
var y = -1;
console.log(x > 0 && y > 0); //둘다 참이어야 true
console.log(x > 0 || y > 0); //하나만 참이어도 true
//!가 &&보다 우선순위가 높으므로 원하는 값을 얻기위해 적절하게 소괄호를 이용해야함.

// 피연산자 평가 - 피연산자가 논리값이 아니라면 필요에 따라 타입을 변환함.
// 0,-0,""(빈문자열), NaN,null,undefined -> false
// 0을 제외한 숫자, 빈 문자열 제외한 문자열, 모든객체, 심벌 ->true

// 논리곱(&&)과 논리합(||)은 단락평가를 하는데, 첫 번째 피연산자 값이 표현식을 결정하면 두번째 피 연산자를 평가하지않음.
// 그리고 논리값대신에 마지막으로 평가한 피연산자 값을 반환함.

var p = null;
//p && p.name
p = { name: 'Tom', age: 18 };
console.log(p && p.name); // Tom 반환

// || 여러개의 값 후보중에 null또는 undefined가 아닌 값을 선택하고자 할때 유용하게 사용된다.
//var time = time_interval || animationSettings.time || 33;
//이 경우에는 time_interval이 있으면 쓰고 아니면 2번째 animationSetting.time을 쓰고 아니라면 33을 쓴다.
var z = z || 100; //z undefined
console.log(z); //100
z = 3;
console.log(z); //3
