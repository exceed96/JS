var p1 = {nick: "sangyeki", age: 20};
p1.getInfo = function(){
    return this.nick + " : " + this.age + "years old"; //여기에서 this는 객체가 p1이므로 p1의 value가 나온다.
};

p1.getInfo2 = function(){
    function inner(){
        return this.nick + " is " + this.age + " years old."; //여기에서 this는 객체가 없으므로 undefined가 출력된다.
    }
    return inner();
}

console.log(p1.getInfo());
console.log(p1.getInfo2());