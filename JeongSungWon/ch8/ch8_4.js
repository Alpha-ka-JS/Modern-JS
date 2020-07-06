function fact(n){
    if(n <= 1) return 1;
    return n*fact(n-1);
}

var fact = function f(x){
    if( n<= 1) return 1;
    return n*f(n-1);
}

var fact = function(n){
    if(n<=1) return 1;
    return n*arguments.callee(n-1);
}
/*
호출된 재귀 함수는 각각 메모리의 다른 영역을 사용
호출 횟수만큼 메모리 소비량 증가
*/

//하노이의 탑
/*
코드 따라 하긴 했는데.. 갑자기 구현하라고 하면 못할듯..?
*/
function hanoi(n, a, b, c){
    if(n<1) {return;}
    hanoi(n-1, a, c, b);
    console.log(n + " 번째 원반: " + a + " -> " + c);
    hanoi(n-1,b,a,c);
}
hanoi(4,"A","B","C");

function quicksort(x, first, last){
    var p = x[ Math.floor((first+last)/2)];
    for(var i = first, j = last; ; i++, j--){
        while(x[i] < p) i++; // 왼쪽부터 p 이상 요소 검색
        while(p < x[j]) j++; // 오른쪽부터 p 이하 요소 검색
        if( i >= j) break; // i랑 j 가 교차되면 p의 위치는 맞는 위치가 break
        var w = x[i];
        x[i] = x[j];
        x[j] = w;
    }
    if(first < i - 1) quicksort(x, first, i - 1); // 왼쪽에 두개 이상 있으면 재정렬
    if(j + 1 < last) quicksort(x, j + 1, last); // 오른쪽에 두개 이상 있으면 재정렬
}
var a = [7,2,5,1,8,9,3];
quicksort(a, 0, a.length -1 );
console.log(a);
