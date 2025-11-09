const reverseString = function(str) {
    let reverse = str.split("").reverse().join("")
    return reverse
};

reverseString("hello")
reverseString("hello there")
reverseString("123! abc! Hello, Odinite.")
reverseString("works with blank strings")

// Do not edit below this line
module.exports = reverseString;
