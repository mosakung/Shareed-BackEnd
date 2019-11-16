import database from '../../../server/database';
import {
    SQL_getShareNoteAll
} from './sqlraw';

export default class RepositoryShareNote {
    private db: database;

    constructor(db:database) {
        this.db = db;
    }

    getShareNotes = async () => {
        try {
            return await this.db.query(SQL_getShareNoteAll,[]);
        } catch (err) {
            console.error('Error from ShareNoteRepository: ', err.message);
        }
    }

    
}