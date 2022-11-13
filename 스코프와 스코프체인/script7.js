//즉시 실행함수
var test3 = (function f(){
    function f(){return "hello";}
    return f;
    function f(){return "world";}
})();

console.log(test3());