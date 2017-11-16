const Endereco = require('./utils').Endereco;

module.exports = class Funcionario {
    constructor(funcionario) {
        this.nome = funcionario.nome;
        this.CPF = funcionario.CPF;
        this.endereco = new Endereco(funcionario.endereco);
    }

    get nome() {
        // TODO Validar Nome
        return this._nome;
    }

    get CPF() {
        return this._CPF;
    }

    set CPF(CPF) {
        // TODO Validar CPF
        this._CPF = CPF;
    }
};
