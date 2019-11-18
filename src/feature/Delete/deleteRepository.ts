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
            console.error('Error', err.message);
        }
    }

    deleteShareEvent = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlShareEvent(), [postId]);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteReviewSubject = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlReviewSubject(), [postId]);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteReviewTutor = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlReviewTutor(), [postId]);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteReviewBook = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlReviewBook(), [postId]);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteFaq = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlFaq(), [postId]);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteComment = async (postId: string) => {
        try {
            return await this.db.query(this.sql.getSqlComment(), [postId]);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteOwner = async (postId:string) => {
        try {
            return await this.db.query(this.sql.getSqlOwner(), [postId]);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

}