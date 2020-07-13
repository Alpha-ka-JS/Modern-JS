//8.8.3 apply, call 메서드
function say(greetings, honorifics){
    console.log(greetings + " " + honorifics + this.name);
}
var tom = { name : "Tom Sawyer"};
var becky = {name : "becky Thatcher"};
say.apply(tom, ["hello!", "Mr."]);
say.apply(becky, ["hi!", "Ms."]);
say.call(tom, "Hello","Mr.");
say.call(becky, "Hi!","Ms.");

//8.8.4 bind 메서드
var sayToTom = say.bind(tom);
sayToTom("Hello", "Mr.");

//8.8.5 함수에 프로퍼티 추가하기
function f(x) {}
f.p = 6;
f.g = function(){};

function fibonacci(n){
    if(n<2) return n;
    if(!(n in fibonacci)){
        fibonacci[n] = fibonacci(n-1) + fibonacci(n-2);
    }
    return fibonacci[n];
}
for(var i=0; i<=20; i++){
    console.log((" "+i).slice(-2)+":"+fibonacci(i));
}
