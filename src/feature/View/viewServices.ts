import Repo from './viewRepository';
export default class viewServices {

    private repo: Repo;
    constructor(repo: Repo) {
        this.repo = repo;
    }
    
    getShareNote = async (postID: string) => {
        try { return await this.repo.viewShareNote(postID); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getShareNoteAll = async () => {
        try { return await this.repo.viewShareNoteAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getShareEvent = async (postID: string) => {
        try { return await this.repo.viewShareEvent(postID); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getShareEventAll = async () => {
        try { return await this.repo.viewShareEventAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getReviewSubject = async (postID: string) => {
        try { return await this.repo.viewReviewSubject(postID); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getReviewSubjectAll = async () => {
        try { return await this.repo.viewReviewSubjectAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getReviewTutor = async (postID: string) => {
        try { return await this.repo.viewReviewTutor(postID); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getReviewTutorAll = async () => {
        try { return await this.repo.viewReviewTutorAll(); }
        catch (err) { console.error('Error Services', err.message); }
    }
    getReviewBook = async (postID: string) => {
        try { return await this.repo.viewShareNote(postID); }
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