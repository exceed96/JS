function Person(name, age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return this.name + " : " + this.age + " years old";
    };
}

var p1 = new Person("apple", 20);
var p2 = new Person("banana", 30);
var p3 = new Object();
var p3 = {name : "sort", age : 40};
console.dir(p1);
console.dir(p2);
console.dir(p3);