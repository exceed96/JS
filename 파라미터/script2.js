function test(callback){
    if (typeof callback != "function"){
        throw "callback 파라미터값으로 함수만 전달 가능합니다";
    }
    callback();
}
var a = 100;
test(a);

test(function(){
    console.log("hello");
})