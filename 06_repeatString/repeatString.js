const repeatString = function(str, a) {
    let result = ""
    if(a < 0){
        return "ERROR"
    }
    for(let i = 0; i < a; i++){
        result += str
    }
    return result
};

let number = Math.floor(Math.random()*1000)

repeatString("hey", 3)
repeatString("hello", 10)
repeatString("hi", 1)
repeatString("bye",0)
repeatString("goodbye", -1)
repeatString("hey", number)
repeatString("",10)


// Do not edit below this line
module.exports = repeatString;
