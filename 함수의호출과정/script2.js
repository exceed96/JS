var msg = "GLOBAL";

function outer(){
    var msg = "OUTER";
    console.log(msg);
    inner();
    function inner() {
        var msg = "INNER";
        console.log(msg);
    }
}

outer();