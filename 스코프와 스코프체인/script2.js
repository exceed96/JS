function test(){
    var num = 100;
    for (var num = 0; num < 10; num++){
        console.log(num);
    }
    return num;
}

var result = test();
console.log("Final number : " + result);