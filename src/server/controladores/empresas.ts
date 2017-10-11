import { MongoClient, Collection, Db, InsertOneWriteOpResult } from 'mongodb'
import { Router } from 'express'

import { ControladorGenerico } from './generico'
import { Empresa, empresaSchema } from '../../common/models/empresa'
import { Funcionario } from '../../common/models/funcionario'

export class Empresas extends ControladorGenerico<Empresa> {
    constructor(db : Db) {
        super(Empresa, db)
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
