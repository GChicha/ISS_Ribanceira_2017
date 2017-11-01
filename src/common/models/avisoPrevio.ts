// Checar de onde pegar funcionario
import { Funcionario } from "./utils"

export interface avisoPrevioSchema {
    _codigo                 : number,
    funcionario            : string,
    _dataAviso              : Date,
    _dataRescisao           : Date,
    _justificativaRescisao  : string
}

export class AvisoPrevio implements avisoPrevioSchema {
    private _codigo : number
    public  readonly funcionario : string
    private _dataAviso   : Date
    private _dataRescisao : Date
    private _justificativaRescisao : string
  
    constructor (avisoPrevio : avisoPrevioSchema) {
        this._codigo       = avisoPrevio._codigo
        this.funcionario  = avisoPrevio.funcionario
        this._dataAviso    = avisoPrevio._dataAviso
        this._dataRescisao = avisoPrevio._dataRescisao
        this._justificativaRescisao  = avisoPrevio._justificativaRescisao
    }

    get codigo () : number {
        return this._codigo
    }

    set codigo (_codigo : number) {
        this._codigo = _codigo
    }

    get funcionario () : string {
        return this.funcionario
    }

    set funcionario (funcionario : string) {
        this.funcionario = funcionario
    }

    get dataAviso () : string {
        return this._dataAviso
    }

    set dataAviso (_dataAviso : Date) {
        this._dataAviso = _dataAviso
    }

    get dataRescisao () : Date {
        return this._dataRescisao
    }

    set dataRescisao (_dataRescisao : Date) {
        this._dataRescisao = _dataRescisao
    }

    get justificativaRescisao () : string {
        return this._justificativaRescisao
    }

    set justificativaRescisao (_justificativaRescisao : string) {
        this._justificativaRescisao = _justificativaRescisao
    }

}
