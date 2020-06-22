/*-----------------------------
팩토리얼
-------------------------------*/
function fact(n){
    if( n <= 1) return n;
    return n * fact(n-1);
}
// i값을 1에서 9까지 증가시킴
for(var i = 1; i < 10; i++){
    console.log(i + "!= " + fact(i));
}
