let frase = prompt("Digite uma frase:");

frase = frase.toLowerCase();

let count = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === "a") {
    count++;
  }
}

console.log(`A letra "a" aparece ${count} vezes na frase "${frase}".`);
