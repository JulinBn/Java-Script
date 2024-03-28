import rl from "readline-sync";

function SomaNumeros(num1, num2) {
    return num1 + num2;
}
let num1 = rl.question("Digite primeiro número: ")
let num2 = rl.question("Digite o segundo número: ")
let resultado = SomaNumeros(num1,num2)

console.log(`A soma do números ${num1} + ${num2} = ${resultado}`)