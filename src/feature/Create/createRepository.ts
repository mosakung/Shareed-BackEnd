import Sql from './createSql';
import Database from '../../../server/database';

export default class createRepository{
    private db : Database;
    private sql : Sql;

    constructor(db: Database,sql: Sql){
        this.db = db;
        this.sql = sql;
    }

    createShareNote = async (postID:string ,typePost: string) => {
        try { return await this.db.query(this.sql.createPost('e'), []); }
        catch (err) { console.error(err.message); }
    }

    createShareEvent = async (postID: string, typepost: string) => {
        try { return await this.db.query(this.sql.createPost('d'), [postID]); }
        catch (err) { console.error(err.message); }
    }

    createReviewSubject = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.createPost('b'), [postID]); }
        catch (err) { console.error(err.message); }
    }

    createReviewTutor = async (postID: string, typepost: string) => {
        try { return await this.db.query(this.sql.createPost('c'), [postID]); }
        catch (err) { console.error(err.message); }
    }

    createReviewBook = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.createPost('a'), [postID]); }
        catch (err) { console.error(err.message); }
    }

    createFaq = async (postID: string, typePost: string) => {
        try { return await this.db.query(this.sql.createPost('f'), [postID]); }
        catch (err) { console.error(err.message); }
    }

    getPostContent = async (postID: string) => {
        try { return await this.db.query(this.sql.createContentPicture(), [postID]); }
        catch (err) { console.error(err.message); }
    }

    getPostTag = async (postID: string) => {
        try { return await this.db.query(this.sql.createTag(), [postID]); }
        catch (err) { console.error(err.message); }
    }

    getComment = async (postID: string) => {
        try { return await this.db.query(this.sql.createCommnentPost(), [postID]); }
        catch (err) { console.error(err.message); }
    }
}