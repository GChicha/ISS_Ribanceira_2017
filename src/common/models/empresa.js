const Endereco = require('./utils').Endereco;

module.exports = class Empresa {
    constructor(empresa) {
        this.CNPJ = empresa.CNPJ || empresa._CNPJ;
        this.razaoSocial = empresa.razaoSocial || empresa._razaoSocial;
        this.endereco = new Endereco(empresa.endereco);
    }

    get razaoSocial() {
        return this._razaoSocial;
    }

    set razaoSocial(razaoSocial) {
        this._razaoSocial = razaoSocial;
    }

    get CNPJ() {
        return this._CNPJ;
    }

    set CNPJ(CNPJ) {
        this._CNPJ = CNPJ;
    }

    get formatedCNPJ() {
        // TODO: Formatar o CNPJ para exibição
        return this.CNPJ;
    }

    set CNPJ(CNPJ) {
        // TODO: Validar CNPJ
        this._CNPJ = CNPJ;
    }
};
