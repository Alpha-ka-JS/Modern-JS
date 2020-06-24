//객체의 기초, 객체 리터럴 공부하기
//객체는 데이터 여러개를 하나로 모은 복합데이터로 연관 배열 또는 사전이라고도 함.
//객체에 포함된 데이터 하나를 가리켜 객체의 프로퍼티라고 함

var card = { suit: "heart", rank: "A" }; // 객체리터럴을 var 변수에 넣은것
console.log(card.rank); //A
var card = { suit: "heart", rank: "A" };
console.log(card.suit); //heart
console.log(card["rank"]); //A
console.log(card.color); //undefined
var obj = {};
console.log(obj); //{}

card.value = 14; //객체 프로퍼티에 새로운 값을 추가하는 방법
console.log(card);
delete card.rank; //객체 프로퍼티를 삭제하는 방법
console.log(card);

// in연산자로 프로퍼티가 있는지 확인하기
// (프로퍼티 이름) in 객체명

console.log("value" in card); //true
console.log("rank" in card); //false
// -> 주의해야할 것은 in이 조사하는 대상이 그 객체가 가진 프로퍼티 + 상속받은 모든 프로퍼티라는 것
console.log("toString" in card); //true -> (Object)를 상속받았기때문

//이런식으로 객체 생성 가능
var p ={x:1.0,y:2.5};
var circle={center ={x:1.0,y:2.5}, radius:2.5};
var person ={name:"EUNJOUNG", age:26, sex:"female", married:false};

//프로퍼티에 저장된 값의 타입이 함수면 그 프로퍼티를 메서드라고 함. 