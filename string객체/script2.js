var a = "apple banana sort.";
var b = "hello";
var c = "world";

console.log("charAt(3) : " + a.charAt(3)); //문자열의 특정 인덱스값 출력
console.log("indexOf('a') : " + a.indexOf('a')); //문자열의 앞에서부터 괄호안에 문자가 있는 인덱스의 최초 위치
console.log("b.concat(' ' + c) : " + b.concat(" " + c)); //b문자열뒤에 문자열을 하나 더한다.
console.log("b.toUpperCase() : " + b.toUpperCase()); //소문자를 대문자로
console.log("a.replace(/\s/g, '_') : " + a.replace(/\s/g, "_")); //특정 문자를 다른 문자로 바꾼다.
console.log("a.substring(3, 10) : [" + a.substring(3, 10) + "]"); //특정 범위의 문자열을 출력
console.log("a.slice(1, -3) : " + a.slice(4, -6)); //

var arr1 = a.split(" ");
console.log("a.split(' ') : next value.");
console.log(arr1);
