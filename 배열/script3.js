var a = [100,200,300];
a.name = "apple";
a.age = 20;
a.home = "bucheon";

for(var k in a){ //k는 인덱스값을 의미하기도 하고 key값을 의미하기도 한다.
    console.log(k + "--->  " + a[k]);
}

for(var i = 0; i < a.length; i++){ //이런식으로 하면 배열의 값만 출력된다.
    console.log(a[i]);
}