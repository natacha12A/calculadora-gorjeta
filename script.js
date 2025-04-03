let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(event) {
    conta = Number(event.target.value)
    calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(event) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")

    if(event.target.value === "0"){ 
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else{
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(event.target.value)
    }

    calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagemBotao)
})

function receberPorcentagemBotao(event) {
    botoesGorjeta.forEach(botao => { 
        botao.classList.remove("botao-ativo")

        if (botao.value === event.target.value) { 
            botao.classList.add("botao-ativo");
        }
    });

    if(event.target.value !== ""){
        porcentagem = parseFloat(event.target.value) / 100;
    }else{
        porcentagem = 0
    }

    calcular()
}

const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input", receberPorcentagemBotao)

function calcular() {
    if (conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong");
        strongGorjetaTotal.innerHTML = `$${(conta * porcentagem / pessoas).toFixed(2)}`; // Corrigido erro na interpolação da string

        const strongTotal = document.querySelector(".total > strong");
        strongTotal.innerHTML = `$${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}`; // Adicionada interpolação correta
    }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar(){
    contaInput.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    gorjetaInput.value = ""

    pessoasInput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "$0.00"
    document.querySelector(".total > strong").innerHTML = "$0.00"

}
