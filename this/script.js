function test(){
    console.log(this);
}

console.log(this);
test();

var p1 = {name : "apple", age: 20};
p1.test = test;
p1.test();