// 15.1 이벤트 처리기를 등록하는 방법
/*
15.1.1 이벤트 처리기를 등록하는 방법
이벤트가 발생했을 때 실행되는 함수를 이벤트 처리기 또는 이벤트 리스너라고 한다. 

1. HTML 요소의 이벤트 처리기 속성에 설정하는 방법
<input type="button" onclick="changeColor();">
2. DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정하는 방법
var btn = document.getElementById("button");
btn.onclick= changeColor();
3. addEventListener 메서드 사용하기 
var btn = document.getElementById("button")
btn.addEventListener("click", changeColor, false);

15.1.2 이벤트 처리기의 문제점 
1. Html 요소의 이벤트 처리기 속성에 설정한 경우 
문서를 읽어들일 때 이벤트 처리기도 함께 설정하기 때문에 설정하는 것은 쉽다.
하지만 가독성이 떨어지고 유지보수성이 떨어진다. 
특정 요소의 특정 이벤트에 대해 이벤트처리기를 단 한개만 등록할 수 있어서 나중에 등록된 함수가 덮어쓴다. 
따라서 제대로 동작하지 않을 수 있는 위험이 있음.
2. DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정한 경우
HTML과 자바 스크립트 프로그램을 분리해서 작성할 수 있다. (겸손한 자바스크립트...)
프로그램의 유지보수성을 높일 수 있으나 이것 역시 이벤트 처리기를 단 하나만 등록할 수 있다. 같은 단점 
*/
