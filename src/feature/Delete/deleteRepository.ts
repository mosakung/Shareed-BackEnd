import database from '../../../server/database';
import Sqldelete from './deleteSqlRaw';

export default class DeleteRepository {
    private db: database;
    private sql: Sqldelete;

    constructor(db: database, sql: Sqldelete) {
        this.db = db;
        this.sql = sql;
    }

    deleteShareNote = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlShareNote(), [postId]);
        } catch (err) {
            throw(err.message);
        }
    }

    deleteShareEvent = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlShareEvent(), [postId]);
        } catch (err) {
            throw(err.message);
        }
    }

    deleteReviewSubject = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlReviewSubject(), [postId]);
        } catch (err) {
            throw(err.message);
        }
    }

    deleteReviewTutor = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlReviewTutor(), [postId]);
        } catch (err) {
            throw(err.message);
        }
    }

    deleteReviewBook = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlReviewBook(), [postId]);
        } catch (err) {
            throw(err.message);
        }
    }

    deleteFaq = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlFaq(), [postId]);
        } catch (err) {
            throw(err.message);
        }
    }

    deleteComment = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlComment(), [postId]);
        } catch (err) {
            throw(err.message);
        }
    }

    deleteOwner = async (postId:string, postType: string) => {
        try {
            return await this.db.query(this.sql.getSqlOwner(postType), [postId]);
        } catch (err) {
            throw(err.message);
        }
    }

    deleteOwnerComment = async (postId:string) => {
        try {
            return await this.db.query(this.sql.getSqlOwnerComment(), [postId]);
        } catch (err) {
            throw(err.message);
        }
    }

}