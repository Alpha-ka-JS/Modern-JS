// 13.1.2 자바스크립트 코드를 삽입하는 방법
/*
1. script 요소의 내용물로 작성 
<script>
  console.log('hello!');
</script>

2. 외부 파일 읽어 들이기
<script src="../script/sample.js"></script>

3. 이벤트 처리기 속성에 작성하기
<input type="button" value="click" onclick="console.log('hello');">

4. JavaScript: URL
<a herf="javascript:console.log('i\'m pretty good!');">
  what's going on?
</a>
*/

//13.1.3
/*
async - script 요소의 코드가 비동기적으로 실행
        다 읽어 들인 코드부터 비동기적으로 실행하므로 실행 순서 보장 X
defer - DOM 트리 구축이 끝난 후 실행
        객체에 이벤트 처리기를 등록하는 드으이 초기화 작업 수행
        DOMContentLoaded 이벤트의 대안
*/

//13.1.5 크로스 브라우징 대첵
/*
크로스 브라우징 대책 : ES5를 지원하지 않는 브라우저에서 문제없이 웹 페이지 표시하고,
수행 할 수 있도록 대응하는 작업
*/
