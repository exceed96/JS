var p1 = {name : "apple", age: 30};
p1["email"] = "sangyeki@42seoul.com";
p1.address = "bucheon";

console.log(p1.email);
console.log(p1["address"]);


delete p1.email;

p1.getInfo = function(){
    return this.name + " : " + this.age + "years old"; //this는 자기자신을 가르킨다. 즉 자기자신 객체를 가르키는 것이다. (this = p1)
};

console.dir(p1);
console.log(p1.getInfo());