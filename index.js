let somar = function(num1, num2){
    let resultado = num1 + num2
    return `A soma entre ${num1} e ${num2} é: ${resultado}`
}

let subtrair = function(num1, num2){
    let resultado = num1 - num2
    return `A subtração entre ${num1} e ${num2} é: ${resultado}`
}

let multiplicar = function(num1, num2){
    let resultado = num1 * num2
    return `A Multiplicação entre ${num1} e ${num2} é: ${resultado}`
}

let dividir = function(num1, num2){
    let resultado = num1 / num2
    if (resultado % 1 != 0){
        resultado.toFixed(2)
    }
    return `A Divisão entre ${num1} e ${num2} é: ${resultado}`
}


console.log(somar(2, 4))
console.log(subtrair(2, 4))
console.log(multiplicar(2, 4))
console.log(dividir(2, 4))