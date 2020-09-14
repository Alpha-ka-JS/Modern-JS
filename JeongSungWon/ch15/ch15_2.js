// 15.2 이벤트 리스너를 등록하고 삭제하는 방법

//15.2.1 addEventListener 메서드로 이벤트 리스너 등록하기
EventTarget.addEventListener(type, listener, useCapture);

//15.2.2 addEventListener를 사용해서 얻을 수 있는 장점
/*
 - 같은 요소의 같은 이벤트에 이벤트 리스너를 여러개 등록
 - 버블링 단계는 물론 캡처링 단계에서도 활용
 - HTML 요소를 포함한 모든 DOM 노드에 이벤트 리스너 등록
*/

//15.2.3 removeEventListener 메서드로 이벤트 리스너 삭제하기
target.removeEventListener(type, listener, useCapture);
