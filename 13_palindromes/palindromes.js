const palindromes = function (string) {
    let cleanString = string
        .toLowerCase()
        .split("")
        .filter(c => {
            return ( c >= "a" && c <= "z") || (c >= "0" && c <= "9")
        })
        
    let normal = cleanString.join("") 
    let reverse = cleanString.reverse().join("")
    
    if(normal === reverse){
        return true
    }else{return false}
    
};


console.log(palindromes("racecar"))
console.log(palindromes("racecar!"))
console.log(palindromes("Racecar!"))
console.log(palindromes("A car, a man, a maraca."))
console.log(palindromes("Animal loots foliated detail of stool lamina."))
console.log(palindromes("ZZZ car, a man, a caracaz."))
console.log(palindromes("rac3car"))
console.log(palindromes("r3ace3car")) 

// Do not edit below this line
module.exports = palindromes;
