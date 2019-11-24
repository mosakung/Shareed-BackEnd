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
            const result = await this.repo.viewShareNote(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserShareNote(result, owner, content, tagPost, comment);
            }
            else return result;
        }
        catch (err) { throw(err.message); }
    }

    getShareNoteAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewShareNoteAll('e', 5 * (pageGet - 1), (5 * pageGet) - 1);
            const page = await this.repo.viewPage('sharenote');
            return this.parser.parserPostAll(result, page);
        }
        catch (err) { throw (err.message); }
    }

    getShareEvent = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewShareEvent(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserShareEvent(result, owner, content, tagPost, comment);
            }
            else return result;
        }
        catch (err) { throw (err.message); }
    }

    getShareEventAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewShareEventAll('d', 5 * (pageGet - 1), (5 * pageGet) - 1);
            const page = await this.repo.viewPage('shareevent');
            return this.parser.parserPostAll(result, page);
        }
        catch (err) { throw (err.message); }
    }

    getReviewSubject = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewSubject(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserReviewSubject(result, owner, content, tagPost, comment);
            }
            else return result;
        }
        catch (err) { throw (err.message); }
    }

    getReviewSubjectAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewReviewSubjectAll('b', 5 * (pageGet - 1), (5 * pageGet) - 1);
            const page = await this.repo.viewPage('reviewsubject');
            return this.parser.parserPostAll(result, page);
        }
        catch (err) { throw (err.message); }
    }

    getReviewTutor = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewTutor(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserReviewTutor(result, owner, content, tagPost, comment);
            }
            else return result;
        }
        catch (err) { throw (err.message); }
    }

    getReviewTutorAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewReviewTutorAll('c', 5 * (pageGet - 1), (5 * pageGet) - 1);
            const page = await this.repo.viewPage('reviewtutor');
            return this.parser.parserPostAll(result, page);
        }
        catch (err) { throw (err.message); }
    }

    getReviewBook = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewBook(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner: boolean = await this.checkOwner(result[0].UserID, userID);
                const content: any = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserReviewBook(result, owner, content, tagPost, comment);
            }
            else return result;
        }
        catch (err) { throw (err.message); }
    }

    getReviewBookAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewReviewBookAll('a', 5 * (pageGet - 1), (5 * pageGet) - 1);
            const page = await this.repo.viewPage('reviewbook');
            return this.parser.parserPostAll(result, page);
        }
        catch (err) { throw (err.message); }
    }

    getFaq = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewBook(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner: boolean = await this.checkOwner(result[0].UserID, userID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                return this.parser.parserFaq(result, owner, tagPost, comment);
            }
            else return result;
        }
        catch (err) { throw (err.message); }
    }

    getFaqAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewFaqAll('f', 5 * (pageGet - 1), (5 * pageGet) - 1);
            const page = await this.repo.viewPage('faq');
            return this.parser.parserPostAll(result, page);
        }
        catch (err) { throw (err.message); }
    }

    checkOwner = async (postID: string, userID: string) => {
        if (postID == userID) return true;
        else return false;
    }

    checkTypePost = (postID: string) => {
        return postID.charAt(0);
    }
}