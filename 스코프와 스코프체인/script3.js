var g = "GLOBAL";
function test(){
    console.log(g);
    var g = "TEST";
    console.log(g)
}

test();