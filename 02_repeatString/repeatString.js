const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    } else {
        let repeat = string.repeat(num);
        return repeat
    }

};

// Do not edit below this line
module.exports = repeatString;
