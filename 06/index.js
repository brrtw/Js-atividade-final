let numero = prompt("Digite um numero:");

numero = parseInt(numero);

if (isNaN(numero) || numero < 0) {
  console.log("Numero invalido.");
} else {
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  
  console.log(`O fatorial de ${numero} e ${fatorial}.`);
}