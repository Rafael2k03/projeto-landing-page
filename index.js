// Obtendo referências aos elementos
const setaEsquerda = document.getElementById("Seta-esquerda");
const setaDireita = document.getElementById("Seta-direita");
const leonardo = document.getElementById("Leonardo");
const samantha = document.getElementById("Samantha");
const bruna = document.getElementById("Bruna");

// Função para rolar para a direita
function rolarParaDireita() {
    leonardo.style.display = "none";
    bruna.style.display = "flex";
    setaEsquerda.style.display = "flex";
    setaEsquerda.style.marginTop = "30%";
    setaDireita.style.display = "none";
}

// Função para rolar para a esquerda
function rolarParaEsquerda() {
    leonardo.style.display = "flex";
    bruna.style.display = "none";
    setaDireita.style.display = "flex";
    setaEsquerda.style.display = "none";
}
