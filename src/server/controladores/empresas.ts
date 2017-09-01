import { MongoClient, Collection, Db } from 'mongodb'

export class Empresas {
    private _collection : Collection

    constructor(promisseDB : Promise<Db>, name : string) {
        promisseDB.then((db : Db) => {
            this._collection = db.collection(name)
        })
    }

    get name () : string {
        return this._collection.collectionName
    }
}
