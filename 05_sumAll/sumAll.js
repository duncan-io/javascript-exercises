const sumAll = function(num1, num2) {
    
    const listOfNums=[];

    // Check which value is greater and then create array of integers

        if (typeof(num1)==="number" && typeof(num2)==="number" && num1 > 0 && num2 > 0 && num1 < num2){
            for(let i = num1; i <= num2; i++){
                listOfNums.push(i);
            }
        } else if (num2 < num1){
            for(let i = num2; i <= num1; i++){
                listOfNums.push(i);
            }
        } else {
            return "ERROR"
        }

       
  

    // Add contents of newArray

    let sum = 0;

    for (let i=0; i < listOfNums.length; i++){
        
        sum += listOfNums[i];
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
