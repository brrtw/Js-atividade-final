let lista = prompt("Digite uma lista de numeros separados por virgula:");

lista = lista.split(",").map(numero => parseFloat(numero));

function encontrarSegundoMaiorNumero(lista) {
  let primeiroMaiorNumero = -Infinity;
  let segundoMaiorNumero = -Infinity;
  
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > primeiroMaiorNumero) {
      segundoMaiorNumero = primeiroMaiorNumero;
      primeiroMaiorNumero = lista[i];
    } else if (lista[i] > segundoMaiorNumero && lista[i] !== primeiroMaiorNumero) {
      segundoMaiorNumero = lista[i];
    }
  }
  
  return segundoMaiorNumero;
}

let segundoMaiorNumero = encontrarSegundoMaiorNumero(lista);

console.log(`O segundo maior numero da lista é ${segundoMaiorNumero}.`);
