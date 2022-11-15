var p1 = new Object(); //빈객체생성
p1.name = "apple"; //객체 안에 속성 추가
p1.phone = "010-2222-3331"; //객체 안에 속성 추가
p1.age = 20; //객체 안에 속성 추가
console.log(p1);

var p2 = {name : "apple", phone : "010-2222-3331", age : 20}; //객체생성
console.log(p2);
console.log(p2.phone);

delete p1.age;
console.log(p1);