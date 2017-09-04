export class Telefone {
    private _numero : string
    private _contato : string

    constructor (telefone : {
        numero : string,
        contato : string
    }) {
        this.contato = telefone.contato
        this.numero = telefone.numero
    }

    get contato () : string {
        return this._contato
    }

    set contato (contato : string) {
        this._contato = contato
    }

    get numero () : string {
        return this._numero
    }

    get formatedNumero () : string {
        // TODO: Formatar numero para impressão
        return this.numero
    }

    set numero (numero : string) {
        // TODO: Validar o numero
        this._numero = numero
    }
}

export class Endereco {
    private _logradouro : string
    private _numero : string
    private _CEP : string
    private _cidade : string
    private _estado : string

    constructor(endereco : {
        CEP : string,
        logradouro? : string,
        numero? : string,
        cidade? : string,
        estado? : string
    }) {
        if (endereco != undefined){
            this.CEP = endereco.CEP
        }
    }

    get formatedCEP () : string {
        // TODO: Formatar CEP para exibição
        return this.CEP
    }

    get CEP () : string {
        return this._CEP
    }

    set CEP (CEP : string) {
        // TODO: Validar CEP
        this._CEP = CEP
    }

    get prettyPrint() : string {
        // TODO: Formatar o endereço em uma unica linha para impressão
        return JSON.stringify(this)
    }
}