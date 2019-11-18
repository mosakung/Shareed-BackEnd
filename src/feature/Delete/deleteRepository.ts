import database from '../../../server/database';
import Sqldelete from './deleteSqlRaw';

export default class DeleteRepository {
    private db: database;
    private sql: Sqldelete;

    constructor(db: database, sql:Sqldelete) {
        this.db = db;
        this.sql = sql;
    }

    deleteShareNote = async (postId: string, userId: string) => {
        try {
            return await this.db.query(this.sql.getSqlShareNote(), []);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteShareEvent = async (postId: string, userId: string) => {
        try {
            return await this.db.query(this.sql.getSqlShareEvent(), []);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteReviewSubject = async (postId: string, userId: string) => {
        try {
            return await this.db.query(this.sql.getSqlReviewSubject(), []);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteReviewTutor = async (postId: string, userId: string) => {
        try {
            return await this.db.query(this.sql.getSqlReviewTutor(), []);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteReviewBook = async (postId: string, userId: string) => {
        try {
            return await this.db.query(this.sql.getSqlReviewBook(), []);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteFaq = async (postId: string, userId: string) => {
        try {
            return await this.db.query(this.sql.getSqlFaq(), []);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

    deleteComment = async (postId: string, userId: string) => {
        try {
            return await this.db.query(this.sql.getSqlComment(), []);
        } catch (err) {
            console.error('Error', err.message);
        }
    }

}