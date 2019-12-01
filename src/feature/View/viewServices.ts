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
                const countComment = await this.repo.getCountComment(postID);
                return await this.parser.parserShareNote(result, owner, content, tagPost, comment, countComment);
            }
            else return result;
        }
        catch (err) { throw new Error(err.message); }
    }

    getShareNoteAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewShareNoteAll('e', 5 * (pageGet - 1), (5 * pageGet) - 1);
            let tagPost = new Array();
            for (let i = 0; i < Object.keys(result).length; i++) {
                tagPost.push(await this.repo.getPostTag(result[i].ShareNoteID));
            }
            const page = await this.repo.viewPage('sharenote');
            return await this.parser.parserPostAll(result, page, tagPost);
        }
        catch (err) { throw new Error(err.message); }
    }

    getShareEvent = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewShareEvent(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                const countComment = await this.repo.getCountComment(postID);
                return await this.parser.parserShareEvent(result, owner, content, tagPost, comment, countComment);
            }
            else return result;
        }
        catch (err) { throw new Error(err.message); }
    }

    getShareEventAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewShareEventAll('d', 5 * (pageGet - 1), (5 * pageGet) - 1);
            let tagPost = new Array();
            for (let i = 0; i < Object.keys(result).length; i++) {
                tagPost.push(await this.repo.getPostTag(result[i].ShareEventID));
            }
            const page = await this.repo.viewPage('shareevent');
            return await this.parser.parserPostAll(result, page, tagPost);
        }
        catch (err) { throw new Error(err.message); }
    }

    getReviewSubject = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewSubject(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                const countComment = await this.repo.getCountComment(postID);
                return await this.parser.parserReviewSubject(result, owner, content, tagPost, comment, countComment);
            }
            else return result;
        }
        catch (err) { throw new Error(err.message); }
    }

    getReviewSubjectAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewReviewSubjectAll('b', 5 * (pageGet - 1), (5 * pageGet) - 1);
            let tagPost = new Array();
            for (let i = 0; i < Object.keys(result).length; i++) {
                tagPost.push(await this.repo.getPostTag(result[i].ReviewSubjectID));
            }
            const page = await this.repo.viewPage('reviewsubject');
            return await this.parser.parserPostAll(result, page, tagPost);
        }
        catch (err) { throw new Error(err.message); }
    }

    getReviewTutor = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewTutor(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner = await this.checkOwner(result[0].UserID, userID);
                const content = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                const countComment = await this.repo.getCountComment(postID);
                return await this.parser.parserReviewTutor(result, owner, content, tagPost, comment, countComment);
            }
            else return result;
        }
        catch (err) { throw new Error(err.message); }
    }

    getReviewTutorAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewReviewTutorAll('c', 5 * (pageGet - 1), (5 * pageGet) - 1);
            let tagPost = new Array();
            for (let i = 0; i < Object.keys(result).length; i++) {
                tagPost.push(await this.repo.getPostTag(result[i].ReviewTutorID));
            }
            const page = await this.repo.viewPage('reviewtutor');
            return await this.parser.parserPostAll(result, page, tagPost);
        }
        catch (err) { throw new Error(err.message); }
    }

    getReviewBook = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewReviewBook(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner: boolean = await this.checkOwner(result[0].UserID, userID);
                const content: any = await this.repo.getPostContent(postID);
                const tagPost = await this.repo.getPostTag(postID);
                const comment = await this.repo.getComment(postID);
                const countComment = await this.repo.getCountComment(postID);
                return await this.parser.parserReviewBook(result, owner, content, tagPost, comment, countComment);
            }
            else return result;
        }
        catch (err) { throw new Error(err.message); }
    }

    getReviewBookAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewReviewBookAll('a', 5 * (pageGet - 1), (5 * pageGet) - 1);
            let tagPost = new Array();
            for (let i = 0; i < Object.keys(result).length; i++) {
                tagPost.push(await this.repo.getPostTag(result[i].ReviewBookID));
            }
            const page = await this.repo.viewPage('reviewbook');
            return await this.parser.parserPostAll(result, page, tagPost);
        }
        catch (err) { throw new Error(err.message); }
    }

    getFaq = async (postID: string, userID: string) => {
        try {
            const result = await this.repo.viewFaq(postID, this.checkTypePost(postID));
            if (result != '') {
                const owner: boolean = await this.checkOwner(result[0].UserID, userID);
                const tagPost = await this.repo.getPostTag(postID);
                const content: any = await this.repo.getPostContent(postID);
                const comment = await this.repo.getComment(postID);
                const countComment = await this.repo.getCountComment(postID);
                return await this.parser.parserFaq(result, owner, tagPost, comment, countComment,content);
            }
            else return result;
        }
        catch (err) { throw new Error(err.message); }
    }

    getFaqAll = async (pageGet: number) => {
        try {
            const result = await this.repo.viewFaqAll('f', 5 * (pageGet - 1), (5 * pageGet) - 1);
            let tagPost = new Array();
            for (let i = 0; i < Object.keys(result).length; i++) {
                tagPost.push(await this.repo.getPostTag(result[i].FAQID));
            }
            const page = await this.repo.viewPage('faq');
            return await this.parser.parserPostAll(result, page, tagPost);
        }
        catch (err) { throw new Error(err.message); }
    }

    getRecentlyPost = async (userId: string) => {
        try {
            const resultBook = await this.repo.getRecentlyPost('a', userId);
            const resultNote = await this.repo.getRecentlyPost('e', userId);
            const resultSubject = await this.repo.getRecentlyPost('b', userId);
            const resultTutor = await this.repo.getRecentlyPost('c', userId);
            const resultEvent = await this.repo.getRecentlyPost('d', userId);
            const resultFaq = await this.repo.getRecentlyPost('f', userId);
            return await this.parser.parserRecentlyPost(resultBook, resultSubject, resultTutor, resultEvent, resultNote, resultFaq);
        }
        catch (err) { throw new Error(err.message); }
    }

    checkOwner = async (postID: string, userID: string) => {
        if (postID == userID) return true;
        else return false;
    }

    checkTypePost = (postID: string) => {
        return postID.charAt(0);
    }
}