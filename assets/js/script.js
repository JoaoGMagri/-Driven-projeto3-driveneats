let nomeDoPrato;
let nomeDaBebida;
let nomeDoDoce;

let precoDoPrato = 0;
let precoDaBebida = 0;
let precoDoDoce = 0;

let liberarPedido = 0;

let pratoSelecionado = 0;
let bebidaSelecionado = 0;
let sobremesaSelecionado = 0;

function selecionadoComida(cartao) {

    const PratoSelecionado = document.querySelector('.selecionadoPrato');
    
    if (PratoSelecionado !== null) {
        PratoSelecionado.classList.remove('selecionadoPrato');
        PratoSelecionado.classList.add('esconderPrato');
    }
    
    cartao.classList.add('selecionadoPrato');
    cartao.classList.remove('esconderPrato');

    nomeDoPrato = document.querySelector('.selecionadoPrato h1').innerHTML; 
    
    if (nomeDoPrato === 'Prato feito') {
        precoDoPrato = 14.90;
    } else if (nomeDoPrato === 'Galinhada') {
        precoDoPrato = 15.90;
    } else if (nomeDoPrato === 'Feijoada') {
        precoDoPrato = 16.90;
    }

    pratoSelecionado = 1;
    pronto();
}

function selecionadoBebida(cartao) {

    const pratoSelecionado = document.querySelector('.selecionadoBebida');
    
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove('selecionadoBebida');
        pratoSelecionado.classList.add('esconderBebida');
    }

    cartao.classList.add('selecionadoBebida');
    cartao.classList.remove('esconderBebida');
    
    nomeDaBebida = document.querySelector('.selecionadoBebida h1').innerHTML;
    
    if (nomeDaBebida === 'Guaraná Lata') {
        precoDaBebida = 7.00;
    } else if (nomeDaBebida === 'Guaraná 1L') {
        precoDaBebida = 5.00;
    } else if (nomeDaBebida === 'Guaraná 1,5L') {
        precoDaBebida = 9.00;
    }
    
    bebidaSelecionado = 1;
    pronto();
}

function selecionadoSobremesa(cartao) {

    const pratoSelecionado = document.querySelector('.selecionadoSobremesa');
    
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove('selecionadoSobremesa');
        pratoSelecionado.classList.add('esconderSobremesa');
    }
    
    cartao.classList.add('selecionadoSobremesa');
    cartao.classList.remove('esconderSobremesa');
    
    nomeDoDoce = document.querySelector('.selecionadoSobremesa h1').innerHTML;
    
    if (nomeDoDoce === 'Brigadeiro colher') {
        precoDoDoce = 7.90;
    } else if (nomeDoDoce === 'Brigadeiro copo') {
        precoDoDoce = 9.90;
    } else if (nomeDoDoce === 'Pudim') {
        precoDoDoce = 14.90;
    }
    
    sobremesaSelecionado = 1;
    pronto();
}

function pronto() {

    if (pratoSelecionado === 1 && bebidaSelecionado === 1 && sobremesaSelecionado === 1) {
        const libradoFinalizar = document.querySelector('.confirmacao-de-pedido');
        const novoTexto = document.querySelector('.confirmacao-de-pedido button');
        libradoFinalizar.classList.add('pronto');
        novoTexto.innerHTML = "Fechar pedido";

        liberarPedido = 1;
    }

}

function precoTotal(x, y, z) {
    return(x+y+z);
}

function fechar() {
    if (liberarPedido === 1) {
        
        let texto = `Olá, gostaria de fazer o pedido:
- Prato: ${nomeDoPrato}
- Bebida: ${nomeDaBebida}
- Sobremesa: ${nomeDoDoce}
Total: R$ ${precoTotal(precoDoPrato, precoDaBebida, precoDoDoce).toFixed(2)}`;
        
        encodeURIComponent(texto);
        let linkcompleto = `https://wa.me/5565999977596?text=${encodeURIComponent(texto)}`;
        window.open(linkcompleto);
        
    }
}
