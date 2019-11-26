import Sql from './createSql';
import Database from '../../../server/database';

export default class createRepository{
    private db : Database;
    private sql : Sql;

    constructor(db: Database,sql: Sql){
        this.db = db;
        this.sql = sql;
    }

    createShareNote = async (data:any) => {
        try { return await this.db.query(this.sql.createPost('e'), [data.ShareNoteID,data.Cover,data.Subject_Name,data.Section,data.Instructor_Name,data.Semeter,data.Title,data.UserID]); }
        catch (err) { throw new Error(err.message); }
    }

    createShareEvent = async (data:any) => {
        try { return await this.db.query(this.sql.createPost('d'), [data.ShareEventID,data.Cover,data.Resgister,data.Location,data.Condi,data.Describ,data.Title,data.UserID]); }
        catch (err) { throw new Error(err.message); }
    }

    createReviewSubject = async (data:any) => {
        try { return await this.db.query(this.sql.createPost('b'), [data.ReviewSubjectID,data.SubjectID,data.SubjectName,data.Instructor_Name,data.Des,data.Title,data.Section,data.UserID]); }
        catch (err) { throw new Error(err.message); }
    }

    createReviewTutor = async (data:any) => {
        try { return await this.db.query(this.sql.createPost('c'), [data.ReviewTutorID,data.TutorName,data.Academy,data.Subject_Teach,data.Des,data.ContactLink,data.Title,data.UserID]); }
        catch (err) { throw new Error(err.message); }
    }

    createReviewBook = async (data:any) => {
        try { return await this.db.query(this.sql.createPost('a'), [data.ReviewBookID,data.Cover,data.Title,data.WrittenBy,data.Edition,data.Link,data.Des,data.BookName,data.UserID]); }
        catch (err) { throw new Error(err.message); }
    }

    createFaq = async (data:any) => {
        try { return await this.db.query(this.sql.createPost('f'), [data.FAQID,data.title,data.description,data.UserID]); }
        catch (err) { throw new Error(err.message); }
    }

    createPostContent = async (data:any) => {
        try { return await this.db.query(this.sql.createContentPicture(), data); }
        catch (err) { throw new Error(err.message); }
    }

    createPostTag = async (data:any) => {
        try { return await this.db.query(this.sql.createTag(), data); }
        catch (err) { throw new Error(err.message); }
    }

    createComment = async (data:any) => {
        try { return await this.db.query(this.sql.createCommnentPost(), [data.Detail,data.PostID,data.UserID]); }
        catch (err) { throw new Error(err.message); }
    }

    getPostId = async (postType:string)=>{
        try { return await this.db.query(this.sql.getRecentlyPostId(postType),[]) ;}
        catch (err) { throw new Error(err.message); }
    }
}