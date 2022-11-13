var a2=1;

function test2() {
    a2 = 10;
    return;
    function a2(){}
}

test2();
console.log(a2);