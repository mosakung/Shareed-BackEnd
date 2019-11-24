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
            throw new Error(err.message);
        }
    }

    fetchOwner = async (postId: string, postType: string) => {
        try {
            return await this.db.query(this.sql.getSqlOwner(postType), [postId]);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    fetchPicture = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlPicture('fetch'), [postId]);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    createPicture = async (pictureName: string, postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlPicture('create'), [pictureName, postId]);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    editPicture = async (pictureId: string, newPicture: string) => {
        try {
            return await this.db.query(this.sql.getSqlPicture('edit'), [pictureId, newPicture])
        } catch (err) {
            throw new Error(err.message);
        }
    }

    deletePicture = async (pictureId: string) => {
        try {
            return await this.db.query(this.sql.getSqlPicture('delete'), [pictureId]);
        } catch (err) {
            throw new Error(err.message);
        }
    }
}