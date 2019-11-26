import Repo from './createRepository';
import Validation from '../../../joi/validation';
import Parser from './createParser';

export default class createServices {
    private repo: Repo;
    private validation: Validation;
    private parser: Parser;

    constructor(repo: Repo, validation: Validation, parser: Parser) {
        this.repo = repo;
        this.validation = validation;
        this.parser = parser;
    }

    createShareNote = async (data: Object, userId: string) => {
        try {
            let postId = await this.getPostId(await this.repo.getPostId('sharenote'));
            let parserShareNote: Object = await this.parser.parserShareNote(data, userId, postId);
            await this.validation.validate(parserShareNote, 'sharenote');
            await this.repo.createShareNote(parserShareNote);
            let parserContent: Object = await this.parser.parserContent(data, postId);
            await this.validation.validate(parserContent, 'picture');
            await this.repo.createPostContent(parserContent);
            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            await this.validation.validate(parserTag, 'tag');
            await this.repo.createPostTag(parserTag);
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    createShareEvent = async (data: Object, userId: string) => {
        try {
            let postId = await this.getPostId(await this.repo.getPostId('shareevent'));
            let parserShareEvent: Object = await this.parser.parserShareEvent(data, userId, postId);
            await this.validation.validate(parserShareEvent, 'shareevent');
            await this.repo.createShareNote(parserShareEvent);
            let parserContent: Object = await this.parser.parserContent(data, postId);
            await this.validation.validate(parserContent, 'picture');
            await this.repo.createPostContent(parserContent);
            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            await this.validation.validate(parserTag, 'tag');
            await this.repo.createPostTag(parserTag);
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    createReviewBook = async (data: Object, userId: string) => {
        try {
            let postId = await this.getPostId(await this.repo.getPostId('reviewbook'));
            let parserReviewBook: Object = await this.parser.parserReviewBook(data, userId, postId);
            await this.validation.validate(parserReviewBook, 'reviewbook');
            await this.repo.createShareNote(parserReviewBook);
            let parserContent: Object = await this.parser.parserContent(data, postId);
            await this.validation.validate(parserContent, 'picture');
            await this.repo.createPostContent(parserContent);
            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            await this.validation.validate(parserTag, 'tag');
            await this.repo.createPostTag(parserTag);
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    createReviewTutor = async (data: Object, userId: string) => {
        try {
            let postId = await this.getPostId(await this.repo.getPostId('reviewtutor'));
            let parserReviewTutor: Object = await this.parser.parserReviewTutor(data, userId, postId);
            await this.validation.validate(parserReviewTutor, 'reviewtutor');
            await this.repo.createShareNote(parserReviewTutor);
            let parserContent: Object = await this.parser.parserContent(data, postId);
            await this.validation.validate(parserContent, 'picture');
            await this.repo.createPostContent(parserContent);
            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            await this.validation.validate(parserTag, 'tag');
            await this.repo.createPostTag(parserTag);
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    createFaq = async (data: Object, userId: string) => {
        try {
            let postId = await this.getPostId(await this.repo.getPostId('faq'));
            let parserFaq: Object = await this.parser.parserFaq(data, userId, postId);
            await this.validation.validate(parserFaq, 'faq');
            await this.repo.createFaq(parserFaq);
            let parserContent: Object = await this.parser.parserContent(data, postId);
            await this.validation.validate(parserContent, 'picture');
            await this.repo.createPostContent(parserContent);
            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            await this.validation.validate(parserTag, 'tag');
            await this.repo.createPostTag(parserTag);
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    createComment = async (data: Object, postId: string, userId: string) => {
        try {
            const result = await this.validation.validate(this.parser.parserComment(data, postId, userId), 'comment');
            await this.repo.createComment(result);
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    getPostId = async (postId) => {
        let numberId: number = parseInt(postId.substring(1, postId.length));
        numberId = numberId + 1;
        return (postId.substring(0, 1) + numberId);
    }

}

