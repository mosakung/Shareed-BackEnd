import Database from '../../../server/database';
import Sql from './viewSqlRaw';

export default class ViewRepository {

    private db: Database;
    private sql: Sql
    constructor(db: Database, sql: Sql) {
        this.db = db;
        this.sql = sql;
    }

    viewShareNote = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typePost), [postID]); }
        catch (err) { throw new Error(err.message); }
    }

    viewShareNoteAll = async (typePost: string, firstOrder: number, secondOrder: number) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), [firstOrder, secondOrder]); }
        catch (err) { throw new Error(err.message); }
    }

    viewShareEvent = async (postID: string, typepost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typepost), [postID]); }
        catch (err) { throw new Error(err.message); }
    }

    viewShareEventAll = async (typePost: string, firstOrder: number, secondOrder: number) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), [firstOrder, secondOrder]); }
        catch (err) { throw new Error(err.message); }
    }

    viewReviewSubject = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typePost), [postID]); }
        catch (err) { throw new Error(err.message); }
    }

    viewReviewSubjectAll = async (typePost: string, firstOrder: number, secondOrder: number) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), [firstOrder, secondOrder]); }
        catch (err) { throw new Error(err.message); }
    }

    viewReviewTutor = async (postID: string, typepost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typepost), [postID]); }
        catch (err) { throw new Error(err.message); }
    }

    viewReviewTutorAll = async (typePost: string, firstOrder: number, secondOrder: number) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), [firstOrder, secondOrder]); }
        catch (err) { throw new Error(err.message); }
    }

    viewReviewBook = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typePost), [postID]); }
        catch (err) { throw new Error(err.message); }
    }

    viewReviewBookAll = async (typePost: string, firstOrder: number, secondOrder: number) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), [firstOrder, secondOrder]); }
        catch (err) { throw new Error (err.message); }
    }

    viewPage = async (typePost: string): Promise<any> => {
        try { return await this.db.query(this.sql.getCountPost() + typePost, []); }
        catch (err) { throw new Error(err.message); }
    }

    viewFaq = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.getQueryPost(typePost), [postID]); }
        catch (err) { throw new Error(err.message); }
    }

    viewFaqAll = async (typePost: string, firstOrder: number, secondOrder: number) => {
        try { return await this.db.query(this.sql.getAllQueryPost(typePost), [firstOrder, secondOrder]); }
        catch (err) { throw new Error(err.message); }
    }

    getRecentlyPost = async (typePost: string, userId: string) => {
        try { return await this.db.query(this.sql.getRecentlyQueryPost(typePost), [userId]); }
        catch (err) { throw new Error(err.message); }
    }

    getPostContent = async (postID: string) => {
        try { return await this.db.query(this.sql.getPostContent(), [postID]); }
        catch (err) { throw new Error(err.message); }
    }

    getPostTag = async (postID: string) => {
        try { return await this.db.query(this.sql.getPostTag(), [postID]); }
        catch (err) { throw new Error(err.message); }
    }

    getComment = async (postID: string) => {
        try { return await this.db.query(this.sql.getPostComment(), [postID]); }
        catch (err) { throw new Error(err.message); }
    }

    getCountComment = async (postID: string)=> {
        try { return await this.db.query(this.sql.getCountComment(), [postID]); }
        catch (err) { throw new Error(err.message); }
    }
}

