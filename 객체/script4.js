var p1 = {name : "sort", age: 20, email : "sangyeki@42seoul.com"};
p1.getInfo = function(){
    return this.name + " : " + age + "years old";
}

for (var k in p1){ //k는 p1객체안에 있는 속성의 키값이다.
    console.log(k);
    console.dir(p1);
    console.log(k + "----> " + p1[k]);
}