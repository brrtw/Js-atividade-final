const nomesTexto = prompt("Digite uma lista de nomes separados por vrgula:");

const nomes = nomesTexto.split(",");

nomes.sort();

const nomesOrdenados = nomes.join(",");

console.log(nomesOrdenados);