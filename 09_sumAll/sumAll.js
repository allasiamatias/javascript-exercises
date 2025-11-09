const sumAll = function(a,b) {
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"
    }
    if(a > b) { [a,b] = [b,a]}
    
    let result = 0
    for(let i = a; i <= b; i++){
        result += i
    }
    return result
};

console.log(sumAll(2,4))
console.log(sumAll(1,4000))
console.log(sumAll(123,1))
console.log(sumAll(-10,4))
console.log(sumAll(2, 4.6))
console.log(sumAll(10, "90"))
console.log(sumAll(10, [90,1]))


// Do not edit below this line
module.exports = sumAll;
