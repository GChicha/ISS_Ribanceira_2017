const Router = require('express').Router;

module.exports = class ControladorGenerico {
    constructor(classe, db) {
        this.classe = classe;

        this._collection = db.collection(this.classe.name);

        this.router = Router();
        this.routes();
    }

    async cadastrar(doc) {
        return this._collection.insertOne(new this.classe(doc));
    }

    async findAll() {
        return this._collection.find().map(doc => new this.classe(doc)).toArray();
    }

    async findId(id) {
        return new Promise((resolve, reject) => {
            this._collection.findOne({ _id: id })
                .then((doc) => {
                    if (Object.keys(doc).length > 0) { resolve(new this.classe(doc)); } else { reject(new Error('Not Found')); }
                })
                .catch(err => reject(err));
        });
    }

    async find(query = {}) {
        return this._collection.find(query).map(doc => new this.classe(doc)).toArray();
    }

    routes() {
        throw new Error('Rotas ainda não implementada');
    }
};
