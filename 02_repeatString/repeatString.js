const repeatString = function(string, numberRepetitions) {
    if (numberRepetitions < 0){
        return "ERROR"
    }
    result = "";
    for (let i=0; i<numberRepetitions; i++){
        result += string;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
