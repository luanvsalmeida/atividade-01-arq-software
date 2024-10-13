const Turma = require('./Turma');

const TurmaPresencial = (codigo, nota, frequencia) => {
    const turma = Turma(codigo, nota);
    return {
        ...turma,       
        getFrequencia: () => frequencia,
        aprovado: () => turma.aprovado() && frequencia >= 75
    };
};

module.exports = TurmaPresencial;