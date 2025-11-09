const removeFromArray = function(arr, ...a) {
    const newAray = []
    arr.forEach(item => {
        if(!a.includes(item)){
            newAray.push(item)
        } 
    });
    return newAray
};

console.log(removeFromArray([1,2,3,4],3))
console.log(removeFromArray([1,2,3,4], 3,2))
console.log(removeFromArray([1,2,2,3],2))
console.log(removeFromArray([1,2,3,4],7,"tacos"))
console.log(removeFromArray([1,2,3,4],7,"tacos"))
console.log(removeFromArray([1,2,3,4],7,2))
console.log(removeFromArray([1,2,3,4],1,2,3,4))
console.log(removeFromArray(["hey",2,3,"ho"], "hey",3))
console.log(removeFromArray([1,2,3], "1",3))



// Do not edit below this line
module.exports = removeFromArray;
