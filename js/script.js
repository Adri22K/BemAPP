let tamanhoFonte = 1;

// Funções de acessibilidade
function aumentarFonte() {
  tamanhoFonte += 0.1;
  document.body.style.fontSize = `${tamanhoFonte}em`;
}

function diminuirFonte() {
  tamanhoFonte = Math.max(0.8, tamanhoFonte - 0.1);
  document.body.style.fontSize = `${tamanhoFonte}em`;
}

function alternarContraste() {
  document.body.classList.toggle('contraste');
}

function alternarLeitura() {
  const conteudo = document.getElementById('conteudo');
  conteudo.classList.toggle('modo-leitura');
}

// Mostrar/Ocultar a barra de opções
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-bar');
  const opcoes = document.getElementById('acessibilidade-opcoes');

  // Mostrar/Ocultar a barra
  toggle.addEventListener('click', () => {
    opcoes.style.display = opcoes.style.display === 'none' ? 'flex' : 'none';
  });
});

