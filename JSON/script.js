var data = {
    "_id" : "sangyeki",
    "name" : "sangyeob",
    "phones" : [ "010-2452-8864", "02-2214-3521"],
    "title" : "senior consultant",
    "hiredate" : new Date("2010-09-01")
};

var str = JSON.stringify(data, function(key, value){
    if (key == "hiredate"){
        return new Date(value).getTime();
    }else{
        return value;
    }
});

console.log(str);
