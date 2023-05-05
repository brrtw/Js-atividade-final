let palavra = prompt("Digite uma palavra:");

palavra = palavra.toLowerCase().replace(/\s/g, '');

let palindromo = palavra === palavra.split('').reverse().join('');

if (palindromo) {
  console.log(`A palavra ${palavra} e um palindromo.`);
} else {
  console.log(`A palavra ${palavra} nao e um palindromo.`);
}
