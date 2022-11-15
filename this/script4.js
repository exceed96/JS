var p1 = {nick : "apple", age: 20};
p1.getInfo = function(){
    return this.nick + " : " + this.age + " years old";
};

p1.getInfo2 = function(){
    function inner(){
        return this.nick + " is " + this.age + " years old.";
    }
    return inner.apply(this);
}

console.log(p1.getInfo());
console.log(p1.getInfo2());