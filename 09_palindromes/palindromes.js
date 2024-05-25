const palindromes = function (word) {
    const chars = word.split("").filter(char => /[a-zA-Z0-9]/.test(char))
    for (let i = 0; i < chars.length / 2; i++) {
        let first = chars[i].toLowerCase()
        let second = chars[chars.length -1 - i].toLowerCase()
       if (first !== second) return false
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
