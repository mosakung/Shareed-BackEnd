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
            const result = await this.repo.viewShareNote(postID,this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserShareNote(result, owner, content, tagPost, comment);
            }
            else return result;
        }
        catch (err) { console.error('Error Services', err.message); }
    }
    
    getShareNoteAll = async (postID: string) => {
        try { return await this.repo.viewShareNoteAll(this.checkTypePost(postID)); }
        catch (err) { console.error('Error Services', err.message); }
    }

    getShareEvent = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewShareEvent(postID,this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserShareEvent(result, owner, content, tagPost, comment);
            }
            else return result;
        }        catch (err) { console.error('Error Services', err.message); }
    }

    getShareEventAll = async (postID:string) => {
        try { return await this.repo.viewShareEventAll(this.checkTypePost(postID)); }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewSubject = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewSubject(postID,this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserReviewSubject(result, owner, content, tagPost, comment);
            }
            else return result;
        }
        catch (err) { console.error('Error Services', err.message); }
    }
    
    getReviewSubjectAll = async (postID) => {
        try { return await this.repo.viewReviewSubjectAll(this.checkTypePost(postID)); }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewTutor = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewTutor(postID,this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserReviewTutor(result, owner, content, tagPost, comment);
            }
            else return result;
        }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewTutorAll = async (postID:string) => {
        try { return await this.repo.viewReviewTutorAll(this.checkTypePost(postID)); }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewBook = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewBook(postID,this.checkTypePost(postID));
            if (result != '') {
                const owner :boolean = await this.checkOwner(result[0].UserID, userID);
                const content :any = await this.repo.getPostContent(postID);                 
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserReviewBook(result, owner, content, tagPost, comment);
            }
            else return result;
        }
        catch (err) { console.error('Error Services', err.message); }
    }

    getReviewBookAll = async (postID:string) => {
        try { 
            return await this.repo.viewReviewBookAll(this.checkTypePost(postID)); 
        }
        catch (err) { console.error('Error Services', err.message); }
    }

    getFaq = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewBook(postID,this.checkTypePost(postID));
            if (result != '') {
                const owner :boolean = await this.checkOwner(result[0].UserID, userID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserFaq(result, owner, tagPost, comment);
            }
            else return result;
        }
        catch (err) { console.error('Error Services', err.message); }
    }

    getFaqAll = async (postID:string) => {
        try { return await this.repo.viewFaqAll(this.checkTypePost(postID)); }
        catch (err) { console.error('Error Services', err.message); }
    }

    checkOwner = async (postID:string, userID:string) => {
        if (postID == userID) return true;
        else return false;
    }

    checkTypePost = (postID:string) =>{
        return postID.charAt(0);
    }

}