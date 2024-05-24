const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR"
    }
    let start = Math.min(x, y)
    let end = Math.max(x,y)

    if (start < 0){
        return "ERROR"
    }

    let array = [];
    for (let i = start; i<=end; i++){
        array.push(i)
    }
    return array.reduce((i, j) => i+j, 0)

};

// Do not edit below this line
module.exports = sumAll;
