function outer(x){
    function inner (y){
        return x+y;
    }
    return inner;
}

window.a = outer(4); //window객체 안에다가 "a"라는 변수가 만들어진다.
var result = a(5);
console.log(result);

//a라는 변수에 outer함수에 4가 저장된 상태이다
//즉 outer안에 있는 x라는 변수는 4로 초기화된 변수이다.
//그 후 "outer"함수는 inner함수를 리턴하므로 a라는 객체는 최종적으로 inner함수가 되는 것이다.(x = 4를 가진)
// 그 후 "var result = a(5)"를 통해서 inner에 5가 들어가고 result를 출력했을 때 9가 출력되는 것이다.