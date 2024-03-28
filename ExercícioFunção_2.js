import rl from "readline-sync";

function numero(num) {
    if (num %2 == 0){ 
        return "Par";
    } else {
        return "Impar"
    }
}
const num = rl.question("Digite um número: ")
const resultado = numero(num)

console.log(`O número ${num} é ${resultado}`)