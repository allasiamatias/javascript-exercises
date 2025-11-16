const fibonacci = function(n) {
    let numero = Number(n)

    if (numero < 0){
        let mesage = "OOPS"
        return mesage
    } else if(numero === 0){
        return 0
    }    else if( numero === 1 || numero === 2){
        return 1
    }
    let fiboSeq = [1,1]
    for(let i = 2; i <= numero-1; i++ ){
        let siguiente = fiboSeq[i-1] + fiboSeq[i-2]
        fiboSeq.push(siguiente)
    }
    return fiboSeq[numero-1]
};
    console.log(fibonacci(4))
    console.log(fibonacci(6))
    console.log(fibonacci(10))
    console.log(fibonacci(15))
    console.log(fibonacci(25))
    console.log(fibonacci(0))
    console.log(fibonacci(-25))
    console.log(fibonacci("0"))
    console.log(fibonacci("1"))
    console.log(fibonacci("2"))
    console.log(fibonacci("8"))

// Do not edit below this line
module.exports = fibonacci;
