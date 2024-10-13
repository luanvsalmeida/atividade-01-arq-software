const Turma = (codigo, nota) => {
    return {
        getCodigo: () => codigo,
        getNota: () => nota,
        aprovado: () => nota >= 6
    };
};

module.exports = Turma;