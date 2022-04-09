
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

    if (resultado - Math.floor(resultado) !==0 ){
        resultado = resultado.toFixed(2)
    }
    return `A Divisão entre ${num1} e ${num2} é: ${resultado}`
}

function validar(number1, number2){
    let stringNum1 = String(number1)
    let stringNum2 = String(number2)

    if (stringNum1 < 1 || stringNum2 < 1) {
        alert('Por favor, preencha os dois campos com números')
    } else {
        return true
    }
}

function calcular (){
    let num1 = Number(document.getElementById('number1').value)
    let num2 = Number(document.getElementById('number2').value)

    const areaDeCalculo = document.getElementById('resultados')

    if (validar(num1, num2)) {
        areaDeCalculo.innerHTML = `<p class='resposta'>${somar(num1, num2)}</p>`
        areaDeCalculo.innerHTML += `<p class='resposta'>${subtrair(num1, num2)}</p>`
        areaDeCalculo.innerHTML += `<p class='resposta'>${multiplicar(num1, num2)}</p>`
        areaDeCalculo.innerHTML += `<p class='resposta'>${dividir(num1, num2)}</p>`
    }
}
