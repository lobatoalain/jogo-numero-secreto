const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroSecreto()


function gerarNumeroSecreto(){
    return parseInt(Math.random()*maiorValor+1)

}

const elementoMenor = document.getElementById('valor-menor')
elementoMenor.innerHTML = menorValor

const elementoMaior = document.getElementById('valor-maior')
elementoMaior.innerHTML =  maiorValor

// console.log(numeroSecreto)
