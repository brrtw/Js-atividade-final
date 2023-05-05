const texto = prompt("Digite um texto:");

const palavras = texto.split(" ");

const contagem = {};

for (let i = 0; i < palavras.length; i++) {
  const palavra = palavras[i];
  if (contagem[palavra]) {
    contagem[palavra]++;
  } else {
    contagem[palavra] = 1;
  }
}

console.log(contagem);
