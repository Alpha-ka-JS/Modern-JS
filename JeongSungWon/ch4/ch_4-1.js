/*
프로퍼티 : 데이터 하나(이름과 값의 쌍)
ex) grade   a 
grade -> 프로퍼티 이름 or 키
a     -> 값
*/

var card = { suit: "하트", rank:"A"};
card.suit;
card["rank"];
var obj = {};
console.log(obj);

card.value = 14;
console.log(card);

// 자바나 c++에서는 프로퍼티를 실행 중 추가 or 삭제 X
delete card.rank;
console.log(card);

// in이 조사하는 대상은 객체가 상속받은 프로퍼티까지 가능
console.log("suit" in card);
console.log("color" in card);
console.log("toString" in card); // 객체로 상속받아 True

var p = { x : 1.0, y : 2.0};
var circle = {
    center: { x: 1.0, y: 2.0},
    radius : 2.5
}
console.log(circle.center.x);
var person = {
    name : "이정규",
    age : 18,
    sex : "남",
    married : false
}

var a = card;
a.suit = "스페이드";
console.log(a.suit);
console.log(card.suit);