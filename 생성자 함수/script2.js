function Person(name, age){
    this.name = name;
    this.age = age;
}

var p1 = new Person("apple", 20);
var p2 = new Person("banana", 30);

console.dir(p1);
console.dir(p2);