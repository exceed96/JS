var json = '{"_id":"sangyeki","name":"sangyeob","phones":["010-2452-8864","02-2214-3521"],"title":"senior consultant","hiredate":1283299200000}';

var p2 = JSON.parse(json, function(key, value){
    if (key == "hiredate"){
        return new Date(value);
    }else{
        return value;
    }
});

console.dir(p2);