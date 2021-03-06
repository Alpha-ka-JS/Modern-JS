//14.1.1 DOM 트리
/*
문서 노드 : 전체 문서를 가르키는 Document 객체
HTML 요소 노드 : HTML 요소를 가르키는 객체
텍스트 노드 : 텍스트를 가르키는 객체

HTML은 요소 뒤에 공백 문자가 여러 개 있으면 무시하지만
DOM 트리는 공백 문자 발견시 텍스트로 취급하여 텍스트 노드 생성
  단) html 요소 안에 있는 첫 공백, 마지막 공백은 제외
*/

//14.1.3 자바스크립트로 웹 페이지 제어하기
/*
렌더링 엔진은 DOM 트리와 스타일 규칙이 바뀔 때마다  렌더 트리를 다시 구성해서 웹페이지를 그림
렌더링 처리가 자주 생기면 렌더링이 원활하게 돌아가지 않아 처리 횟수를 가능한 줄이는 최적화 작업을 함
*/
