const calculo1 = document.querySelector('#calculo1')
const calculo2 = document.querySelector('#calculo2')
const btnCalcular = document.querySelector('#btn-calcular')
const elResultado = document.querySelector('#resultado')

btnCalcular.addEventListener('click',btnOnClick)
function btnOnClick(){
    const calcular = parseInt(calculo1.value) + parseInt(calculo2.value)
    elResultado.innerHTML = "El resultado es: " + calcular

}