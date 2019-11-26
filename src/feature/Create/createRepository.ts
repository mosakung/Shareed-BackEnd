import Sql from './createSql';
import Database from '../../../server/database';

export default class createRepository{
    private db : Database;
    private sql : Sql;

    constructor(db: Database,sql: Sql){
        this.db = db;
        this.sql = sql;
    }

    createShareNote = async (data:object) => {
        try { return await this.db.query(this.sql.createPost('e'), [data]); }
        catch (err) { console.error(err.message); }
    }

    createShareEvent = async (data:object) => {
        try { return await this.db.query(this.sql.createPost('d'), [data]); }
        catch (err) { console.error(err.message); }
    }

    createReviewSubject = async (data:object) => {
        try { return await this.db.query(this.sql.createPost('b'), [data]); }
        catch (err) { console.error(err.message); }
    }

    createReviewTutor = async (data:object) => {
        try { return await this.db.query(this.sql.createPost('c'), [data]); }
        catch (err) { console.error(err.message); }
    }

    createReviewBook = async (data:object) => {
        try { return await this.db.query(this.sql.createPost('a'), [data]); }
        catch (err) { console.error(err.message); }
    }

    createFaq = async (data:object) => {
        try { return await this.db.query(this.sql.createPost('f'), [data]); }
        catch (err) { console.error(err.message); }
    }

    createPostContent = async (data:object) => {
        try { return await this.db.query(this.sql.createContentPicture(), [data]); }
        catch (err) { console.error(err.message); }
    }

    createPostTag = async (data:object) => {
        try { return await this.db.query(this.sql.createTag(), [data]); }
        catch (err) { console.error(err.message); }
    }

    createComment = async (data:object) => {
        try { return await this.db.query(this.sql.createCommnentPost(), [data]); }
        catch (err) { console.error(err.message); }
    }

    getPostId = async (postType:string)=>{
        try { return await this.db.query(this.sql.getRecentlyPostId(postType),[]) ;}
        catch (err) { console.error(err.message); }
    }
}