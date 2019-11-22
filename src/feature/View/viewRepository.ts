import Database from '../../../server/database';
import Sql from './viewSqlRaw';
import { type } from 'os';

export default class ViewRepository {

    private db: Database;
    private sql: Sql
    constructor(db: Database, sql: Sql) {
        this.db = db;
        this.sql = sql;
    }

    viewShareNote = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typePost), [postID]); }
        catch (err) { throw (err.message); }
    }

    viewShareNoteAll = async (typePost: string) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), []); }
        catch (err) { throw (err.message); }
    }

    viewShareEvent = async (postID: string, typepost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typepost), [postID]); }
        catch (err) { throw (err.message); }
    }

    viewShareEventAll = async (typePost: string) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), []); }
        catch (err) { throw (err.message); }
    }

    viewReviewSubject = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typePost), [postID]); }
        catch (err) { throw (err.message); }
    }

    viewReviewSubjectAll = async (typePost: string) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), []); }
        catch (err) { throw (err.message); }
    }

    viewReviewTutor = async (postID: string, typepost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typepost), [postID]); }
        catch (err) { throw (err.message); }
    }

    viewReviewTutorAll = async (typePost: string) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), []); }
        catch (err) { throw (err.message); }
    }

    viewReviewBook = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typePost), [postID]); }
        catch (err) { throw (err.message); }
    }

    viewReviewBookAll = async (typePost: string) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), []); }
        catch (err) { throw (err.message); }
    }

    viewFaq = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typePost), [postID]); }
        catch (err) { throw (err.message); }
    }

    viewFaqAll = async (typePost: string) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), []); }
        catch (err) { throw (err.message); }
    }

    getPostContent = async (postID: string) => {
        try { return await this.db.query(this.sql.getPostContent(), [postID]); }
        catch (err) { throw (err.message); }
    }

    getPostTag = async (postID: string) => {
        try { return await this.db.query(this.sql.getPostTag(), [postID]); }
        catch (err) { throw (err.message); }
    }

    getComment = async (postID: string) => {
        try { return await this.db.query(this.sql.getPostComment(), [postID]); }
        catch (err) { throw (err.message); }
    }
}

