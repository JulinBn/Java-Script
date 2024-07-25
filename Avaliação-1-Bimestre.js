//Julio Otávio Da Silva
import rl from "readline-sync";

function Somar(num1, num2) {
    return num1 + num2;

}
function Subtrair(num1, num2) {
    return num1 - num2;

}
function Multiplicar(num1, num2) {
    return num1 * num2; 

}
function Dividir(num1, num2) {
    return num1 / num2

}
function main() {
    let opcao;
    do {
        console.log("\nMenu:");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Multiplicação");
        console.log("4 - Dividir");
        console.log("5 - Sair");
    
        let operação = rl.questionInt("Digite o número da operação desejada:");

        switch (operação) {
            case 1 :
                let Somar1 = rl.questionInt("Digite o primeiro número para a soma: ");
                let Somar2 = rl.questionInt("Digite o segundo número para a soma: ");      
                const SomaDeNúmeros = Somar(Somar1, Somar2);
                console.log(` A soma dos números solicitados é, ${SomaDeNúmeros} :`);
                break;
            case 2 :
                let Subtrair1 = rl.questionInt("Digite o primeiro número para a subtração: ");
                let Subtrair2 = rl.questionInt("Digite o segundo número para a subtração: ");
                const SubtrairOsNúmeros = Subtrair(Subtrair1, Subtrair2);
                console.log(`A subtração dos números solicitados, é ${SubtrairOsNúmeros}`);
                break;
            case 3 :
                let Multiplicar1 = rl.questionInt("Digite o primeiro número para a multiplicação: ");
                let Multiplicar2 = rl.questionInt("Digite o segundo número para a multiplicação: ");
                const MultiplicarOsNumeros = Multiplicar(Multiplicar1, Multiplicar2);
                console.log(`A multiplicação dos números solicitados, é ${MultiplicarOsNumeros}`);
                break;
            case 4 : 
                let Dividir1 = rl.questionInt("Digite o primeiro número para a divisão: ");
                let Dividir2 = rl.questionInt("Digite o segundo número para a divisão: ");
                const DividirOsNúmeros = Dividir(Dividir1, Dividir2);
                console.log(`A divisão dos números solicitados, é ${DividirOsNúmeros}`);
                break;
            case 5:
                console.log("Encerrando sua Calculadora! ");
                break;
            default:
                console.log("Opção inválida!!");
            }
        } while (opcao !== 5);
    }
    
main();