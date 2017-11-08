// vim: ts=8 

import { Funcionario } from "./utils"
       
export interface ocorrenciaSchema {
    funcionario : Funcionario,
    _dataOcorrencia : Date,
    _tipoDeOcorrencia : string,
    _justificativaOcorrencia : string,
    _valor : number
}

export class Ocorrencia implements ocorrenciaSchema {
    public readonly funcionario : Funcionario
    private _dataOcorrencia : Date
    private _tipoDeOcorrencia : string
    private _justificativaOcorrencia : string
    private _valor : number

    constructor (ocorrencia : ocorrenciaSchema) {
        this.funcionario = ocorrencia.funcionario
        this._dataOcorrencia = ocorrencia._dataOcorrencia
        this._tipoDeOcorrencia = ocorrencia._tipoDeOcorrencia
        this._justificativaOcorrencia = ocorrencia._justificativaOcorrencia
        this._valor = ocorrencia._valor
    }

    get dataOcorrencia () : Date {
        return this._dataOcorrencia 
    }

    set dataOcorrencia (_dataOcorrencia : Date) {
        this._dataOcorrencia = _dataOcorrencia
    }

    get tipoDeOcorrencia () : string {
        return this._tipoDeOcorrencia 
    }

    set tipoDeOcorrencia (_tipoDeOcorrencia : string) {
        this._tipoDeOcorrencia = _tipoDeOcorrencia
    }

    get justificativaOcorrencia () : string {
        return this._justificativaOcorrencia 
    }

    set justificativaOcorrencia (_justificativaOcorrencia : string) {
        this._justificativaOcorrencia = _justificativaOcorrencia
    }

    get valor () : number {
        return this._valor 
    }

    set valor (_valor : number) {
        this._valor = _valor
    }
}
