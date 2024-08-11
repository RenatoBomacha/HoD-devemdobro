const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();

    marcarBotaoSelecionados(botao);

    esconderImagemAtiva();

    mostrarImagemFundo(indice);

    esconderInformacoesAtivas();

    mostrarInformacoesAtivas(indice);
  });
});

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

function marcarBotaoSelecionados(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".imagem.ativa");
  if (imagemAtiva) {
    imagemAtiva.classList.remove("ativa");
  }
}

function mostrarImagemFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
  const informacoesAtivas = document.querySelector(".informacoes.ativa");
  if (informacoesAtivas) {
    informacoesAtivas.classList.remove("ativa");
  }
}

function mostrarInformacoesAtivas(indice) {
  informacoes[indice].classList.add("ativa");
}
