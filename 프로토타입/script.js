function Person(name ,age){
    this.name = name;
    this.age = age;
}

Person.prototype.getInfo = function(){ //공유영역을 통해서 객체에서 사용하는 중복된 메서드를 정의한 것이다.
    return this.name + ":" + this.age;
}

var p1 = new Person("apple", 20);
var p2 = new Person("banana", 30);