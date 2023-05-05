let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let celular = prompt("Digite seu numero de celular:");
let cidade = prompt("Digite a cidade onde mora:");

let usuario = {
  nome: nome,
  idade: idade,
  celular: celular,
  cidade: cidade
};

let alterar = prompt("Deseja alterar alguma informacao? (sim/nao)");

if (alterar === "sim") {
  console.log("Informacoes atuais:");
  console.log(usuario);
  
  let opcao = prompt("Qual informacao deseja alterar? (nome/idade/celular/cidade)");
  
  switch (opcao) {
    case "nome":
      let novoNome = prompt("Digite o novo nome:");
      usuario.nome = novoNome;
      break;
    case "idade":
      let novaIdade = prompt("Digite a nova idade:");
      usuario.idade = novaIdade;
      break;
    case "celular":
      let novoCelular = prompt("Digite o novo numero de celular:");
      usuario.celular = novoCelular;
      break;
    case "cidade":
      let novaCidade = prompt("Digite a nova cidade:");
      usuario.cidade = novaCidade;
      break;
    default:
      console.log("Opcao invalida.");
  }
}

console.log("Informacoes do usuario:");
console.log(usuario);
