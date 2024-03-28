import rl from "readline-sync";

//Declaração da função.
function CaixaAlta(string) {
    return string.toUpperCase();
}
let nome = rl.question("Digite seu nome: ")
console.log(`Eu sou o ${CaixaAlta(nome)}`)

//Expressão da função.
const UpperCase = function(string) { return string.toUpperCase()};
console.log(`Você não é ${UpperCase(nome)}`);

//Função de Seta
const maiusculas = (string) => string.toUpperCase();
console.log(`Entendeu, ${maiusculas(nome)}!?`);