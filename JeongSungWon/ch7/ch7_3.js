function fact(n){
    var k = 1; i = 1;
    while( i < n){
        console.log("i = " + i + ", k = " + k);
        k *= (++i);
    }
    console.log("i = " + i + ", k = " + k);
    return k;
}
console.log(fact(5));

//순차탐색
function linearSearch(x, a){
    var i = 0;
    var n = a.length;
    while(i < n && x > a[i]) i++;
    if(x == a[i]) return i;
    return null;
}
var a = [2,4,7,12,15,21,34,35,46,57,70,82,86,92,99];
console.log(linearSearch(35,a));

//이진탐색
function binarySearch(x, a){
    var n = a.length;
    var left = 0, right = n-1;
    while(left < right){
        var middle = Math.floor((left+right)/2); // floor -> 소숫점 이하 버림
        if(x <= a[middle]){
            right = middle;
        }
        else{
            left = middle + 1;
        }
    }
    if(x == a[right]) return right;
    else null;
}
console.log(binarySearch(35,a));

//factorial
function fact(n){
    var k = 1; i = n;
    do{
        k *= i--;
    }while(i > 0);
    return k;
}
fact(5);

for(var i = 1, sum = 0; i <= 10; i++){
    sum+=i;
}

for(var i = 0, j = 10; i < 10; i++, j--){
    console.log("i는 : " + i + " j는 : " + j );
}

function sumArray(a){
    var sum = 0;
    for(var i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum;
}
var a = [3, 5, 1, 2, 6, 7];
console.log(sumArray(a));

//중첩 반복문
var n = 20;
for(var a = 1; a <= n; a++){
    for(var b = 1; b <= n; b++){
        for(var c = 1; c <= n; c++){
            if(a*a + b*b === c*c){
                console.log(a +"^2 + "+ b + "^2 = " + c +"^2" );
            }
        }
    }
}

//for/in 문
var obj = {a:1, b:2, c:3};
for(var p in obj){
    console.log("p = " + p);
}
for(var p in obj){
    console.log("obj."+ p + "= " + obj[p]);
}
