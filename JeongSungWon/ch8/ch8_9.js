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
