const Endereco = require('./utils').Endereco;
const Telefone = require('./utils').Telefone;

module.exports = class Sindicato {
    constructor(sindicato) {
        this.telefone = new Telefone(sindicato._telefone);
        this.endereco = new Endereco(sindicato._endereco);
        this.nome = sindicato._nome;
        this.ramoAtividade = sindicato._ramoAtividade;
    }

    set nome(nome) {
        this._nome = nome;
    }

    set ramoAtividade(ramoAtividade) {
        this._ramoAtividade = ramoAtividade;
    }

    get telefone() {
        return this._telefone;
    }

    get endereco() {
        return this._endereco;
    }

    get nome() {
        return this._nome;
    }

    get ramoAtividade() {
        return this._ramoAtividade;
    }
};

