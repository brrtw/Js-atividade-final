let numerosString = prompt("Digite uma lista de nmeros separados por virgula:");

let numerosArray = numerosString.split(",").map(Number);

let soma = 0;
for (let i = 0; i < numerosArray.length; i++) {
  soma += numerosArray[i];
}
let media = soma / numerosArray.length;


console.log(`A media dos numeros ${numerosString} é ${media}.`);
