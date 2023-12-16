

let numeroSecreto = sorteiaNumero();

function alterarTexto(tag, texto ){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

alterarTexto("h1",'Jogo do Chute' );
alterarTexto("p", "Chute um numero de 1 a 10!");


function sorteiaNumero(){
    return parseInt(Math.random()*10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = "";

}

function verificaNumero(){
    let numeroDigitado = document.querySelector('input').value;
    console.log(numeroDigitado == numeroSecreto);

    if(numeroDigitado >= numeroSecreto){
        alterarTexto("p", "Numero secreto é menor");
        limparCampo();
    }else if(numeroDigitado <= numeroSecreto){
        alterarTexto("p", "Numero secreto é maior");
        limparCampo();
    }

    if(numeroDigitado == numeroSecreto){  
        alterarTexto("p", "Parabens você acertou");
        limparCampo();
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
}


function reiniciarJogo(){
    numeroSecreto = sorteiaNumero();
    limparCampo();
    alterarTexto("h1",'Jogo do Chute' );
    alterarTexto("p", "Chute um numero de 1 a 10!");
    document.getElementById("reiniciar").setAttribute('disabled', true)
}








