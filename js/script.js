const auxiliar = document.querySelector('#auxiliar')
const backdrop = document.querySelector('.backdrop')
const botaoDeMenu = document.querySelector('#menu')
const sessaoDeCalculos = document.querySelector('#sessao-calculos')
const contDosCustos = document.querySelector('.container-dos-custos')
const containerPrincipal = document.querySelector('#container-principal')
let valorDoFrete = document.querySelector('#frete')
const botaDoCalculo = document.querySelector('#botao-calc-da-taxa')
let distanciaDoFrete = document.querySelector('#distancia-do-frete')
     





const botaoDeRecalcular = document.querySelector('#botao-recalcular')
const botaoDeFecharCalculos = document.querySelector('#botao-de-fechar-calculos')

botaoDeMenu.addEventListener('click', ()=>{
    document.querySelector('.menu-mobile').classList.add('open')
    botaoDeMenu.classList.add('hidden')
    backdrop.classList.remove('hidden')
    auxiliar.classList.add('hidden')

})

backdrop.addEventListener('click' , ()=> {
    document.querySelector('.menu-mobile').classList.remove('open')
    botaoDeMenu.classList.remove('hidden')
    backdrop.classList.add('hidden')
    auxiliar.classList.remove('hidden')
      
})



function calcMan1(){
   
    let eficienciaDoCombustivelMan = document.querySelector('#eficiencia-do-combustivel')
    let precoDoCombustivel = document.querySelector('#combustivel')
    let precoDoOleo = document.querySelector('#oleo')
    let eficienciaDoOleoMan = document.querySelector('#eficiencia-do-oleo')
    let precoDoPneu = document.querySelector('#pneu')
    let eficienciaDoPneuMan = document.querySelector("#eficiencia-do-pneu")
    
    let custoDeCombustivel = (distanciaDoFrete.value * parseInt(precoDoCombustivel.value)) / parseInt(eficienciaDoCombustivelMan.value)
    document.querySelector('#custo-de-combustivel').innerHTML = parseFloat(custoDeCombustivel.toFixed(2))
    let custoDeOleo = (distanciaDoFrete.value * parseInt(precoDoOleo.value)) / parseInt(eficienciaDoOleoMan.value)
    document.querySelector('#custo-de-oleo').innerHTML = parseFloat(custoDeOleo.toFixed(2))
    let custoDePneu = (distanciaDoFrete.value * parseInt(precoDoPneu.value)) / parseInt(eficienciaDoPneuMan.value)
    document.querySelector('#custo-de-pneu').innerHTML = parseFloat(custoDePneu.toFixed(2))
    let lucroReal = parseInt(valorDoFrete.value) - (custoDeCombustivel +  custoDeOleo + custoDePneu)
    document.querySelector('#valor-do-frete').innerHTML = parseFloat(lucroReal.toFixed(2))
    let totalDosCustos =  parseFloat(custoDeCombustivel.toFixed(2)) + parseFloat(custoDeOleo.toFixed(2)) + parseFloat(custoDePneu.toFixed(2))
    document.querySelector('#total-dos-custos').innerHTML = parseFloat(totalDosCustos.toFixed(2))
}

botaDoCalculo.addEventListener('click' , ()=>{
    sessaoDeCalculos.classList.add('hidden')
    contDosCustos.classList.remove('hidden')
        
    calcMan1()
            
})

botaoDeRecalcular.addEventListener('click' , ()=>{
    contDosCustos.classList.add('hidden')
    sessaoDeCalculos.classList.remove('hidden')
   
})

botaoDeFecharCalculos.addEventListener('click' , ()=> location.reload())