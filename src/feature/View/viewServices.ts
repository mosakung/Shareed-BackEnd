import Repo from './viewRepository';
export default class viewServices {
    private repo: Repo;
    constructor(repo: Repo) {
        this.repo = repo;
    }
    getShareNote = async (postID: string) => { return await this.repo.viewShareNote(postID); }
    getShareNoteAll = async () => { return await this.repo.viewShareNoteAll(); }
    getShareEvent = async (postID: string) => { return await this.repo.viewShareEvent(postID); }
    getShareEventAll = async () => { return await this.repo.viewShareEventAll(); }
    getReviewSubject = async (postID: string) => { return await this.repo.viewReviewSubject(postID); }
    getReviewSubjectAll = async () => { return await this.repo.viewReviewSubjectAll(); }
    getReviewTutor = async (postID: string) => { return await this.repo.viewReviewTutor(postID); }
    getReviewTutorAll = async () => { return await this.repo.viewReviewTutorAll(); }
    getReviewBook = async (postID: string) => { return await this.repo.viewShareNote(postID); }
    getReviewBookAll = async () => { return await this.repo.viewReviewBookAll(); }

    checkOwner = async (postID, userID) => {
        if(postID == userID) return true;
        else return false;
    }
}