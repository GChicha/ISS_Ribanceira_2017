import { Endereco, Telefone } from './utils'

export interface sindicatoSchema {
	ramoAtividade : string,
	nome : string,
	endereco : Endereco,
	telefone : Telefone
}

export class Sindicato implements sindicatoSchema {
	private _ramoAtividade : string
	private _nome : string
	private _endereco : Endereco
	private _telefone : Telefone

	constructor(sindicato : sindicatoSchema) {
		this.telefone = sindicato.telefone
		this.endereco = sindicato.endereco
		this.nome = sindicato.nome
		this.ramoAtividade = sindicato.ramoAtividade
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

	get telefoneFormated() : string {
		return this._telefone.formatedNumero
	}

	get telefone() {
		return this._telefone
	}
}

