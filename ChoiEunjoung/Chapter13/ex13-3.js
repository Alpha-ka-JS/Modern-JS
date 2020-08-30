//13.3 History 객체
/*
//창의 웹 페이지 열람 이력을 관리한다 

1 웹 페이지 열람 이력을 진행하거나 되돌아갈때는 back과  forward 메서드를 사용한다 
history.back();
history.forward();

2. 건너뛸 횟수를 지정해서 웹 ㅔ이지 이력을 진행하거나 되돌아갈때는 go 메서드를 사용한다. 
history.go(-3);
history.go(2); //3개전이고 2개전으로 돌아가는데 굳이 음수 양수로 표현하는 이유는?

3.페이지를 전환하지 않고 웹 페이지 열람 이력만 추가하고자 할 때는 pushState 메서드를 사용한다 
history.pushState(null,null,"page2.html");
state : 새롭게 추가되는 웹 페이지 열람 이력과 연결할 객체 
title : 새로운 웹 페이지 이력을 가리키는 문자열
uirl : 새 열람 이력의 url 
->주로 Ajax 방식으로 웹 페이지를 그릴 때 사용한다. 
변경만 하면 뒤로가기가 안되는데 변경할때마다 state를 추가해주면 변경해도 뒤로가기 가능 
*/
