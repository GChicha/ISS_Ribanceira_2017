module.exports.Telefone = class Telefone {
    constructor(telefone) {
        this.contato = telefone._contato || telefone.contato;
        this.numero = telefone._numero || telefone.numero;
    }

    get contato() {
        return this._contato;
    }

    set contato(contato) {
        this._contato = contato;
    }

    get numero() {
        return this._numero;
    }

    get formatedNumero() {
        // TODO: Formatar numero para impressão
        return this.numero;
    }

    set numero(numero) {
        // TODO: Validar o numero
        this._numero = numero;
    }
};

module.exports.Endereco = class Endereco {
    constructor(endereco) {
        this.numero = endereco.numero;
        this.logradouro = endereco.logradouro;
        this.CEP = endereco.CEP;
        this.cidade = endereco.cidade;
        this.estado = endereco.estado;
    }

    get formatedCEP() {
        // TODO: Formatar CEP para exibição
        return this.CEP;
    }

    get CEP() {
        return this._CEP;
    }

    set logradouro(logradouro) {
        this._logradouro = logradouro;
    }

    set numero(numero) {
        this._numero = numero;
    }

    set CEP(CEP) {
        this._CEP = CEP;
    }

    set cidade(cidade) {
        this._cidade = cidade;
    }

    set estado(estado) {
        this._estado = estado;
    }
};
