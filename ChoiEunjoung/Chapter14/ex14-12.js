/*
        뷰포트 좌표계 = 윈도우 좌표계
        :뷰 포트의 왼쪽 위 꼭짓점을 원점으로 한다. 
        문서좌표계 : 문서의 왼쪽 위 꼭짓점을 원점으로 한다. 스크롤하면서 문서좌표계의 원점이 뷰포트를 따라서 이동함 
        */
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
function smoothScroll(id, duration) {
  var TIME_INTERVAL = 30;
  var element = document.getElementById(id);
  if (!element) return;
  var ey = element.getBoundingClientRect().top;
  var dy = (ey * TIME_INTERVAL) / duration;
  var direction = dy > 0 ? 1 : -1;
  var timer = setInterval(() => {
    scrollBy(0, dy);
    ey -= dy;
    if (direction * ey <= 0) clearInterval(timer);
  }, TIME_INTERVAL);
}
