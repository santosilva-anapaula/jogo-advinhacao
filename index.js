let botaoAdvinhar = document.getElementById("botaoAdvinhar");
let botaoRecomecar =  document.getElementById("botaoRecomecar");
let inputNumero = document.getElementById("inputNumero");
let mensagem = document.getElementById("mensagem");
let instrucoes = document.getElementById("textoInstrucoes");
let spanTentativas =  document.getElementById("spanNumeroTentativas");

let numeroSecreto = gerarNumeroAleatorio();

let numeroTentativas = 10;

inputNumero.addEventListener("keydown", () =>{
    mensagem.innerHTML = "";
})

botaoAdvinhar.addEventListener("click", () => {
    let numeroDigitado = parseInt(inputNumero.value);
    if(inputNumero.value === ''){
        inputNumero.focus();
        mensagem.textContent = "Digite um número!";
    }else if(numeroDigitado < 1 || numeroDigitado > 100) {
        mensagem.textContent = "Digite um número entre 1 e 100!";
    }else {
        adivinharNumero(numeroDigitado);
    }
});

botaoRecomecar.addEventListener("click", () => {
    recomecar();
});

function adivinharNumero(numeroDigitado) {
    numeroTentativas--;
    console.log(numeroSecreto)
    if(numeroDigitado > numeroSecreto) {
        mensagem.textContent = "Dica: O número é MENOR!";
    }else if(numeroDigitado < numeroSecreto) {
        mensagem.textContent = "Dica: O número é MAIOR!";
    }else{
        mensagem.textContent = "Você acertou!! Era o número " + numeroSecreto + ".";
        mostrarFimDoJogo();            
    }
    if(numeroTentativas === 0) {
        mensagem.textContent = "Suas tentativas acabaram! O número secreto era " + numeroSecreto + ".";
        mostrarFimDoJogo();
    }
    spanTentativas.textContent = numeroTentativas;
}

function recomecar() {
    numeroSecreto = gerarNumeroAleatorio();
    spanTentativas.innerHTML = 10;
    inputNumero.value = '';
    mensagem.textContent = "";
    ocultarFimDoJogo()
}

function gerarNumeroAleatorio() {
    return Math.round(Math.random()* (100 - 1) + 1);
}

function mostrarFimDoJogo(){
    botaoRecomecar.classList.remove("naoVisivel");
    inputNumero.classList.add("naoVisivel");
    botaoAdvinhar.classList.add("naoVisivel");
    instrucoes.classList.add("naoVisivel");
}

function ocultarFimDoJogo(){
    botaoRecomecar.classList.add("naoVisivel");
    inputNumero.classList.remove("naoVisivel");
    botaoAdvinhar.classList.remove("naoVisivel");
    instrucoes.classList.remove("naoVisivel");
}

