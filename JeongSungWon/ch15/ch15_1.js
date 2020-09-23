//15.1 이벤트 처리기를 등록하는 방법

//15.1.1 이벤트 처리기를 등록하는 방법
// HTML 요소의 이벤트 처리기 속성에 설정
//<input type="button" onclick="changeColor()">
// DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정
var btn = document.getElementById('button');
btn.onclick = changeColor();
// addEventListener 메서드 사용
var bnt = document.getElementById('button');
btn.addEventListener('click', changeColor, false);

//15.1.2 이벤트 처리기의 문제점
/*
HTML 요소에 이벤트 처리기 속성 설정
 - HTML 문서를 읽어 들일 때 이벤트 처리기도 설정하여 쉬움
 - HTML, 자바스크립트 섞여 있어 가독성이 떨어짐
 - 특정요소의 특정 이벤트에 대해 하나의 이벤트 처리기만 등록 가능
DOM 요소 객체의 이벤트 처리기 설정
 - HTML과 자바스크립트 분리 작성
 - 특정요소의 특정 이벤트에 대해 하나의 이벤트 처리기만 등록 가능
 */
