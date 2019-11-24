import database from '../../../server/database';
import SqlEdit from './editSqlRaw';

export default class EditRepository {
    private db: database;
    private sql: SqlEdit;

    constructor(db: database, sql: SqlEdit) {
        this.db = db;
        this.sql = sql;
    }

    editPost = async (typePost: string, body: Array<any>) => {
        try {
            return await this.db.query(this.sql.getSqlEdit(typePost), body);
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

    createPicture = async (newPicture: string, postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlPicture('create'), [newPicture, postId]);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    editPicture = async (pictureId: string, newPicture: string) => {
        try {
            return await this.db.query(this.sql.getSqlPicture('edit'), [newPicture, pictureId])
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

    fetchTag = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlTag('fetch'), [postId]);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    createTag = async (postId: string, tagDetail: string) => {
        try {
            return await this.db.query(this.sql.getSqlTag('create'), [tagDetail, postId]);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    editTag = async (tagDetail: string, tagId: string) => {
        try {
            return await this.db.query(this.sql.getSqlTag('edit'), [tagDetail, tagId])
        } catch (err) {
            throw new Error(err.message);
        }
    }

    deleteTag = async (tagId: string) => {
        try {
            return await this.db.query(this.sql.getSqlTag('delete'), [tagId]);
        } catch (err) {
            throw new Error(err.message);
        }
    }
}