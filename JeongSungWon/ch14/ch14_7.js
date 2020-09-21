//14.7 HTML 폼

//14.7.3 폼 요소와 폼 컨트롤 요소 가져오기
// DOM 메서드로 가져오기
var menu = document.getElementById('menu1');
var option = menu.getElementsByTagName('option');

var inputs = document.querySelectorAll("#form1 input[type='radio']");

// forms 프로퍼티로 form 요소 가져오기
document.forms[0];
document.forms.form1;
document.forms.questions;

// form 요소 객체의 자긱 요소 객체 가져오기
document.forms.form1[3];
document.forms.form1.bloodtype;
document.forms.form1.menu1;

document.forms.form1.elements[3];
document.forms.form1.elements.bloodtype;
document.forms.form1.elements.menu1;

var sex_selected;
for (var i = 0; i < inputs.length; i++) {
  if (inputs[i].checked) sex_selected = inputs[i].nodeValue;
}
