import { Endereco } from './utils'

export interface empresaSchema {
    razaoSocial : string,
    CNPJ : string,
    endereco : Endereco
}

export class Empresa implements empresaSchema {
    private _razaoSocial : string
    private _CNPJ : string
    public readonly endereco : Endereco

    constructor (empresa : empresaSchema) {
        this.CNPJ = empresa.CNPJ
        this.razaoSocial = empresa.razaoSocial
        this.endereco = new Endereco(empresa.endereco)
    }

    get razaoSocial () : string {
        return this._razaoSocial
    }

    set razaoSocial (razaoSocial : string) {
        this._razaoSocial = razaoSocial
    }

    get CNPJ () : string {
        return this._CNPJ
    }

    get formatedCNPJ () : string {
        // TODO: Formatar o CNPJ para exibição 
        return this.CNPJ
    }

    set CNPJ (CNPJ : string) {
        // TODO: Validar CNPJ
        this._CNPJ = CNPJ
    }
}
