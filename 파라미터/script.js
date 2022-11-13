function test(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.dir(arguments);
}

test(100, 200, 300);
test(100);
test(100,200,300,400,500);