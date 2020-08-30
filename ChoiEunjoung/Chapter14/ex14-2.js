//14.1 DOM 트리
/*
웹 페이지의 내용은  Document가 관리한다. 웹 브라우저가 웹 페이지를 읽어 들이면 렌더링 엔진은 웹 페이지의 Html 문서 구문을 해석하고
Document 객체에서 문서 내용을 관리하는 DOM 트리라고 하는 객체의 트리 구조를 만든다. 

DOM 트리를 구성하는 객체 하나를 노드라고 한다. 
문서노드 :  전체 문서를 가리키는 Document 객체
html요소 노드 : html 요소를 가리키는 객체
텍스트 노드 : 텍스트를 가리키는 객체 

DOM 트리 요소 앞뒤에서 연속적인 공백 문자를 발견하면 텍스트로 취급하여 텍스트노드로 생성함 
단, html요소 안에 있는 첫 공백문자와 마지막 공백문자에 대해서는 공백노드를 생성하지 않는다. 

//14.1.2 노드 객체의 프로퍼티 
노드의 프로퍼티를 활용해 Document객체를 타고 내려가 특정 요소 객체나 텍스트 객체를 참조할 수 있다. 
document.childNodes[0].childNodes[2] //공백노드의 유무에 따라 객체의 참조가 바뀔 수 있다. 
document.firstchild.lstchild
그래서 보통은 id와 class 속성으로 원하는것을 직접 참조한다. 

// Html 요소의 트리 
html문서 안의 요소에만 관심이 있는 경우에도 childNodes와 firstChild로 노드를 참조하면 공백문자의 유무에 따라 검색을 바꿔야한다. 불편
그래서 
document.children[0].children[1]
document.firstElementChild.lastElementChild 이런식으로 함

//주요 노드 객체 
노드 객체를 생성하는 생성자 nodeName, nodeValue, nodeType 속성

*/

console.log(document.constructor);
console.log(document.nodeName, document.nodeValue, document.nodeType);
var element = document.children[0].children[1].firstElementChild;
console.log(element.constructor);
console.log(element.nodeName, element.nodeValue, element.nodeType);

//14.1.3 자바스크립트로 웹 페이지 제어하기
/*
웹 페이지를 사용자가 조작하거나 코드로 DOM트리나 스타일을 수정하면 렌더링 엔진은 그때마다 화면을 다시 렌더링함
렌더링처리는 시간이 많이 걸려서 이러한 처리가 자주 발생하면 렌더링을 원할하게 하지 못할수도 있음 
횟수를 줄여 최적화 함 
반복되는 요청은 모아서 처리한다. 등등 
*/
