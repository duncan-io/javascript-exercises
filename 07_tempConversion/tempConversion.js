
//convert farenheit to celsius
const ftoc = function(f) {
  let ce = ((f-32)*(5/9));
  let ceRounded = Math.round(ce*10)/10;
  return ceRounded;
};

//convert celsius to farenheit
const ctof = function(c) {
  let fe = c * (9/5) + 32;
  let feRounded = Math.round(fe*10)/10;
  return feRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
