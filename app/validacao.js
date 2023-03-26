function verificaValorValido(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        console.log('valor inválido')
    }
    if(numero > maiorValor || numero < menorValor){

        const erro =document.querySelector('.mensagem')
        erro.innerHTML =`<div> você disse:</div>
        <span class="box">${chute}</span>
        <p>Número inválido!</p>
        <p>O número precisa estar entre ${menorValor} e ${maiorValor}</p>
        `
    }
    if(numero === numeroSecreto){  
        document.body.innerHTML= `
            <h2>Você acertou!<h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogador novamente</button>
        
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i> </div>
        `
    } else{
        elementoChute.innerHTML += `
        
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i> </div>
        `

    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})