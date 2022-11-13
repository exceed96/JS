var msg = "GLOBAL";

function outer(){
    //var msg = "OUTER";
    console.log(msg);
    inner();
    function inner() {
        //var msg = "inner";
        console.log(msg);
    }
}

outer();