// calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.

const valorDeVenda = 12.90;
const custo = 6;
const quantidade = 1000;

if (custo < 0 || valorDeVenda < 0) {
  console.log("Erro: Valor invalido! O valor não pode ser menor que zero");
}
else {
  let impostoSobreOCusto = custo * 0.2;
  let custoTotal = custo + impostoSobreOCusto;
  let lucro = valorDeVenda - custoTotal;
  let lucroTotal = lucro * quantidade;
  console.log("Lucro: R$", lucro);
  console.log("Lucro ao vender", quantidade + ": R$", lucroTotal);
};