import database from './database';
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

const db = new database();

export default class viewRepository {
    viewShareNote = async (postID: any) => {
        try { return await db.query(getSharenote, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewShareNoteall = async () => {
        try { return await db.query(getAllSharenote, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewShareevent = async (postID: any) => {
        try { return await db.query(getShareevent, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewShareeventall = async () => {
        try { return await db.query(getAllShareevent, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewsubject = async (postID: any) => {
        try { return await db.query(getReviewsubject, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewsubjectall = async () => {
        try { return await db.query(getAllReviewsubject, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewtutor = async (postID: any) => {
        try { return await db.query(getReviewtutor, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewtutorall = async () => {
        try { return await db.query(getAllReviewtutor, []); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewbook = async (postID: any) => {
        try { return await db.query(getReviewbook, [postID]); }
        catch (err) { console.error('Error', err.message); }
    }

    viewReviewbookall = async () => {
        try { return await db.query(getAllReviewbook, []); }
        catch (err) { console.error('Error', err.message); }
    }
}

