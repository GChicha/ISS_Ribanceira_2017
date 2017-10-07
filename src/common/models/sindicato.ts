import { Endereco, Telefone, ToBD, fromDb } from './utils'

export interface sindicatoSchema {
    ramoAtividade : string
    nome : string
    endereco : Endereco
    telefone : Telefone
}

export interface sindicatoDbSchema extends fromDb {
    _ramoAtividade : string
    _nome : string
    endereco : Endereco
    telefone : Telefone
}

export class Sindicato extends ToBD implements sindicatoSchema  {
    private _ramoAtividade : string
    private _nome : string
    private _endereco : Endereco
    private _telefone : Telefone

    constructor(sindicato : sindicatoSchema | sindicatoDbSchema) {
        super()
        if (this.fromDb(sindicato)) {
            this.telefone = sindicato.telefone
            this.endereco = sindicato.endereco
            this.nome = sindicato._nome
            this.ramoAtividade = sindicato._ramoAtividade
        }
        else {
            this.telefone = sindicato.telefone
            this.endereco = sindicato.endereco
            this.nome = sindicato.nome
            this.ramoAtividade = sindicato.ramoAtividade
        }
    }

    set telefone(telefone : Telefone) {
        this._telefone = telefone
    }

    set nome(nome : string) {
        this._nome = nome
    }

    set endereco(endereco : Endereco) {
        this._endereco = endereco
    }

    set ramoAtividade(ramoAtividade : string) {
        this._ramoAtividade = ramoAtividade
    }

    get telefone() {
        return this._telefone
    }

    get endereco() {
        return this._endereco
    }

    get nome() {
        return this._nome
    }

    get ramoAtividade() {
        return this._ramoAtividade
    }
}

