//14.4 HTML 요소의 내용을 읽고 쓰기
//14.4.1 innerHTML 프로퍼티
/*
innerHTML - 요소안의 HTML 코드를 가르킨다 
          - 문자열로 다루어야 하므로 간단한 내용 편집할 때 유용
*/

//14.4.2 textContent와 innerText 프로퍼티
/*
innerHTML, textContent의 차이점
  - innerHTML는 코드를 가르킴 
    textContent는 웹 페이지에 표시했을 때의 텍스트 정보 표시 (특수문자 escape됨)

innerText - textContent는 IE9 이상 버전에 쓸 수 있으므로 이전 버전에서는 innerText가 대신함
          - textContent와 차이점이 있는데 script 요소 안의 텍스트를 반환하지 않음, 남는 공백 문자 제거, 테이블 요소 수정 불가
*/

//textContent의 크로스 브라우징 대책
function textContent(element) {
  var content = element.textContent;
  if (content !== undefined) return content;
  return element.innerText;
}
