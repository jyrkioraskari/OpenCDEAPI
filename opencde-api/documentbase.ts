import PouchDB from 'pouchdb';

PouchDB.plugin(require('pouchdb-find'));
export class Documentbase {
    private static instance: Documentbase;
    public db:any;

    private constructor() {
         this.db= new PouchDB('documents');
    }

    static getInstance(): Documentbase {
        if (!Documentbase.instance) {
            Documentbase.instance = new Documentbase();
        }

        return Documentbase.instance;
    }



}