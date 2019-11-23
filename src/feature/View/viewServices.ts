import Repo from './viewRepository';
import Parser from './viewParser';

export default class ViewServices {

    private repo: Repo;
    private parser: Parser;

    constructor(repo: Repo, parser: Parser) {
        this.repo = repo;
        this.parser = parser;
    }

    getShareNote = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewShareNote(postID);
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getContentShareNote(postID);
                const postInformation = this.parser.parserShareNote(result, owner, content);
                return postInformation;
            }
            else return result;
        }
        catch (err) { console.error('Error Services', err.message); }
    }
    
    getShareNoteAll = async () => {
        try { return await this.repo.viewShareNoteAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }

    getShareEvent = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewShareEvent(postID);
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getContentShareEvent(postID);
                const postInformation = this.parser.parserShareEvent(result, owner, content);
                return postInformation;
            }
            else return result;
        }        catch (err) { console.error('Error Services', err.message); }
    }

    getShareEventAll = async () => {
        try { return await this.repo.viewShareEventAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewSubject = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewSubject(postID);
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getContentReviewSubject(postID);
                const postInformation = this.parser.parserReviewSubject(result, owner, content);
                return postInformation;
            }
            else return result;
        }
        catch (err) { console.error('Error Services', err.message); }
    }
    
    getReviewSubjectAll = async () => {
        try { return await this.repo.viewReviewSubjectAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewTutor = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewTutor(postID);
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getContentReviewTutor(postID);
                const postInformation = this.parser.parserReviewTutor(result, owner, content);
                return postInformation;
            }
            else return result;
        }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewTutorAll = async () => {
        try { return await this.repo.viewReviewTutorAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewBook = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewBook(postID);
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getContentReviewBook(postID);
                const postInformation :object = this.parser.parserReviewBook(result, owner, content);
                return postInformation;
            }
            else return result;
        }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewBookAll = async () => {
        try { return await this.repo.viewReviewBookAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }

    checkOwner = async (postID, userID) => {
        if (postID == userID) return true;
        else return false;
    }

}