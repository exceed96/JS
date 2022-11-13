(function(window){
    var calc = function(x,y){
        var result = x/y;
        return util(result);
    }
    
    var util = function(num){
        return Math.round(num);
    }

    window.calc = calc;
})(window);