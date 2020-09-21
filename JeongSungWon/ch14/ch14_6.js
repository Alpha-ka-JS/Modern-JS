//14.6 HTML 요소의 위치

const { SourceCode } = require('eslint');

//14.6.1 HTML 요소의 위치를 표현하는 좌표계
/*
뷰 포트 좌표계 - 웹 브라우저 내의 내용 표시하는 부분의 왼쪽 위 꼭짓점
문서 좌표계 - 문서의 왼쪽 위 꼭짓점
*/

//14.6.2 HTML 요소의 위치와 크기 구하기
//뷰 포트 좌표계로 측정한 박스 위치와 크기 정보를 담은 객체 반환
var rect = element.getBoundingClientRect();

//14.6.3 뷰 포트의 크기 가져오기
document.documentElement.clientWidth; // 뷰 포트의 너비
document.documentElement.clientHeight; // 뷰 포트의 높이

//IE9 이후 출시된 다른 웹 브라우저
window.innerWidth; // 뷰 포트의 너비
window.innerHeight; // 뷰 포트의 높이

//14.6.4 스크롤한 거리 구하기

//익스플로러, 파이어폭스
document.documentElement.scrollLeft; // X축 방향으로 스크롤한 거리
document.documentElement.scrollTop; // Y축 방향으로 스크롤한 거리

//크롬, 사파리, 오페라, 엣지, 각 웹 브라우저의 Quirks Mode
document.body.scrollLeft; // X축 방향으로 스크롤한 거리
document.body.scrollTop; // Y축 방향으로 스크롤한 거리

//파이어폭스, 크롬, 사파리, 오페라, 엣지, IE9 이상
window.pageXOffset; // X축 방향으로 스크롤한 거리
window.pageYOffset; // Y축 방향으로 스크롤한 거리

//스크롤 거리 구하는 함수(크로스 브라우징 대응)
function getScrollTop() {
  if (window.pageYOffset !== undefined) {
    return window.pageYOffset;
  } else {
    return document.documentElement.scrollTop || document.body.scrollTop;
  }
}
function getScrollLeft() {
  if (window.pageXOffset !== undefined) {
    return window.pageXOffset;
  } else {
    return document.documentElement.scrollLeft || document.body.scrollLeft;
  }
}

//14.6.5 스크롤 하기
window.scrollTo(X, Y);

// 특정 거리만큼 스크롤하기
window.scrollTo(dx, dy);
function smoothScroll(id, durationTime) {
  var TIME_INTERVAL = 30;
  var element = document.getElementById(id);
  if (!element) return;
  var ey = element.getBoundingClientRect().top;
  var dy = (ey * TIME_INTERVAL) / durationTime;
  var direction = dy > 0 ? 1 : -1;
  var timer = setInterval(function () {
    scrollBy(0, dy);
    ey -= dy;
    if (direction * ey <= 0) clearInterval(timer);
  }, ITME_INTERVAL);
}
