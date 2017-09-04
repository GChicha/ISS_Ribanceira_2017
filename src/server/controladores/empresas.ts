import { MongoClient, Collection, Db, InsertOneWriteOpResult } from 'mongodb'
import { Router } from 'express'

import { Controlador } from './controlador'
import { Empresa, empresaSchema } from '../../common/models/empresa'
import { Funcionario } from '../../common/models/funcionario'

export class Empresas extends Controlador {
    public readonly router : Router = Router()

    constructor(db : Db) {
        super(db, "empresas")

        this.routes()
    }

    public cadastrar(empresa : Empresa) : Promise<InsertOneWriteOpResult> {
        return this._collection.insertOne(empresa)
    }

    public adicionarFuncionario (empresa : Empresa, funcionario : Funcionario) : Promise<boolean>{
        return new Promise<boolean> ((resolve, reject) => {
        })
    }

    public findAll () : Promise<Array<Empresa>> {
        return this._collection.find().map((doc : empresaSchema) => {
            return new Empresa(doc)
        }).toArray()
    }

    public routes() : void {
        this.router.get("/findall", (req, res) => {
            this.findAll()
                .then(values => res.json(values))
                .catch(val => res.json(val))
        })

        this.router.post("/add", (req, res) => {
            let empresa : Empresa = req.body
            this.cadastrar(empresa) 
                .then(val => res.json(val))
                .catch(val => res.json(val))
        })
    }
}