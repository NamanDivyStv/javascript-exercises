const add = function(first,second) {
  return(first+second);
};

const subtract = function(first,second) {
	return(first-second);
};

const sum = function(array) {
	let i;
  let total=0;
  if(array.length!=0){
    for(i=0;i<array.length;i++){
    total+=array[i];
  }
  }
  return(total);
  
};

const multiply = function(array) {
  let i,product=1;
  for(i=0;i<array.length;i++){
    product*=array[i];
  }
  return(product);
};

const power = function(base,exponent) {
	return(Math.pow(base,exponent));
};

const factorial = function(number) {
	let i,factorial=1;
  for(i=1;i<=number;i++){
    factorial*=i;
  }
  return(factorial);
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
