import { fromDb, ToBD } from './utils'

export interface contratoSchema {
    cargaHoraria        : number
    horasExtras         : number
    comissao            : number
    duracao             : number
    experiencia         : boolean
    ferias              : number
    abonoPecuniario     : boolean
    valeTransporte      : boolean
    valeRefeicao        : boolean
}

export interface contratoBdSchema extends fromDb {
    _cargaHoraria       : number
    _horasExtras        : number
    _comissao           : number
    _duracao            : number
    _experiencia        : boolean
    _ferias             : number
    _abonoPecuniario    : boolean
    _valeTransporte     : boolean
    _valeRefeicao       : boolean
}

export class Contrato  extends ToBD {
    private _cargaHoraria       : number
    private _horasExtras        : number
    private _comissao           : number
    private _duracao            : number
    private _experiencia        : boolean
    private _ferias             : number
    private _abonoPecuniario    : boolean
    private _valeTransporte     : boolean
    private _valeRefeicao       : boolean

    constructor(contrato : contratoSchema | contratoBdSchema) {
        super()
        if (this.fromDb(contrato)) {
            this.cargaHoraria       = contrato._cargaHoraria
            this.horasExtras        = contrato._horasExtras
            this.comissao           = contrato._comissao
            this.duracao            = contrato._duracao
            this.experiencia        = contrato._experiencia
            this.ferias             = contrato._ferias
            this.abonoPecuniario    = contrato._abonoPecuniario
            this.valeTransporte     = contrato._valeTransporte
            this.valeRefeicao       = contrato._valeRefeicao
        }
        else {
            this.cargaHoraria       = contrato.cargaHoraria
            this.horasExtras        = contrato.horasExtras
            this.comissao           = contrato.comissao
            this.duracao            = contrato.duracao
            this.experiencia        = contrato.experiencia
            this.ferias             = contrato.ferias
            this.abonoPecuniario    = contrato.abonoPecuniario
            this.valeTransporte     = contrato.valeTransporte
            this.valeRefeicao       = contrato.valeRefeicao
        }
    }

    get cargaHoraria() : number {
        return this._cargaHoraria
    }
    set cargaHoraria(cargaHoraria : number) {
        this._cargaHoraria = cargaHoraria
    }

    get horasExtras() : number {
        return this._horasExtras
    }
    set horasExtras(horasExtras : number) {
        this._horasExtras = horasExtras
    }

    get comissao() : number {
        return this._comissao
    }
    set comissao(comissao : number) {
        this._comissao = comissao
    }

    get duracao() : number {
        return this._duracao
    }
    set duracao(duracao : number) {
        this._duracao = duracao
    }

    get experiencia() : boolean {
        return this._experiencia
    }
    set experiencia(experiencia : boolean) {
        this._experiencia = experiencia
    }

    get ferias() : number {
        return this._ferias
    }
    set ferias(ferias : number) {
        this._ferias = ferias
    }

    get abonoPecuniario() : boolean {
        return this._abonoPecuniario
    }
    set abonoPecuniario(abonoPecuniario : boolean) {
        this._abonoPecuniario = abonoPecuniario
    }

    get valeTransporte() : boolean {
        return this._valeTransporte
    }
    set valeTransporte(valeTransporte : boolean) {
        this._valeTransporte = valeTransporte
    }

    get valeRefeicao() : boolean {
        return this._valeRefeicao
    }
    set valeRefeicao(valeRefeicao : boolean) {
        this._valeRefeicao = valeRefeicao
    }
}
