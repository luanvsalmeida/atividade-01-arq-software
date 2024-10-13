const Aluno = (nome, login, RA) => {
    return {
        getNome: () => nome,
        getLogin: () => login,
        getRA: () => RA
    };
};

module.exports = Aluno;