//13.2 Location 객체
/*
//Location
창에 표시되는 문서의 url을 관리한다 window.location또는 location 

1. 두 코드는 모두 url이 가리키는 문서를 읽어들인다. 
 location.href="http://www.naver.com";
 location.assgin("http://www.naver.com");
 //이력을 남겨서 뒤로가기가 가능하다 
2. url이 가리키는 문서를 읽어들일때 이력을 남기지 않으려면 replace를 사용한다
location.reaplace("http://www.naver.com");
3. url은 상대경로 지정도 가능하다. 상대경로를 지정하면 이전 웹 페이지의 사이트 루트에 대한 상대 url로 인식한다. 
setTimeout(function(){
    location.replace("book/bookList.aspx");
},3000)
4. reload 메서드를 사용하면 현재의 페이지를 다시 읽어들일 수 있다. 
location.reload();
5. location.hash = "#header"; id = header인 html요소 스크롤
6. location.search = "some data"; search 프로퍼티 값을 바꾸면 서버에 질의 문자열을 보낸다. //??


*/
