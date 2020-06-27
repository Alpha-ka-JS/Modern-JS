//5.2.1
console.log(5%1.5)
console.log(1+"2month")

a = 1;
b = ++a;
c = a++ + 2;

//5.2.2
function polarToDescartes(r, theta){
    var angle = Math.PI * theta / 180;
    return {x: r*Math.cos(angle), y:r*Math.sin(angle)};
}
console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.SQRT2);

//5.2.3. 부동소수점
/*
여기 다시 공부<
*/
console.log(Math.sqrt(100001) - Math.sqrt(100000)); //0.001581134877255863
console.log(1/(Math.sqrt(100001) + Math.sqrt(100000))); //0.0015811348772568783
a = 0.16, b = 0.2;
console.log(a/b);
console.log(a/b == 0.8);
console.log(Math.abs(a / b - 0.8) < 1e-10);
