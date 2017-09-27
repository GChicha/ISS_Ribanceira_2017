import { MongoClient, Collection, Db, InsertOneWriteOpResult } from 'mongodb'
import { Router } from 'express'
import { Sindicato, sindicatoSchema } from '../../common/models/sindicato'

import { Controlador } from './controlador'

export class Sindicatos extends Controlador {
	public readonly router: Router = Router()

	constructor(db : Db) {
		super(db, "sindicatos")

		this.routes()
	}

	public async cadastrar(sindicato : Sindicato) {
		return this._collection.insertOne(sindicato)
	}

	public async findAll() : Promise<Array<Sindicato>> {
		return this._collection.find().map((doc : sindicatoSchema) => {
			return new Sindicato(doc)
		}).toArray()
	}

	public routes() : void {
		this.router.get('/', (req, res) => {
			this.findAll()
				.then(val => res.json(val))
				.catch(val => res.json(val))
		})

		this.router.post('/', (req, res) => {
			this.cadastrar(req.body)
				.then(val => res.json(val))
				.catch(val => res.json(val))
		})
	}
}
