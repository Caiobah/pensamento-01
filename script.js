// Seleciona todos os botões da página
const botoesProximo = document.querySelectorAll('.btn-proximo');
const botoesVoltar = document.querySelectorAll('.btn-voltar');

// Função genérica para trocar de passo
function trocarPasso(novoPassoId) {
    const passoAtivo = document.querySelector('.ativo');
    passoAtivo.classList.remove('ativo');
    
    document.getElementById('passo-' + novoPassoId).classList.add('ativo');
}

// Lógica para Avançar
botoesProximo.forEach(botao => {
    botao.addEventListener('click', function() {
        const proximoPasso = this.getAttribute('data-proximo');
        trocarPasso(proximoPasso);
    });
});

// Lógica para Voltar (Desafio Concluído!)
botoesVoltar.forEach(botao => {
    botao.addEventListener('click', function() {
        const passoAnterior = this.getAttribute('data-voltar');
        trocarPasso(passoAnterior);
    });
});