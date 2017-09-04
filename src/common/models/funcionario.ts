import { Endereco } from './utils'

export class Funcionario {
    private _nome : string
    private _CPF : string
    public endereco : Endereco

    constructor (nome : string, CPF : string) {
    }

    get nome() : string {
        return this._nome
    }

    get CPF() : string {
        return this._CPF
    }

    get formatedCPF() : string {
        // TODO: Formatar CPF
        return this.CPF
    }
}