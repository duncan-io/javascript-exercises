const reverseString = function(string) {

    const characterSplit = string.split("");
    const reverseArray = characterSplit.reverse();
    let result = reverseArray.join("");

    return result;
    


};

// Do not edit below this line
module.exports = reverseString;
