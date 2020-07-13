digits = "";
for(var i=0; i<10; i++){
    digits+=i;
}
console.log(digits);

randomChar="";
for(var i=0; i<8; i++){
    randomChar+=String.fromCharCode(Math.floor(Math.random()*26) + "a".charCodeAt(0));
}
console.log(randomChar);

function joinStrings(n,f){
    var s = "";
    for(var i=0; i<n; i++){
        s += f(i);
    }
    return s;
}
var digits = joinStrings(10, function(i) {return i;})
var randomChar = joinStrings(8, function(i) {
    return String.fromCharCode(Math.floor(Math.random()*26) +"a".charCodeAt(0));
});
console.log(digits);
console.log(randomChar);

function memorize(f){
    var cache = {};
    return function(x){
        if(cache[x] == undefined) cache[x] = f(x);
        return cache[x];
    };
}
function isPrime(n){
    if(n<2) return false;
    var m = Math.sqrt(n);
    for(var i=2; i<m; i++) if(n%i ==0) return false;
    return true;
}
var isPrime_memo = memorize(isPrime);
var N = 1000;
for(var i=2; i<=N; i++) isPrime_memo(i);
for(var i=2; i+2<=N; i++){
    if(isPrime_memo(i) && isPrime_memo(i+2)) console.log(i + "," + (i+2));
}

function memorize(f){
    var cache = {};
    // return function(x){
    //     if(cache[x] == undefined) cache[x] = f(x);
    //     return cache[x];
    // };

    return function(){
        var key ="";
        for(var i=0; i<arguments.length;i++) key+=arguments[i] +",";
        if(cache[key]==undefined) cache[key] = f.apply(null,arguments);
        return cache[key];
    }
}
var fibonacci = memorize(function(n){
    if(n<2) return n;
    return fibonacci(n-1) + fibonacci(n-2);
});
for(var i=0; i<=20; i++){
    console.log((" "+i).slice(-2)+":"+fibonacci(i));
}

//8.9.4 함수의 합성
function compose(f,g){
    return function(x){
        //return f(g(x));
        return f.call(this, g.apply(this,arguments));
    }
}
var square = function(x) { return x*x; };
var add1 = function(x) { return x+1; };
var h = compose(square, add1);
console.log(h(2));

//8.9.5 부분적용
function partial(f){
    var args = arguments;
    return function(){
        var a = Array.prototype.slice.call(args,1);
        for(var i=0, j=0; i<a.length; i++){
            if(a[i]==undefined) a[i] = arguments[j++];
        }
        return f.apply(this,a);
    };
}
var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, .5);
var cubicroot = partial(Math.pow, undefined, 1/3);
var exp = partial(Math.pow, Math.E, undefined);

//8.9.6 커링
var pow = function(exponent){
    return function(base){
        return Math.pow(base, exponent);
    };
};
var square = pow(2);
var sqrt = pow(.5);
var cubicroot = pow(1/3);
console.log(square(8))
console.log(sqrt(8))
console.log(cubicroot(8))

//8.11.1 화살표 함수 표현식으로 함수 정의하기
var square = function(x) {return x*x;};
var square = (x) => {return x*x;};

var f = (x,y,z) => {};
var square = x => {return x*x;};
var f = () =>{};

var f = (a,b) => ({x:a, y:b});
console.log((x => x*x)(3));

//this의 값이 함수를 정의할때 결정
var obj = {
    say : function(){
        console.log(this);
        var f = function() {console.log(this);};
        f();
        var g = () => console.log(this);
        g();
    }
};
obj.say();

var f = function() { console.log(this.name);};
var g = () => console.log(this.name);
var tom = {name:"Tom"};
f.call(tom);
g.call(tom);

//arguments 변수가 없다.
var f = () => console.log(arguments);
f();

// 생성자 사용 X
// var Person = (name, age) => { this.name = name; this.age = age;};
// var tom = new Person("Tom",17);

function f(a,b, ...args){
    console.log(a,b,args);
}
f(1,2,3,4,5,6);

var sum1 = (...args1) => {
    for(var i=0, s=0; i<args1.length; i++) s+=args1[i];
    return s;
};
sum1(1,2,3,4,5);

function multiply(a, b=1){
    return a*b;
}
console.log(multiply(3));
console.log(multiply(3,2));

//8.11.3
var a = [5,4,3];
a.forEach(function(val) {console.log(val);});

var a = [5,4,3];
var iter = a[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function makeIterator(array){
    var index = 0;
    return{
        next : function(){
            if( index < array.length){
                return { value: array[index++], done:false};
            }else{
                return {value: undefined, done:true};
            }
        }
    };
}
var iter =makeIterator(["A","B","C"]);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

var a = [5,4,3];
var iter = a[Symbol.iterator]();
while(true){
    var iteratorResult = iter.next();
    if(iteratorResult.done == true) break;
    var v = iteratorResult.value;
    console.log(v);
}

console.log("of 실행");
for(var v of a) console.log(v);
console.log("in 실행");
for(var v in a) console.log(v);

function* gen(){
    yield 1;
    yield 2;
    yield 3;
}
var iter = gen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function* createNumbers(from,to){
    while(from <= to) yield from++;
}
var iter = createNumbers(10,20);
for(var v of iter) console.log(v);

function* fibonacci1(){
    var fn1 = 0, fn2 = 1;
    while(true){
        var fnew = fn1 + fn2;
        fn1 = fn2;
        fn2 = fnew;
        reset = yield fn1;
        if(reset){
            fn1 = 0; fn2 = 1;
        }
    }
}
var iter = fibonacci1();
for(var i=0; i<10; i++){
    console.log(iter.next().value);
}
console.log(iter.next().value);
console.log(iter.next(true).value);
console.log(iter.next().value);
console.log(iter.next().value);

function* g3(){
    yield 1;
    yield 2;
    yield 3;
}
var iter1 = g3();
console.log(iter1.next());
console.log(iter1.return(10));
console.log(iter1.next());

function* idMaker(){
    var count = 0;
    while(true){
        try{
            yield count++;
        }catch(e){
            console.log("오류가 발생");
        }
    }
}
var iter = idMaker();
console.log(iter.next());
console.log(iter.next());
iter.throw(new Error("오류"));

function* f1(){
    yield "X";
    yield "Y";
}
function* g1(){
    yield 0;
    yield* [2,4];
    yield* "AB";
    yield* f1();
}
var iter = g1();
for(var v of iter) console.log(v);

function htmlEscape(strings, ...values){
    var result = strings[0];
    for(var i=0; i<values.length;i++){
        result += escape(values[i])+ strings[i+1];
    }
    return result;
    function escape(s){
        return s.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/'/g, "&#039;")
                .replace(/"/g, "&quot;")
                .replace(/`/g, "&#096;");
    }
}
var userinput = "<script>altert('test);</script>";
var message = htmlEscape`<p>${userinput}</p>`;
console.log(message);

