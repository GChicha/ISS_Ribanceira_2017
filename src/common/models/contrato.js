module.exports = class Contrato {
    constructor(contrato) {
        this.cargaHoraria = contrato._cargaHoraria;
        this.horasExtras = contrato._horasExtras;
        this.comissao = contrato._comissao;
        this.duracao = contrato._duracao;
        this.experiencia = contrato._experiencia;
        this.ferias = contrato._ferias;
        this.abonoPecuniario = contrato._abonoPecuniario;
        this.valeTransporte = contrato._valeTransporte;
        this.valeRefeicao = contrato._valeRefeicao;
    }

    get cargaHoraria() {
        return this._cargaHoraria;
    }
    set cargaHoraria(cargaHoraria) {
        this._cargaHoraria = cargaHoraria;
    }

    get horasExtras() {
        return this._horasExtras;
    }
    set horasExtras(horasExtras) {
        this._horasExtras = horasExtras;
    }

    get comissao() {
        return this._comissao;
    }
    set comissao(comissao) {
        this._comissao = comissao;
    }

    get duracao() {
        return this._duracao;
    }
    set duracao(duracao) {
        this._duracao = duracao;
    }

    get experiencia() {
        return this._experiencia;
    }
    set experiencia(experiencia) {
        this._experiencia = experiencia;
    }

    get ferias() {
        return this._ferias;
    }
    set ferias(ferias) {
        this._ferias = ferias;
    }

    get abonoPecuniario() {
        return this._abonoPecuniario;
    }
    set abonoPecuniario(abonoPecuniario) {
        this._abonoPecuniario = abonoPecuniario;
    }

    get valeTransporte() {
        return this._valeTransporte;
    }
    set valeTransporte(valeTransporte) {
        this._valeTransporte = valeTransporte;
    }

    get valeRefeicao() {
        return this._valeRefeicao;
    }
    set valeRefeicao(valeRefeicao) {
        this._valeRefeicao = valeRefeicao;
    }
};
