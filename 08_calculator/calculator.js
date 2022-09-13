const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((a,b) => a + b, 0)
};

const multiply = function(array) {
  return array.reduce((a,b) => a * b)
};

const power = function(num1, num2) {

 return Math.pow(num1, num2);
	

};

const factorial = function(num1) {

  
  let array1 = [];
  for(let i = 1; i <= num1; i++){
    array1.push(i);
  };
  return array1.reduce((a,b) => a * b, 1);

};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
