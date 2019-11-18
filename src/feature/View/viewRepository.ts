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
    getShareevent
} from './sqlraw';

export default class ViewRepository {
    private db: database;
    constructor(db: database) {
        this.db = db;
    }
    viewShareNote = async (postID: any) => {
        try { return await this.db.query(getSharenote, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewShareNoteAll = async () => {
        try { return await this.db.query(getAllSharenote, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewShareEvent = async (postID: any) => {
        try { return await this.db.query(getShareevent, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewShareEventAll = async () => {
        try { return await this.db.query(getAllShareevent, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewSubject = async (postID: any) => {
        try { return await this.db.query(getReviewsubject, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewSubjectAll = async () => {
        try { return await this.db.query(getAllReviewsubject, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewTutor = async (postID: any) => {
        try { return await this.db.query(getReviewtutor, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewTutorAll = async () => {
        try { return await this.db.query(getAllReviewtutor, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewBook = async (postID: any) => {
        try { return await this.db.query(getReviewbook, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewBookAll = async () => {
        try { return await this.db.query(getAllReviewbook, []); }
        catch (err) { console.error('Error', err.message); }
    }
}

