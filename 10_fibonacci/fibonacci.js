const fibonacci = function(num) {
    y = parseInt(num);


    if (y < 1) return "OOPS";

    let n1 = 0;
    let n2 = 1;
    let nextTerm;
  

    for(let i = 0; i < y; i++){
        
        nextTerm = n1 + n2;
        n1 = n2; 
        n2 = nextTerm; 
        
    }

    return n1;
    
};

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
