var data1 = [10, 20, 30, 40, 50, 60, 70, 80];

var result1 = data1.filter(function(val, index){
    if (val >= 50){
        return true;
    }
})

console.log(result1);

var data2 = {
    class : "3-3",
    subject : "korean",
    sources : [
        {name : "apple", scroe : 90},
        {name : "banana", scroe : 80},
        {name : "sort", scroe : 100},
        {name : "melon", scroe : 90},
        {name : "cherry", scroe : 70},
        {name : "watermelon", scroe : 50},
        {name : "dragon", scroe : 60},

    ]
};

var condition = {min : 70, max : 90};
var result2 = data2.sources.filter(function(val, index){
    if (val.scroe >= 80){
        return true;
    }
})
console.log(result2);

// filter

data2.sources.forEach(function(val, index){
    console.log((index + 1) + ":" + val.name + ":" + val.scroe);
});

//forEach

var data = {
    class : "3-3",
    subject : "korean",
    scores : [
        {name : "apple", totla: 25, correct : 20},
        {name : "banana", totla: 25, correct : 22},
        {name : "sort", totla: 25, correct : 25},
        {name : "melon", totla: 25, correct : 21},
        {name : "watermelon", totla: 25, correct : 17},
        {name : "cherry", totla: 25, correct : 19},
        {name : "sangyeki", totla: 25, correct : 23},
    ]
};

var obj = {sum : 0, count : 0};

var result3 = data.scores.map(function(val, index){
    var score = val.correct / val.totla * 100
    this.sum += score;
    this.count++;
    return {"name":val.name, "score":score}
}, obj); //function에서 this로 가르킬 객체가 obj

console.log(result3);

//map

var data3 = {
    class : "3-3",
    subject : "korean",
    scores : [
        {name : "사과apple", score: 90},
        {name : "banana", score: 70},
        {name : "sort", score: 100},
        {name : "melon", score: 90},
        {name : "watermelon", score: 60},
        {name : "cherry", score: 50},
        {name : "sangyeki", score: 90},
    ]
}

var initVal=""
var result4 = data3.scores.reduce(function(preVal, curVal, curIndex){
    // preVal : 이전의 값, curVal : 현재의 값, curIndex : 현재인덱스
    if(curVal.score >= 80){
        return preVal + curVal.name + " ";
    }else{
        return preVal;
    }
}, initVal); //0번지일때 즉 함수가 처음 동작할때 initVal이 preVal로 넘어간다.

console.log(result4);

//reduce

