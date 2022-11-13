function test1(a1){
    a1();
    function a1(){
        console.log("world");
    }
}

test1(function() { console.log("hello")})