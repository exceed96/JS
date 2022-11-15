var arr = [10,20,30,40,50]

arr.splice(1, 0, "hello");
console.log(arr);
arr.splice(3,0,20,30,40,50)
console.log(arr);
arr.splice(5, 2) //인덱스 5부터 해서 삭제할 데이터는 뒤로 2개다. (5,6 삭제)
console.log(arr);
arr.splice(2, 1, "test");
console.log(arr);