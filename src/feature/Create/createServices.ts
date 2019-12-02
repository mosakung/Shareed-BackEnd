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

    createShareNote = async (data: any, userId: string) => {
        try {
            let query = await this.repo.getPostId('e');
            let postId = await this.getPostId(query[0].ShareNoteID);
            let parserShareNote: Object = await this.parser.parserShareNote(data, userId, postId);

            await this.validation.validate(parserShareNote, 'sharenote');
            await this.repo.createShareNote(parserShareNote);

            let parserContent: Object = await this.parser.parserContent(data, postId);
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.validation.validate(await this.parser.parserContentSchema(parserContent[i]), 'picture');
            }
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.repo.createPostContent(parserContent[i]);
            }

            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.validation.validate(await this.parser.parserTagSchema(parserTag[i]), 'tag')
            }
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.repo.createPostTag(parserTag[i]);
            }
            return true;
        }
        catch (err) { throw new Error(err.message); }
    }

    createShareEvent = async (data: Object, userId: string) => {
        try {
            let query = await this.repo.getPostId('d');
            let postId = await this.getPostId(query[0].ShareEventID);
            let parserShareEvent: Object = await this.parser.parserShareEvent(data, userId, postId);
            await this.validation.validate(parserShareEvent, 'shareevent');
            await this.repo.createShareEvent(parserShareEvent);

            let parserContent: Object = await this.parser.parserContent(data, postId);
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.validation.validate(await this.parser.parserContentSchema(parserContent[i]), 'picture');
            }
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.repo.createPostContent(parserContent[i]);
            }

            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.validation.validate(await this.parser.parserTagSchema(parserTag[i]), 'tag')
            }
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.repo.createPostTag(parserTag[i]);
            }
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    createReviewBook = async (data: Object, userId: string) => {
        try {
            let query = await this.repo.getPostId('a');
            let postId = await this.getPostId(query[0].ReviewBookID);
            let parserReviewBook: Object = await this.parser.parserReviewBook(data, userId, postId);
            await this.validation.validate(parserReviewBook, 'reviewbook');
            await this.repo.createReviewBook(parserReviewBook);
            
            let parserContent: Object = await this.parser.parserContent(data, postId);
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.validation.validate(await this.parser.parserContentSchema(parserContent[i]), 'picture');
            }
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.repo.createPostContent(parserContent[i]);
            }

            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.validation.validate(await this.parser.parserTagSchema(parserTag[i]), 'tag')
            }
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.repo.createPostTag(parserTag[i]);
            }
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    createReviewTutor = async (data: Object, userId: string) => {
        try {
            let query = await this.repo.getPostId('c');
            let postId = await this.getPostId(query[0].ReviewTutorID);
            console.log('1')
            let parserReviewTutor: Object = await this.parser.parserReviewTutor(data, userId, postId);
            console.log(parserReviewTutor)
            await this.validation.validate(parserReviewTutor, 'reviewtutor');
            console.log('1')
            await this.repo.createReviewTutor(parserReviewTutor);

            let parserContent: Object = await this.parser.parserContent(data, postId);
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.validation.validate(await this.parser.parserContentSchema(parserContent[i]), 'picture');
            }
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.repo.createPostContent(parserContent[i]);
            }

            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.validation.validate(await this.parser.parserTagSchema(parserTag[i]), 'tag')
            }
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.repo.createPostTag(parserTag[i]);
            }
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    createReviewSubject = async (data: Object, userId: string) => {
        try {
            let query = await this.repo.getPostId('b');
            let postId = await this.getPostId(query[0].ReviewSubjectID);
            let parserReviewSubject: Object = await this.parser.parserReviewSubject(data, userId, postId);
            await this.validation.validate(parserReviewSubject, 'reviewsubject');
            await this.repo.createReviewSubject(parserReviewSubject);

            let parserContent: Object = await this.parser.parserContent(data, postId);
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.validation.validate(await this.parser.parserContentSchema(parserContent[i]), 'picture');
            }
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.repo.createPostContent(parserContent[i]);
            }

            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.validation.validate(await this.parser.parserTagSchema(parserTag[i]), 'tag')
            }
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.repo.createPostTag(parserTag[i]);
            }
            return true;
        }
        catch (err) { throw new Error("Error Services"); }
    }

    createFaq = async (data: Object, userId: string) => {
        try {
            let query = await this.repo.getPostId('f');
            let postId = await this.getPostId(query[0].FAQID);
            let parserFaq: Object = await this.parser.parserFaq(data, userId, postId);
            await this.validation.validate(parserFaq, 'faq');
            await this.repo.createFaq(parserFaq);

            let parserContent: Object = await this.parser.parserContent(data, postId);
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.validation.validate(await this.parser.parserContentSchema(parserContent[i]), 'picture');
            }
            for (let i = 0; i < Object.keys(parserContent).length; i++) {
                await this.repo.createPostContent(parserContent[i]);
            }

            let parserTag: Object = await this.parser.parserTagPost(data, postId);
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.validation.validate(await this.parser.parserTagSchema(parserTag[i]), 'tag')
            }
            for (let i = 0; i < Object.keys(parserTag).length; i++) {
                await this.repo.createPostTag(parserTag[i]);
            }
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

