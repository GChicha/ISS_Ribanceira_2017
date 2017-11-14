const Endereco = require('./utils').Endereco

module.exports = class Funcionario {
    constructor (nome) {
    }

    get nome() {
        return this._nome
    }

    get CPF() {
        return this._CPF
    }

    get formatedCPF() {
        // TODO: Formatar CPF
        return this.CPF
    }
}
