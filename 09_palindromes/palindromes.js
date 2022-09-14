const palindromes = function (str) {
   let lower = str.toLowerCase();
    let splitString = lower.split("");
    for(let i=0; i < splitString.length; i++) {
        if (splitString[i] === "!" || splitString[i] === " " || splitString[i] === "," || splitString[i]==="."){
            splitString.splice(i,1);
        }
    }
    console.log(splitString)
    let reverse = splitString.reverse();
    let joint = reverse.toString();
    let joint2 = splitString.join();
    joint.replace(/,/g,"");

    console.log(joint)

    return joint == joint2 ? true : false;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'))

// Do not edit below this line
// module.exports = palindromes;
