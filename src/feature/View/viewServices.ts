import Repo from './viewRepository';
const repo = new Repo();
export default class viewServices {
    private repo: Repo;
    constructor() {
        this.repo = repo;
    }
    getSharenote = async (postID: string,ID: string) => { const result = await this.repo.viewShareNote(postID);}
    getShareNoteAll = async () => { return await this.repo.viewShareNoteall(); }
    getShareEvent = async (postID: string) => { return await this.repo.viewShareevent(postID); }
    getShareEventAll = async () => { return await this.repo.viewShareeventall(); }
    getReviewSubject = async (postID: string) => { return await this.repo.viewReviewsubject(postID); }
    getReviewSubjectAll = async () => { return await this.repo.viewReviewsubjectall(); }
    getReviewTutor = async (postID: string) => { return await this.repo.viewReviewtutor(postID); }
    getReviewTutorAll = async () => { return await this.repo.viewReviewtutorall(); }
    getReviewBook = async (postID: string) => { return await this.repo.viewShareNote(postID); }
    getReviewBookAll = async () => { return await this.repo.viewReviewbookall(); }
    
    checkOwner = (userID, ID) =>{
    }
}