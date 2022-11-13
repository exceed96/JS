var g = "GLOBAL";
function test() {
    console.log(g);
    if (false){
        var g = "TEST";
    }
    console.log(g);
}

test();