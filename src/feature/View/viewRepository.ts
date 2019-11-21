import database from '../../../server/database';
import {
    getAllReviewbook,
    getAllReviewsubject,
    getAllReviewtutor,
    getAllShareevent,
    getAllSharenote,
    getSharenote,
    getReviewsubject,
    getReviewtutor,
    getReviewbook,
    getShareevent,
    getContentReviewBook,
    getContentReviewSubject,
    getContentReviewTutor,
    getContentShareEvent,
    getContentShareNote
} from './viewSqlRaw';

export default class ViewRepository {
    
    private db: database;
    constructor(db: database) {
        this.db = db;
    }

    viewShareNote = async (postID: string) => {
        try { return await this.db.query(getSharenote, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewShareNoteAll = async () => {
        try { return await this.db.query(getAllSharenote, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewShareEvent = async (postID: string) => {
        try { return await this.db.query(getShareevent, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewShareEventAll = async () => {
        try { return await this.db.query(getAllShareevent, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewSubject = async (postID: string) => {
        try { return await this.db.query(getReviewsubject, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewSubjectAll = async () => {
        try { return await this.db.query(getAllReviewsubject, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewTutor = async (postID: string) => {
        try { return await this.db.query(getReviewtutor, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewTutorAll = async () => {
        try { return await this.db.query(getAllReviewtutor, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewBook = async (postID: string) => {
        try { return await this.db.query(getReviewbook, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewBookAll = async () => {
        try { return await this.db.query(getAllReviewbook, []); }
        catch (err) { console.error('Error', err.message); }
    }

    getContentShareNote = async (postID:string) => {
        try { return await this.db.query(getContentShareNote, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }
    
    getContentShareEvent = async (postID:string) => {
        try { return await this.db.query(getContentShareEvent, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    getContentReviewSubject = async (postID:string) => {
        try { return await this.db.query(getContentReviewSubject, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    getContentReviewTutor = async (postID:string) => {
        try { return await this.db.query(getContentReviewTutor, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    getContentReviewBook = async (postID:string) => {
        try { return await this.db.query(getContentReviewBook, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }
}

