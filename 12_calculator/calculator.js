const add = function(a,b ) {
	return a + b
};

console.log(add(0,0))
console.log(add(2,2))
console.log(add(2,6))

const subtract = function(a,b) {
	return a - b
};

console.log(subtract(10, 4))
console.log(subtract(-10, -4))
console.log(subtract(-8, 7))

const sum = function(arr) {
	return arr.reduce((acc, va) => {return acc + va},0)
};

console.log(sum([]))
console.log(sum([7]))
console.log(sum([7,11]))
console.log(sum([1,3,5,7,9]))

const multiply = function(arr) {
  return arr.reduce((acc, va) => {
    return acc * va
  },1)
};

console.log(multiply([2,4]))
console.log(multiply([2,4,6,8,10,12,14]))

const power = function(a,b) {
	return a**b
};

console.log(power(4,3))
console.log(power(3,10))

const factorial = function(a) {
	let acumulador = 1
  if(a === 0){
    acumulador = 1
  }
  for(let i = a; i > 0; i--){
    acumulador = acumulador * i 
  }
  return acumulador
};

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))
console.log(factorial(10))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
