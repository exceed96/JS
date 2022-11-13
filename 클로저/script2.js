function outer(g, x){
    function inner(y){
        return x + y;
    }
    g.a = inner;
}

outer(window, 4);
var result = a(5);
console.log(result);

//script과 같은 동작방식이다. 다만 여기서 다른점은 인자로 window객체 즉 global을 넘겨줬다는 것이다.