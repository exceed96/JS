var setmessage = function(message){
    return function(name){
        return message + " " + name;
    }
}

var m = setmessage("hello");
console.log(m("홍길동"));
console.log(m("이몽룡"));
console.log(m("성춘향"));