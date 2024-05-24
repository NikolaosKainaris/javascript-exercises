const removeFromArray = function(array, ...numbers) {
    return array.filter(i => !(numbers.includes(i)))
};

// Do not edit below this line
module.exports = removeFromArray;
