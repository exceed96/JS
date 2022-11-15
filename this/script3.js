function test(x,y){
    var result = x+y;
    this.result = result;
}

test(1,2);
console.log(window.result);

var p1 = {name : "apple"};
test.apply(p1, [3, 4]); //이때 호출되는 this는 p1
console.log(p1.result);

var p2 = { name : "banana"};
test.call(p2, 5, 6); //이때 호출되는 this는 p2
console.log(p2.result);