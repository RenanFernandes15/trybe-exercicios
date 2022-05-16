let peca = "cavalo".toLowerCase();

if (peca === "rei") {
 console.log("cima, baixo, direita, esquerda, diagonals.");
}
else if (peca === "dama") {
  console.log("cima, baixo, direita, esquerda, diagonals");
}
else if (peca === "bispo") {
  console.log("diagonais.");
}
else if (peca === "torre") {
  console.log("cima, baixo, direita, esquerda.");
}
else if (peca === "peão") {
  console.log("cima.");
}
else if (peca === "cavalo") {
  console.log("cima, baixo, direita, esquerda.");
}
else {
  console.log("Erro: Eassa peça não existe");
  console.log("Peças de xadrez: Rei, Dama, Bispo, Torre, Cavalo, Peão.");
};