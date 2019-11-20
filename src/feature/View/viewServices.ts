import Repo from './viewRepository';
import Parser from './viewParser';

export default class ViewServices {

    private repo: Repo;
    private parser: Parser;
    constructor(repo: Repo) {
        this.repo = repo;
        this.parser = this.parser;
    }

    getShareNote = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewShareNote(postID);
            if (result != '') {
                const owner = await this.checkOwner(result[0].userID, userID);
                //const content = await this.repo.getContentInformation(postID);
                //return await this.parser.form(result, owner, content);
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
        try { return await this.repo.viewShareEvent(postID); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getShareEventAll = async () => {
        try { return await this.repo.viewShareEventAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getReviewSubject = async (postID: string, userID: string) => {
        try { return await this.repo.viewReviewSubject(postID); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getReviewSubjectAll = async () => {
        try { return await this.repo.viewReviewSubjectAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getReviewTutor = async (postID: string, userID: string) => {
        try { return await this.repo.viewReviewTutor(postID); }
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
                const owner = await this.checkOwner(result[0].userID, userID);
                const content = await this.repo.getContentInformation('ReviewBookID',postID);
                const test = this.parser.parserReviewBook(result,owner,content);
                console.log(test);
                return content;
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