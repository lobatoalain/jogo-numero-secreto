function validaChute(chute){
    const numero = +chute

    if(chuteForInvalido()(numero)){
        elementoChute.innerHTML += '<div>Número inválido</div>'
        return
    }

    if(numeroForaRange(numero)){
        elementoChute.innerHTML += `<div>O número deve estar entre ${menorValor} e o ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <buttom id="jogar-novamente" class="btn-jogar">Jogar novamente</buttom>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }

    function chuteForInvalido() {
        return Number.isNaN
    }

    function numeroForaRange(numero){
        return numero > maiorValor || numero< menorValor
    }

    document.body.addEventListener('click', e=>{
        if(e.target.id = 'jogar-novamente'){
            window.location.reload()
        }
    })
}