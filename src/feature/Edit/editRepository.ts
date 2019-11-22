import database from '../../../server/database';
import SqlEdit from './editSqlRaw';

export default class EditRepository {
    private db: database;
    private sql: SqlEdit;

    constructor(db: database, sql: SqlEdit) {
        this.db = db;
        this.sql = sql;
    }

    editPost = async (postId: string, typePost: string, body: any) => {
        try {
            return await this.db.query(this.sql.getSqlEdit(typePost), [body, postId])
        } catch (err) {
            throw (err.message);
        }
    }

    editOwner = async (postId: string, postType: string) => {
        try {
            return await this.db.query(this.sql.getSqlOwner(postType), [postId]);
        } catch (err) {
            throw (err.message);
        }
    }

    editPicture = async () => {
        
    }
}