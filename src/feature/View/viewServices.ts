import repo from './viewRepository';

export default class viewServices{
    private repo : repo;
    constructor(repo:repo){
        this.repo = repo;
    }
    getSharenote = async(postID:string) => {return await this.repo.viewShareNote(postID);}
    getSharenoteall = async() => {return await this.repo.viewShareNoteall();}
    getShareevent = async(postID:string) => {return await this.repo.viewShareevent(postID);}
    getShareeventall = async() => {return await this.repo.viewShareeventall();}
    getReviewsubject = async(postID:string) => {return await this.repo.viewReviewsubject(postID);}
    getReviewsubjectall = async() => {return await this.repo.viewReviewsubjectall();}
    getReviewtutor = async(postID:string) => {return await this.repo.viewReviewtutor(postID);}
    getReviewtutorall = async() => {return await this.repo.viewReviewtutorall();}
    getReviewbook = async(postID:string) => {return await this.repo.viewShareNote(postID);}
    getReviewbookall = async() => {return await this.repo.viewReviewbookall();}
}