export interface fromDb {
    _id : string
}

export class ToBD {
    protected fromDb(sindicato : any) : sindicato is fromDb {
        return (sindicato as fromDb)._id != undefined;
    }
}

export interface telefoneSchema {
    numero : string
    contato : string
}

export interface telefoneBdSchema extends fromDb {
    _numero : string
    _contato : string
}

export class Telefone extends ToBD {
    private _numero : string
    private _contato : string

    constructor (telefone : telefoneSchema | telefoneBdSchema) {
        super()
        if (this.fromDb(telefone)) {
            this.contato = telefone._contato
            this.numero = telefone._numero
        }
        else {
            this.numero  = telefone.numero
            this.contato = telefone.contato
        }
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

export interface enderecoSchema {
    logradouro : string
    numero     : string
    CEP        : string
    cidade     : string
    estado     : string
}

export interface enderecoBdSchema extends fromDb {
    _logradouro : string
    _numero     : string
    _CEP        : string
    _cidade     : string
    _estado     : string
}

export class Endereco extends ToBD{
    private _logradouro : string
    private _numero     : string
    private _CEP        : string
    private _cidade     : string
    private _estado     : string

    constructor(endereco : enderecoSchema | enderecoBdSchema) {
        super()
        if (this.fromDb(endereco)) {
            this.numero     = endereco._numero
            this.logradouro = endereco._logradouro
            this.CEP        = endereco._CEP
            this.cidade     = endereco._cidade
            this.estado     = endereco._estado
        }
        else {
            this.numero     = endereco.numero
            this.logradouro = endereco.logradouro
            this.CEP        = endereco.CEP
            this.cidade     = endereco.cidade
            this.estado     = endereco.estado
        }
    }

    get formatedCEP () : string {
        // TODO: Formatar CEP para exibição
        return this.CEP
    }

    get CEP () : string {
        return this._CEP
    }

    get prettyPrint() : string {
        // TODO: Formatar o endereço em uma unica linha para impressão
        return JSON.stringify(this)
    }

    set logradouro (logradouro : string) {
        this._logradouro = logradouro
    }

    set numero (numero : string) {
        this._numero = numero
    }

    set CEP (CEP : string) {
        this._CEP = CEP
    }

    set cidade (cidade : string) {
        this._cidade = cidade
    }

    set estado (estado : string) {
        this._estado = estado
    }
}
