import { Router } from 'express'
import { Collection, Db } from 'mongodb'

export class ControladorGenerico<T> {
    public readonly router: Router = Router()
    private _collection : Collection

    private classe : new (T) => T

    constructor(classe : new (T) => T, db : Db) {
        this.classe = classe
        this.routes()
    }

    public async cadastrar(doc : T) {
        return this._collection.insertOne(doc)
    }

    public async findAll() : Promise<Array<T>> {
        return this._collection.find().map((doc : T) => {
            return new this.classe(doc)
        }).toArray()
    }

    public async findId(id : string) : Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this._collection.findOne({_id: id})
                .then(doc => {
                    if (Object.keys(doc).length > 0)
                        resolve(new this.classe(doc))
                    else
                        reject(new Error("Not Found"))
                })
                .catch(err => reject(err))
        })
    }

    public async find(query? : Object) : Promise<Array<T>> {
        return this._collection.find(query).map((doc : T) => new this.classe(doc)).toArray()
    }

    public routes () {
        throw new Error("Rotas ainda não implementada")
    }

}
