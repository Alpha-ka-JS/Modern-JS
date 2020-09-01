// 기능성 테스트
if (element.addEventListener) {
  element.addEventListener('click', handler, false);
} else if (element.attachEvent) {
  element.attachEvent('onclick', handler);
} else {
  element.onclick = handler;
}
