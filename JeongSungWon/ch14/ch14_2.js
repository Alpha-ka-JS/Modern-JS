//14.2 노드 객체 가져오기

//14.2.1 id 속성으로 노드 가져오기
/*
document.getElementById(id 값) => id 속성 값을 넘김
*/

//14.2.2 요소의 이름으로 노드 가져오기
/*
document.getElementsByTagName(요소의 태그 이름) => 요소값 넘김
=> NodeList 객체를 반환 (length 프로퍼티를 가진 유사 배열 객체)

NodeList 객체 - 특정 시점의 정적인 상태를 표현하는 것이 아니라 HTML 문서의 변화에 따라 동적으로 바뀜
*/

//14.2.3 class 속성 값으로 노드 가져오기
/*
document.getElementsByClassName(class의 이름)

요소 객체에서도 사용할 수 있음 => 요소 객체를 NodeList에 담아서 반환
*/
