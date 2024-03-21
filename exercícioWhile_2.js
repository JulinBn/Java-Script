while (contadorBimestres <= 4) {
    let nota = rl.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
    somaNotas = somaNotas + nota;
    contadorBimestres++;
}
let mediaAluno = somaNotas / 4;
somaMedias += mediaAluno;
console.log(`Média do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);
contadorAlunos++;
let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);