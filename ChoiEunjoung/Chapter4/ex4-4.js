//생성자로 객체 생성하기
//생성자를 사용하면 이름이 같은 메서드와 프로퍼티를 가진 객체 여러개를 효율적으로 생성 가능

var card = new Card("heart", "A");
console.log(card); //Card { suit: 'heart', rank: 'A' }

//생성자
var card = {};
card.suit = "heart";
card.rank = "A";
console.log(card); //{ suit: 'heart', rank: 'A' }

var card1 = new Card("하트", "A");
var card2 = new Card("클럽", "K");
var card3 = new Card("스페이드", "2");
//이렇게 하면 이름은 같은데 프로퍼티값이 다르 객체 여러개를 효율적으로 생성 가능하다는 것.

function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}
// 이런식으로 아래에 있어도 끌어올림이 가능.

//예시
function Particle(x, y, vx, vy) {
  this.x = x; //좌표 x,y
  this.y = y;
  this.vx = vx; //속도벡터 vx,vy
  this.vy = vy;
  this.velocity = Math.sqrt(vx * vx + vy * vy);
}

//메서드를 가진 객체를 생성하는 생성자
// 이 경우에는 this.프로퍼티 이름에 함수의 참조를 대입하면 메서드 정의 가능
function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}

var p = { x: 0, y: 0 };
var c = new Circle(p, 2.0);
console.log("넓이 : " + c.area()); //넓이 : 12.566370614359172

//내장객체 이해하기 - 내장 생성자
//자바스크립트에 처음부터 포함된 내장 생성자
//각 다른 챕터에서 설명해줌

// Date 생성자
var now = new Date();
console.log(now); //2020-06-28T17:21:24.965Z
console.log(now.toDateString()); //Mon Jun 29 2020
var then = new Date(2020, 5, 28); // 5+1 = 6 , 28-1
console.log(then); //2020-06-27T15:00:00.000Z
console.log(then.toString()); //Sun Jun 28 2020 00:00:00 GMT+0900 (GMT+09:00)
var x = now - then;
console.log(x); // 95047014
//var day = moment().format("YYYY-MM-DD");
//console.log(day);

var start = new Date();
var end = new Date();
var t = end - start;
console.log(t);

console.log(now.getFullYear());
console.log(now.getMonth()); //5 -> 6월!
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours()); // minutes, seconds,milliseconds 같은것도 가능, 뒤에 s
console.log(now.toLocaleString()); //2020-6-29 2:32:33 ├F10: AM┤
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString()); //2:32:33 ├F10: AM┤
console.log(now.getUTCDate()); //28
console.log(now.toUTCString()); //Sun, 28 Jun 2020 17:32:33 GMT

//Function
//함수를 생성하는 내장객체
var square = new Function("x", "return x*x");
//첫번째 인자는 x는 인수의 이름을 뜻하고
//두번째는 함수 몸통이 작성된 부분. n개일 경우에는 쭉쓰고 마지막에 몸통을 써주면 된다.
/*Function 생성자로 생성한 함수는 전역변수 + 자신의 지역변수만 사용가능
 함수를 동적으로 생성하는 특별한 상황외에는 사용X
 악의를 품은.. 사용자가.. 입력한 문자열을 Function 생성자의 인수인 함수 몸통으로 전달하면
 악성코드가 실행되어 보안문제가 발생할수도 있음.
 
 이 Function생성자는 함수를 생성하는 것보다 함수 리터럴에 래퍼 객체를 제공한다는 점에서 의미가있음
 */
//기타 내장객체 - 전역객체, JSON, Math,Reflect
//전역객체 - 전역프로퍼티 (undefined, NaN, Infinity),생성자,전역함수, 내장객체
//클라이언트 측 자스에서는 Window가 전역객체다.
//console.log(window); -> Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}

/*
1. 네이티브객체 - ECMAScript 사양에 정의된 객체가 네이티브 객체  즉, 내장생성자
2. 호스트객체 - ECMAScript에는 없는데 실행환경에 정의된 객체
예를들면 브라우저 객체(Window, Navigator,,,등), DOM에 정의된 객체,
Ajax를 위한 XMLHttpReuqest같은거.. 각종 API등이 클라이언트 측 자바스크립트에 정의된 호스트객체
3. 사용자가 정의한 객체 
*/
