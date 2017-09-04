import { MongoClient, Collection, Db } from 'mongodb'

export class Controlador {
    protected _collection : Collection

    constructor(db : Db, name : string) {
        this._collection = db.collection(name)
    }

    get name () : string {
        return this._collection.collectionName
    }

    public routes () {
        throw new Error("Rotas ainda não implementada")
    }
}
