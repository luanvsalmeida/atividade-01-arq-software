const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');

const aluno1 = Aluno('João', 'joao123', '123456');
const turma1 = Turma('MAT101', 8);
const turmaPresencial1 = TurmaPresencial('MAT101', 8, 80);

console.log(`Aluno: ${aluno1.getNome()}, Login: ${aluno1.getLogin()}, RA: ${aluno1.getRA()}`);
console.log(`Turma: ${turma1.getCodigo()}, Nota: ${turma1.getNota()}, Aprovado: ${turma1.aprovado()}`);
console.log(`Turma Presencial: ${turmaPresencial1.getCodigo()}, Nota: ${turmaPresencial1.getNota()}, Frequência: ${turmaPresencial1.getFrequencia()}, Aprovado: ${turmaPresencial1.aprovado()}`);
