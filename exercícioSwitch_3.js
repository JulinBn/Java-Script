function calcularAreaRetangulo(base, altura) {
    return base * altura;
}


function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}


function calcularAreaCirculo(raio) {
    const pi = 3.1415;
    return pi * raio * raio;
}


function main() {
    let opcao;
    do {
        console.log("\nMenu:");
        console.log("1 - Retângulo");
        console.log("2 - Triângulo");
        console.log("3 - Círculo");
        console.log("4 - Sair");

        opcao = parseInt(prompt("Digite o número da opção desejada:"));

        switch (opcao) {
            case 1:
                const baseRetangulo = parseFloat(prompt("Digite a base do retângulo (em unidades):"));
                const alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo (em unidades):"));
                const areaRetangulo = calcularAreaRetangulo(baseRetangulo, alturaRetangulo);
                console.log(`Área do retângulo: ${areaRetangulo} unidades²`);
                break;
            case 2:
                const baseTriangulo = parseFloat(prompt("Digite a base do triângulo (em unidades):"));
                const alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo (em unidades):"));
                const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
                console.log(`Área do triângulo: ${areaTriangulo} unidades²`);
                break;
            case 3:
                const raioCirculo = parseFloat(prompt("Digite o raio do círculo (em unidades):"));
                const areaCirculo = calcularAreaCirculo(raioCirculo);
                console.log(`Área do círculo: ${areaCirculo} unidades²`);
                break;
            case 4:
                console.log("Encerrando o programa. Obrigado!");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 4);
}

main();